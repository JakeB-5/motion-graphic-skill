#!/usr/bin/env node
// Verify a motion-graphic HTML built on assets/engine.html.
//
//   node check.js <file.html | url> [--out DIR] [--lang ko,en] [--no-layout] [--no-audio]
//
// Needs puppeteer-core and Chrome/Chromium. Install puppeteer-core once next to this script:
//   npm i --prefix "<this scripts dir>" puppeteer-core@23
// (or install it anywhere and point NODE_PATH at that node_modules).
// Chrome is looked up in the usual macOS / Linux / Windows locations; set CHROME=/path/to/chrome to override.
//
// Produces in DIR:
//   sheet-<lang>.png     contact sheet: 2 stills per scene + last frame, labelled — read this first
//   still-<lang>-*.png   full-size stills (1920x1080) for close inspection
//   view-<lang>-*.png    page screenshots on phone / tablet / desktop viewports
//   report.json          everything below, machine-readable
// Checks (non-zero exit when any fails):
//   - page errors / console errors
//   - text drawn partly outside the 1920x1080 canvas (clipped copy)
//   - audio: offline render peak and per-scene RMS (silent scene < 0.02, clipping peak >= 0.99)
//   - layout: DOM elements overflowing the viewport on 7 device sizes, film size per device, labels cut by an ellipsis
// Warnings (printed, not failures — judge them on the sheet): non-mono canvas text under 26px, Hangul set in the mono font
//   - touch: tap on the start button starts playback, tap on the progress bar seeks
const fs = require('fs');
const path = require('path');
let puppeteer;
try { puppeteer = require('puppeteer-core'); } catch (e){
  console.error(`puppeteer-core not found. Install it once next to this script:\n  npm i --prefix "${__dirname}" puppeteer-core@23\nor install it elsewhere and set NODE_PATH to that node_modules.`);
  process.exit(2);
}
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const target0 = args.find(a => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--out' && args[args.indexOf(a) - 1] !== '--lang');
if (!target0){ console.error('usage: node check.js <file.html|url> [--out DIR] [--lang ko,en] [--no-layout] [--no-audio]'); process.exit(2); }
const target = /^(https?|file):/.test(target0) ? target0 : 'file://' + path.resolve(target0);
const out = path.resolve(opt('--out', path.join(process.cwd(), 'motion-check')));
fs.mkdirSync(out, { recursive: true });
const CHROME = process.env.CHROME || [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/snap/bin/chromium',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
].find(p => fs.existsSync(p));
if (!CHROME){ console.error('Chrome/Chromium not found. Set CHROME=/path/to/chrome.'); process.exit(2); }
const url = q => target + (target.includes('?') ? '&' : '?') + q;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const PHONE_UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0 Mobile Safari/537.36';
const VIEWS = [['phone-portrait-390', 390, 844, true], ['phone-landscape-844', 844, 390, true], ['phone-portrait-360', 360, 740, true],
  ['phone-landscape-740', 740, 360, true], ['tablet-portrait-820', 820, 1180, true], ['tablet-landscape-1180', 1180, 820, true], ['desktop-1440', 1440, 900, false]];

// Records fillText calls on the film canvas: boxes leaving the canvas (after the current transform),
// small non-mono text (unreadable on a phone, where the film shrinks to ~1/5), and Hangul set in the mono font
// (JetBrains Mono has no Hangul, so the fallback spaces it out).
const PROBE = () => {
  window.__clip = []; window.__small = []; window.__monoKo = []; window.__probe = false;
  const orig = CanvasRenderingContext2D.prototype.fillText;
  CanvasRenderingContext2D.prototype.fillText = function (s, x, y, ...rest){
    if (window.__probe && this.canvas && this.canvas.id === 'cv' && String(s).trim() && this.globalAlpha > .05){
      const w = this.measureText(s).width, al = this.textAlign, x0 = al === 'center' ? x - w / 2 : (al === 'right' || al === 'end') ? x - w : x;
      const m = this.getTransform(), p = (px, py) => [m.a * px + m.c * py + m.e, m.b * px + m.d * py + m.f];
      const a = p(x0, y), b = p(x0 + w, y), W = this.canvas.width, H = this.canvas.height;
      const lo = Math.min(a[0], b[0]), hi = Math.max(a[0], b[0]), rec = { t: window.__probeT, text: String(s).slice(0, 60) };
      if (lo < -2 || hi > W + 2 || a[1] < 0 || a[1] > H + 4) window.__clip.push({ ...rec, x0: Math.round(lo), x1: Math.round(hi), y: Math.round(a[1]) });
      const px = parseFloat((/(\d+(?:\.\d+)?)px/.exec(this.font) || [0, 0])[1]) * Math.hypot(m.a, m.b), fam = this.font.split('px').slice(1).join('px').trim();
      const mono = /^"?JetBrains Mono|^"?[^",]*Mono|monospace/.test(fam);
      const frameBand = a[1] < 110 || a[1] > 985;   // HUD / page-counter zone: decorative labels may be small
      if (!mono && px < 26 && !frameBand) window.__small.push({ ...rec, px: Math.round(px) });
      if (mono && /[぀-ヿ㐀-鿿가-힣]/.test(s)) window.__monoKo.push(rec);   // kana, CJK ideographs, Hangul
    }
    return orig.call(this, s, x, y, ...rest);
  };
};
const dedupe = list => { const seen = new Set(), out = []; for (const c of list){ const k = c.text; if (!seen.has(k)){ seen.add(k); out.push(c); } } return out; };

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'] });
  const report = { target, out, langs: {}, failures: [] };
  const fail = m => { report.failures.push(m); console.log('  FAIL ' + m); };
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  // console.error(errorObject) only stringifies as "JSHandle@error", so pull the stack out of the handle
  page.on('console', async m => { if (m.type() !== 'error') return;
    const a = m.args()[0]; let s = m.text();
    try { if (a) s = await a.evaluate(e => (e && e.stack) ? e.stack.split('\n').slice(0, 2).join(' | ') : String(e)); } catch (_){}
    errs.push(s); });
  await page.evaluateOnNewDocument(PROBE);
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
  await page.goto(url('t=0'), { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.body.dataset.ready === '1', { timeout: 15000 }).catch(() => fail('page never set data-ready (fontsReady/boot failed?)'));
  const meta = await page.evaluate(() => window.__motion && { DUR: __motion.DUR, LANGS: __motion.LANGS, groove: __motion.groove || 'electro', SC: __motion.SC.map(s => ({ id: s.id, code: s.code, t0: s.t0, d: s.d })) });
  if (!meta){ fail('window.__motion missing — is this built on engine.html?'); await browser.close(); fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2)); process.exit(1); }
  const langs = (opt('--lang') || meta.LANGS.join(',')).split(',').filter(Boolean);
  console.log(`motion: ${meta.SC.length} scenes · ${meta.DUR.toFixed(1)}s · langs ${meta.LANGS.join('/')}`);
  meta.SC.forEach((s, i) => console.log(`  ${String(i + 1).padStart(2, '0')} ${s.id.padEnd(14)} ${s.t0.toFixed(2).padStart(6)}s +${s.d.toFixed(2)}s  ${s.code}`));

  for (const lang of langs){
    const R = report.langs[lang] = {};
    console.log(`\n[${lang}] stills`);
    await page.goto(url(`t=0&lang=${lang}`), { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => document.body.dataset.ready === '1', { timeout: 15000 }).catch(() => {});
    const times = [];
    meta.SC.forEach((s, i) => { times.push([i, s.code, s.t0 + s.d * .35]); times.push([i, s.code, s.t0 + s.d * .85]); });
    times.push([meta.SC.length - 1, 'END', meta.DUR - .05]);
    const shots = await page.evaluate(async times => {
      const cv = document.getElementById('cv'), urls = [];
      const cols = 4, tw = 480, th = 270, pad = 28, rows = Math.ceil(times.length / cols);
      const sh = document.createElement('canvas'); sh.width = cols * tw; sh.height = rows * (th + pad); const g = sh.getContext('2d');
      g.fillStyle = '#000'; g.fillRect(0, 0, sh.width, sh.height);
      times.forEach(([i, code, t], k) => {
        window.__probe = true; window.__probeT = +t.toFixed(2); __motion.render(t); window.__probe = false;
        urls.push(cv.toDataURL('image/png'));
        const x = (k % cols) * tw, y = Math.floor(k / cols) * (th + pad);
        g.drawImage(cv, x, y + pad, tw, th); g.fillStyle = '#FFB224'; g.font = '700 16px monospace'; g.fillText(`${String(i + 1).padStart(2, '0')} ${code} · t=${t.toFixed(2)}`, x + 8, y + 19);
      });
      return { urls, sheet: sh.toDataURL('image/png'), clip: window.__clip.splice(0), small: window.__small.splice(0), monoKo: window.__monoKo.splice(0) };
    }, times);
    const save = (f, d) => fs.writeFileSync(path.join(out, f), Buffer.from(d.split(',')[1], 'base64'));
    save(`sheet-${lang}.png`, shots.sheet);
    shots.urls.forEach((d, k) => save(`still-${lang}-${String(k).padStart(2, '0')}-${times[k][1].replace(/[^\w-]+/g, '_')}-${times[k][2].toFixed(2)}.png`, d));
    console.log(`  sheet-${lang}.png + ${shots.urls.length} stills`);
    const clips = dedupe(shots.clip);
    R.clippedText = clips;
    if (clips.length) clips.slice(0, 12).forEach(c => fail(`[${lang}] text outside canvas at t=${c.t}: "${c.text}" x ${c.x0}..${c.x1} y ${c.y}`));
    else console.log('  no text outside the canvas');
    // warnings only: judge them against the sheet (decorative labels may be small on purpose)
    R.smallText = dedupe(shots.small); R.hangulInMono = dedupe(shots.monoKo);
    if (R.smallText.length) console.log(`  WARN ${R.smallText.length} non-mono text line(s) under 26px (hard to read on phones): ` + R.smallText.slice(0, 6).map(c => `"${c.text.slice(0, 24)}" ${c.px}px`).join(', '));
    if (R.hangulInMono.length) console.log(`  WARN Hangul drawn in the mono font (spaced-out fallback): ` + R.hangulInMono.slice(0, 6).map(c => `"${c.text.slice(0, 24)}"`).join(', '));

    if (!args.includes('--no-audio')){
      await page.goto(url(`t=0&lang=${lang}&audiotest`), { waitUntil: 'networkidle0' });
      const a = await page.waitForFunction(() => document.body.dataset.audio, { timeout: 60000 }).then(h => h.jsonValue()).catch(() => null);
      R.audio = a;
      if (!a || a.startsWith('ERR')) fail(`[${lang}] audio render: ${a}`);
      else {
        const pk = parseFloat(/peak=([\d.]+)/.exec(a)[1]), rms = /rms\/scene=([\d.,]+)/.exec(a)[1].split(',').map(Number);
        console.log(`  audio peak ${pk} · rms/scene ${rms.join(' ')}`);
        if (pk >= .99) fail(`[${lang}] audio clips (peak ${pk})`);
        const quiet = ['pulse', 'none'].includes(meta.groove) ? .006 : .02;   // calm grooves are meant to be quieter
        rms.forEach((v, i) => { if (v < quiet) fail(`[${lang}] scene ${i + 1} (${meta.SC[i].id}) nearly silent (rms ${v}, groove ${meta.groove})`); });
      }
    }

    if (!args.includes('--no-layout')){
      console.log(`  layout (the poster frame with its play button is in view-${lang}-phone-portrait-390.png and view-${lang}-desktop-1440.png — check the button covers nothing important)`);
      R.layout = {};
      for (const [name, w, h, touch] of VIEWS){
        await page.emulate({ viewport: { width: w, height: h, deviceScaleFactor: 2, isMobile: touch, hasTouch: touch, isLandscape: w > h }, userAgent: touch ? PHONE_UA : await browser.userAgent() });
        await page.goto(url(`lang=${lang}`), { waitUntil: 'networkidle0' });
        await page.waitForFunction(() => document.body.dataset.ready === '1', { timeout: 15000 }).catch(() => {});
        await sleep(300);
        const info = await page.evaluate(() => {
          const vw = document.documentElement.clientWidth, vh = document.documentElement.clientHeight;
          const box = s => { const e = document.querySelector(s); if (!e || e.hidden) return null; const b = e.getBoundingClientRect(); return b.width ? [Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height)] : null; };
          const over = [...document.querySelectorAll('body *')].filter(e => { const b = e.getBoundingClientRect(); return b.width && (b.right > vw + 1 || b.left < -1 || b.bottom > vh + 1); }).map(e => (e.id || e.className || e.tagName) + '');
          // visible text cut by an ellipsis or overflow:hidden (does not show up as overflow above)
          const cut = [...document.querySelectorAll('.dock *, .start *')].filter(e => { const cs = getComputedStyle(e); return e.offsetParent && e.textContent.trim() && e.children.length === 0 && (cs.textOverflow === 'ellipsis' || cs.overflow === 'hidden') && e.scrollWidth > e.clientWidth + 1; }).map(e => `${e.id || e.className}: "${e.textContent.trim().slice(0, 30)}"`);
          return { vw, vh, film: box('.screen'), start: box('#start'), dock: box('#dock'), over, cut };
        });
        R.layout[name] = info;
        await page.screenshot({ path: path.join(out, `view-${lang}-${name}.png`) });
        const film = info.film ? `${info.film[2]}×${info.film[3]}` : 'none';
        console.log(`    ${name.padEnd(22)} film ${film.padEnd(10)} ${info.over.length ? 'OVERFLOW ' + info.over.slice(0, 4).join(',') : 'ok'}`);
        if (info.over.length) fail(`[${lang}] ${name}: elements overflow viewport: ${info.over.slice(0, 4).join(', ')}`);
        if (info.cut.length) fail(`[${lang}] ${name}: label truncated: ${info.cut.slice(0, 3).join(', ')}`);
        if (touch && name.startsWith('phone') && info.start){
          const s0 = info.start; await page.touchscreen.tap(s0[0] + s0[2] / 2, s0[1] + s0[3] / 2); await sleep(1200);
          const v1 = await page.$eval('#scrub', e => +e.getAttribute('aria-valuenow'));
          const sb = await page.$eval('#scrub', e => { const r = e.getBoundingClientRect(); return [r.x + r.width * .5, r.y + r.height / 2, r.height]; });
          await page.touchscreen.tap(sb[0], sb[1]); await sleep(400);
          const v2 = await page.$eval('#scrub', e => +e.getAttribute('aria-valuenow'));
          const ok = v1 > 0 && Math.abs(v2 - meta.DUR / 2) < 2;
          R.layout[name].touch = { afterStartTap: v1, afterBarTap: v2, barHitHeight: Math.round(sb[2]) };
          if (!ok) fail(`[${lang}] ${name}: touch flow (start tap → ${v1}s, bar tap → ${v2}s, expected ≈${(meta.DUR / 2).toFixed(1)}s)`);
        }
      }
    }
  }
  report.errors = [...new Set(errs)];
  report.errors.forEach(e => fail('page error: ' + e));
  fs.writeFileSync(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`\n${report.failures.length ? report.failures.length + ' FAILURE(S)' : 'ALL CHECKS PASSED'} · report ${path.join(out, 'report.json')}`);
  await browser.close();
  process.exit(report.failures.length ? 1 : 0);
})();
