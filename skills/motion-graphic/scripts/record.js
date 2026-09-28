#!/usr/bin/env node
// Record a motion-graphic HTML built on assets/engine.html to an MP4 (H.264 + AAC).
//
//   node record.js <file.html | url> [--out film.mp4] [--lang en] [--fps 30] [--crf 18] [--verify-only]
//
// Needs puppeteer-core, Chrome/Chromium (same setup as check.js) and ffmpeg on PATH.
// Because render(t) is a pure function of time, frames are drawn one by one at exact timestamps (no screen capture,
// no dropped frames), and the soundtrack comes from the engine's own offline audio render (?audiotest), resampled
// to 48 kHz — so picture and sound are sample-accurate regardless of machine speed.
//
// Wait for it to finish: it takes minutes, and a run cut off by the caller exiting leaves no usable file.
// It renders into <out>.part.mp4, probes that with ffprobe and exits 1 unless it is playable and as long as the film
// (±0.5 s); only then is it moved to --out and a final `verified:` line printed. --verify-only runs just that check on
// an existing --out file (no rendering). Without ffprobe the check is skipped and the last line says so.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');
let puppeteer;
try { puppeteer = require('puppeteer-core'); } catch (e){
  console.error(`puppeteer-core not found. Install it once next to this script:\n  npm i --prefix "${__dirname}" puppeteer-core@23\nor install it elsewhere and set NODE_PATH to that node_modules.`);
  process.exit(2);
}
const args = process.argv.slice(2);
const VALUED = ['--out', '--lang', '--fps', '--crf'];
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const target0 = args.find((a, i) => !a.startsWith('--') && !VALUED.includes(args[i - 1]));
if (!target0){ console.error('usage: node record.js <file.html|url> [--out film.mp4] [--lang en] [--fps 30] [--crf 18] [--verify-only]'); process.exit(2); }
const verifyOnly = args.includes('--verify-only');
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

// The written file must open and be as long as the film: a render cut short (caller exited, disk full) leaves
// an MP4 without its index or with missing seconds. Throws, so the process exits 1; on success returns the
// report line to print once the file is in place (the `verified:` line is always the last line of the output).
function verify(file, DUR){
  if (!fs.existsSync(file)) throw new Error(`output check failed: ${file} does not exist`);
  const r = spawnSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
  if (r.error) return () => console.log('ffprobe not found — output check skipped (it comes with ffmpeg); the MP4 is unchecked');
  if (!Number.isFinite(parseFloat(r.stdout))) throw new Error(`output check failed: ${file} is not a playable MP4 — ${(r.stderr || '').trim().split('\n').pop()}`);
  // the header can claim the full length (+faststart writes the index first) while the frame data stops early,
  // so measure the last video packet actually in the file
  const pk = spawnSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'packet=pts_time,duration_time', '-of', 'csv=p=0', file], { encoding: 'utf8', maxBuffer: 64 << 20 });
  if (/partial file/i.test(pk.stderr || '')) throw new Error(`output check failed: ${file} is truncated (frame data ends early)`);
  if (pk.error || pk.status) throw new Error(`output check failed: could not read the packets of ${file} — ${pk.error ? pk.error.message : (pk.stderr || '').trim().split('\n').pop()}`);
  const d = pk.stdout.split('\n').reduce((m, l) => { const [p, du] = l.split(',').map(parseFloat); return Number.isFinite(p) ? Math.max(m, p + (du || 0)) : m; }, 0);   // end of the last frame
  if (Math.abs(d - DUR) > .5) throw new Error(`output check failed: ${file} holds ${d.toFixed(2)} s of video, the film is ${DUR.toFixed(2)} s`);
  return () => console.log(`verified: ${out}  ${d.toFixed(2)} s playable (film ${DUR.toFixed(2)} s)`);
}

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'motion-rec-'));
  let part = '';   // set once rendering starts; still present in finally only if the render or its check failed
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--autoplay-policy=no-user-gesture-required'] });
  try {
    const page = await browser.newPage();
    page.on('pageerror', e => console.error('page error:', e.message));
    await page.setViewport({ width: 1920, height: 1080 });

    if (verifyOnly){
      // a newer .part means the last render was interrupted: the file at --out is an older build
      const part = out.replace(/(\.mp4)?$/i, '.part.mp4');
      if (fs.existsSync(part) && (!fs.existsSync(out) || fs.statSync(part).mtimeMs > fs.statSync(out).mtimeMs))
        throw new Error(`output check failed: ${part} is newer than ${out} — the last render was interrupted; render again`);
      await page.goto(url('t=0'), { waitUntil: 'load' });
      await page.waitForFunction(() => window.__motion, { timeout: 30000 });
      verify(out, await page.evaluate(() => window.__motion.DUR))();
      return;
    }

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
    // write next to the target and move it into place only once verified, so an interrupted run never leaves
    // (or overwrites a good file with) a broken MP4 at the final path
    part = out.replace(/(\.mp4)?$/i, '.part.mp4');
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'png', '-i', '-', '-i', wav,
      '-c:v', 'libx264', '-preset', 'slow', '-crf', crf, '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '192k',
      '-shortest', '-movflags', '+faststart', part], { stdio: ['pipe', 'inherit', 'pipe'] });
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
    const report = verify(part, DUR);
    fs.renameSync(part, out);
    console.log(`${out}  ${DUR.toFixed(1)}s  ${fps}fps  ${(fs.statSync(out).size / 1e6).toFixed(1)} MB`);
    report();
  } finally {
    await browser.close();
    fs.rmSync(tmp, { recursive: true, force: true });
    if (part) fs.rmSync(part, { force: true });
  }
})().catch(e => { console.error(e.message || e); process.exit(1); });
