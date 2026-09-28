# Style — decided fresh for every topic

The engine's default frame (dark console, HUD, scanlines, electro beat) is **one option among many**. For each piece, look at the topic, audience and brand, decide the axes below one by one, and write the result into `style.js` and `config.js`. Don't ask the user to pick a style — infer it from the material and audience, and state the decision and the reason in one line at the top of the storyboard.

## 1. Axes

| Axis | Options (examples) | Decide from |
|---|---|---|
| Brightness | dark / light / mid (cream, grey) | brand tone, where it will play (a dark auditorium favours dark — no glare), continuity with print and web material |
| Texture | dot grid + scanlines / paper fibre + grain / flat / blueprint lines | the material nature of the topic (machine, paper, screen, nature) |
| Frame | technical HUD / page counter only / none / magazine masthead | HUD if the metaphor is "an instrument screen"; minimal if story or brand leads |
| Typeface | condensed display (Big Shoulders) / serif (Noto Serif, Playfair) / rounded (Nunito, Gowun Dodum, Jua) / heavy grotesk (Inter Black, Archivo Black, Black Han Sans) | voice: technical and solid / trustworthy and formal / friendly / declarative |
| Entrance | `slam` (overshoot + RGB split) / `slam` with split off / `rise` (fade + lift) / typing | energy. Finance, health, public sector → `rise`; games, hackathons → `slam` |
| Easing | `eBack` (overshoot) / `eO` (decelerate) / `eIO` (smooth) | overshoot = playful/energetic, decelerate = neat, smooth = premium/calm |
| Transition | tile dissolve + light sweep / panel slide / colour-block wipe / crossfade / ink wash | a move that belongs to the same world as the frame |
| Music (`music.groove`) | `electro` (~140 BPM) / `soft` (96–118) / `pulse` (72–96, no drums) / `none` | energy. Talk openers and teasers: electro/soft. Brand, memorial, editorial: pulse |
| Colour | 1 background + 2 inks + 3 accents | brand colour into `acc`. On light backgrounds `ink` is dark and `dim` a mid grey |

## 2. Topic → starting point (mix and bend — don't copy verbatim)

| Topic / audience | Starting point |
|---|---|
| Semiconductors, dev tools, security, hackathons | dark · dot grid + scanlines · technical HUD · condensed display · slam · electro 140 |
| Finance, consulting, B2B SaaS, investor relations | light (white / pale grey) · flat or faint grid · page counter only · heavy grotesk · rise · panel slide · soft 104 |
| Brand story, culture, publishing, education talks | cream paper · grain · masthead · serif · slow rise · crossfade / ink wash · pulse 84 |
| Consumer goods, events, social teasers | flat saturated colour, changing per scene · no frame · huge heavy grotesk · slam (split off) · colour-block wipe · electro 128 |
| Children, community, non-profit | bright pastel · floating rounded shapes · rounded type · eBack bounce · soft 112 |
| Games | dark or saturated · pixel / boot HUD · slam · glitch cuts · electro 150 |

Keep contrast readable on light backgrounds: a large lightness gap between `ink` and `bg` (on white, `ink` around `#15181C`).

## 3. style.js building blocks

`style.js` must define all four functions (`drawBg`, `overlay`, `hud`, `transition`). Start from the blocks below and combine or bend them. Build anything heavy (texture canvases) once, at the top of the block.

### A. Console (default) — as shipped in the engine
Drifting dot grid + vignette and scanlines + corner brackets and timecode HUD + tile dissolve / light sweep.

### B. Clean — light, generous space, page counter
```js
// clean: light paper-white, faint baseline grid, page counter only, panel slide transitions
function drawBg(t){
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = rgba(C.ink, .045); for (let y = 120; y < H - 100; y += 60) ctx.fillRect(110, y, W - 220, 1);
}
function overlay(t){}
function hud(t, sc){
  T(CFG.hudTitle, 110, 70, { f: FK, w: 700, z: 20, c: C.dim });
  T(`${String(sc.i + 1).padStart(2, '0')} / ${String(SC.length).padStart(2, '0')}`, W - 110, 70, { f: FK, w: 700, z: 20, c: C.dim, al: 'right' });
  ctx.fillStyle = C.acc; ctx.fillRect(110, 88, 48, 4);
}
function transition(sc, lt){   // a panel in the accent colour slides across and uncovers the new scene
  const p = eIO(inv(0, .45, lt)); if (p >= 1) return;
  ctx.fillStyle = C.acc; ctx.fillRect(lerp(0, W, p), 0, W, H);
  ctx.fillStyle = C.bg; ctx.fillRect(lerp(-W * .15, W, p) + W * .12, 0, W, H);
}
```
config: `colors: { bg: '#F6F7F9', panel: '#FFFFFF', line: '#DDE1E6', ink: '#15181C', dim: '#6B7480', grid: '#E6E9ED', acc: '#2F6BFF', accHi: '#7FA2FF', alt: '#12B886', bad: '#E5484D' }`, `textSplit: false`, `music.groove: 'soft'`, `bpm: 104`. In scenes use `rise` instead of `slam`; heavy grotesk headlines.

