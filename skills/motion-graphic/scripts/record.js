#!/usr/bin/env node
// Record a motion-graphic HTML built on assets/engine.html to an MP4 (H.264 + AAC).
//
//   node record.js <file.html | url> [--out film.mp4] [--lang en] [--fps 30] [--crf 18]
//
// Needs puppeteer-core, Chrome/Chromium (same setup as check.js) and ffmpeg on PATH.
// Because render(t) is a pure function of time, frames are drawn one by one at exact timestamps (no screen capture,
// no dropped frames), and the soundtrack comes from the engine's own offline audio render (?audiotest), resampled
// to 48 kHz — so picture and sound are sample-accurate regardless of machine speed.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
let puppeteer;
try { puppeteer = require('puppeteer-core'); } catch (e){
  console.error(`puppeteer-core not found. Install it once next to this script:\n  npm i --prefix "${__dirname}" puppeteer-core@23\nor install it elsewhere and set NODE_PATH to that node_modules.`);
  process.exit(2);
}
const args = process.argv.slice(2);
const VALUED = ['--out', '--lang', '--fps', '--crf'];
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const target0 = args.find((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
if (!target0){ console.error('usage: node record.js <file.html|url> [--out film.mp4] [--lang en] [--fps 30] [--crf 18]'); process.exit(2); }
const target = /^(https?|file):/.test(target0) ? target0 : 'file://' + path.resolve(target0);
const lang = opt('--lang', '');
const fps = +opt('--fps', 30), crf = opt('--crf', '18');
const out = path.resolve(opt('--out', path.basename(target0).replace(/\.html?$/i, '') + (lang ? '-' + lang : '') + '.mp4'));
const CHROME = process.env.CHROME || [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/snap/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].find(p => fs.existsSync(p));
if (!CHROME){ console.error('Chrome/Chromium not found. Set CHROME=/path/to/chrome.'); process.exit(2); }
const RATE = 48000;
const url = q => target + (target.includes('?') ? '&' : '?') + q + (lang ? '&lang=' + lang : '');

// ?audiotest renders the soundtrack in an OfflineAudioContext at 22.05 kHz; swap in 48 kHz and keep the buffer.
const TAP_AUDIO = rate => {
  const Orig = window.OfflineAudioContext;
  window.OfflineAudioContext = function (ch, len, sr){
    const oc = new Orig(ch, Math.ceil(len / sr * rate), rate), start = oc.startRendering.bind(oc);
    oc.startRendering = () => start().then(buf => { window.__rec = buf; return buf; });
    return oc;
  };
};

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-rec-'));
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--autoplay-policy=no-user-gesture-required'] });
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => console.error('page error:', e.message));
    await page.setViewport({ width: 1920, height: 1080 });

    // 1. soundtrack → 16-bit stereo WAV
    await page.evaluateOnNewDocument(TAP_AUDIO, RATE);
    await page.goto(url('audiotest&t=0'), { waitUntil: 'load' });
    await page.waitForFunction(() => document.body.dataset.audio && window.__rec, { timeout: 120000 });
    const audioErr = await page.evaluate(() => document.body.dataset.audio.startsWith('ERR') ? document.body.dataset.audio : '');
    if (audioErr) throw new Error('audio render failed: ' + audioErr);
    const pcm = await page.evaluate(() => {
      const b = window.__rec, L = b.getChannelData(0), R = b.numberOfChannels > 1 ? b.getChannelData(1) : L;
      const n = b.length, a = new Int16Array(n * 2);
      for (let i = 0; i < n; i++){ a[2 * i] = Math.max(-1, Math.min(1, L[i])) * 32767; a[2 * i + 1] = Math.max(-1, Math.min(1, R[i])) * 32767; }
      const u = new Uint8Array(a.buffer); let s = '';
      for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
      return btoa(s);
    });
    const data = Buffer.from(pcm, 'base64'), hdr = Buffer.alloc(44);
    hdr.write('RIFF', 0); hdr.writeUInt32LE(36 + data.length, 4); hdr.write('WAVEfmt ', 8); hdr.writeUInt32LE(16, 16);
    hdr.writeUInt16LE(1, 20); hdr.writeUInt16LE(2, 22); hdr.writeUInt32LE(RATE, 24); hdr.writeUInt32LE(RATE * 4, 28);
    hdr.writeUInt16LE(4, 32); hdr.writeUInt16LE(16, 34); hdr.write('data', 36); hdr.writeUInt32LE(data.length, 40);
    const wav = path.join(tmp, 'audio.wav');
    fs.writeFileSync(wav, Buffer.concat([hdr, data]));

    // 2. frames → ffmpeg (PNG over stdin), muxed with the WAV
    await page.goto(url('t=0'), { waitUntil: 'load' });
    await page.waitForFunction(() => document.body.dataset.ready === '1' && window.__motion, { timeout: 30000 });
    const DUR = await page.evaluate(() => window.__motion.DUR);
    const N = Math.round(DUR * fps);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'png', '-i', '-', '-i', wav,
      '-c:v', 'libx264', '-preset', 'slow', '-crf', crf, '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
      '-shortest', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'pipe'] });
    let ffErr = ''; ff.stderr.on('data', d => { ffErr += d; });
    const done = new Promise((res, rej) => { ff.on('error', rej); ff.on('close', c => c ? rej(new Error('ffmpeg exited ' + c + '\n' + ffErr)) : res()); });
    for (let i = 0; i < N; i++){
      const png = await page.evaluate(t => { window.__motion.render(t); return document.getElementById('cv').toDataURL('image/png').slice(22); }, i / fps);
      if (!ff.stdin.write(Buffer.from(png, 'base64'))) await new Promise(r => ff.stdin.once('drain', r));
      if (i % fps === 0) process.stdout.write(`\rframes ${i}/${N}`);
    }
    ff.stdin.end();
    await done;
    process.stdout.write(`\rframes ${N}/${N}\n`);
    console.log(`${out}  ${DUR.toFixed(1)}s  ${fps}fps  ${(fs.statSync(out).size / 1e6).toFixed(1)} MB`);
  } finally {
    await browser.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
})().catch(e => { console.error(e.message || e); process.exit(1); });