### C. Editorial — cream paper, grain, serif
```js
// editorial: cream paper with fibre grain, thin masthead rules, ink-wash crossfade
const grain = (() => { const c = document.createElement('canvas'); c.width = 512; c.height = 512; const g = c.getContext('2d'), R = rng(7), im = g.createImageData(512, 512);
  for (let i = 0; i < im.data.length; i += 4){ const v = R() * 255; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 14; } g.putImageData(im, 0, 0); return ctx.createPattern(c, 'repeat'); })();
function drawBg(t){ ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H); }
function overlay(t){ ctx.fillStyle = grain; ctx.fillRect(0, 0, W, H); }
function hud(t, sc){
  ctx.fillStyle = C.ink; ctx.fillRect(110, 64, W - 220, 2); ctx.fillRect(110, 70, W - 220, 1);
  T(CFG.hudTitle, 110, 52, { f: FD, w: 700, z: 22, c: C.ink });
  T(`No. ${sc.i + 1}`, W - 110, 52, { f: FD, w: 700, z: 22, c: C.dim, al: 'right' });
}
function transition(sc, lt){   // the previous page fades out through a soft ink band
  const p = eIO(inv(0, .6, lt)); if (p >= 1) return;
  ctx.fillStyle = rgba(C.bg, 1 - p); ctx.fillRect(0, 0, W, H);
  const y = lerp(H, -200, p); const g = ctx.createLinearGradient(0, y, 0, y + 200); g.addColorStop(0, rgba(C.ink, 0)); g.addColorStop(.5, rgba(C.ink, .08)); g.addColorStop(1, rgba(C.ink, 0));
  ctx.fillStyle = g; ctx.fillRect(0, y, W, 200);
}
```
config: `fonts.display: '"Noto Serif KR","Noto Serif",serif'` (and add `Noto+Serif:wght@700;900` or `Noto+Serif+KR:wght@700;900` to the font link in `head.html`), `colors: { bg: '#F3EEE4', ink: '#1E1B16', dim: '#7A7266', acc: '#B4442C', alt: '#2E5E4E', … }`, `textSplit: false`, `groove: 'pulse'`, `bpm: 84`. Slow entrances, e.g. `rise(…, .8, 20)`.

### D. Pop — flat saturated colour that changes every scene
```js
// pop: flat saturated background per scene, no frame, colour-block wipes
const POP = [C.acc, C.alt, '#111111', C.bad, C.accHi];
const popBg = i => POP[i % POP.length];
function drawBg(t){ const sc = sceneAt(t); ctx.fillStyle = popBg(sc.i); ctx.fillRect(0, 0, W, H); }
function overlay(t){}
function hud(t, sc){}
function transition(sc, lt){   // three diagonal bands sweep in the next colour
  const p = eIO(inv(0, .35, lt)); if (p >= 1) return;
  for (let k = 0; k < 3; k++){ const q = clamp(p * 1.3 - k * .15); ctx.fillStyle = popBg(sc.i - 1 + (k === 2 ? 1 : 0));
    ctx.save(); ctx.translate(W / 2, H / 2); ctx.rotate(-.35); ctx.fillRect(-W * 1.2 + q * W * 2.4, -H, W * 1.2, H * 2); ctx.restore(); }
}
```
Pick text colour per scene for contrast against `popBg(sc.i)` (ink or white). `textSplit: false`, huge heavy grotesk, `groove: 'electro'`, `bpm: 128`.

### E. Playful — pastel, floating rounded shapes
```js
// playful: pastel base with slow floating blobs, scene dots, a bursting-circle transition
const BLOBS = Array.from({ length: 9 }, (_, i) => ({ x: hash(i) * W, y: hash(i + 9) * H, r: 60 + hash(i + 3) * 140, c: [C.acc, C.alt, C.accHi][i % 3], s: .3 + hash(i + 5) }));
function drawBg(t){
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
  for (const b of BLOBS) dot(b.x + Math.sin(t * b.s) * 40, b.y + Math.cos(t * b.s * .8) * 30, b.r, rgba(b.c, .14));
}
function overlay(t){}
function hud(t, sc){ for (let i = 0; i < SC.length; i++) dot(W / 2 - (SC.length - 1) * 14 + i * 28, 60, i === sc.i ? 8 : 5, i === sc.i ? C.acc : rgba(C.ink, .2)); }
function transition(sc, lt){   // a circle bursts from the centre and shrinks away
  const p = inv(0, .45, lt); if (p >= 1) return;
  const r = Math.sin(p * Math.PI) * Math.hypot(W, H) * .6; dot(W / 2, H / 2, r, C.acc, 1 - p * .3);
}
```
Rounded type (Nunito, Jua, Gowun Dodum), `eBack` bounces, `groove: 'soft'`, `bpm: 112`.

## 4. When the style changes, change these too

- **The scenes' voice.** Console-style `kicker`s (typed mono capitals) and frequent `slam`s feel wrong in clean or editorial pieces. Make kickers small sans subheads (`FK` 700, `dim`) and headlines `rise`.
- **Sound effects.** `glitch`, `error` and `laser` are sounds of a technical world. Calm styles lean on `blip`, `bell`, soft `whoosh` and `correct`, with `impact` once for the finale.
- **The closing object.** Instead of a chip package, draw an object from the topic (book cover, business card, ticket, app icon, seal) and match `CFG.endCta` to it.
- **Glow on light backgrounds.** `glow()` uses `'lighter'` compositing and nearly disappears on light backgrounds. Emphasise with colour blocks, underlines and circles instead.
- **The engine side follows automatically.** Page margin, play button and tooltip follow `C.bg` (a light `bg` gives a light page). The progress bar is drawn with `C.ink` / `C.acc`.
