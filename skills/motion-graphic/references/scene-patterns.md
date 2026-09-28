# Scene patterns

Proven animation patterns built on the engine helpers (`T`, `mw`, `slam`, `rise`, `kicker`, `typeOn`, `polyPartial`, `dot`, `glow`, `rgba`, `inv`, `lerp`, `eO`, `eIO`, `eBack`, `spring`, `track`, `swapAlpha`, `hash`, `beatPulse`). All of them shipped in a real 54-second, 12-scene piece. Paste the code and change coordinates, copy and colours.

Basic grammar: `inv(a, b, lt)` goes 0 → 1 as `lt` moves from a to b. Shape it with `eO` (decelerate), `eIO` (ease in-out) or `eBack` (slight overshoot). Entrances usually take 0.15–0.3 s. For anything that moves or grows — position, width, scale, a bar's length — prefer a spring (§1): fixed curves read as sliding, springs read as mass.

These patterns lean technical because that is where they were born. For calm styles, keep the structure and swap the voice: `rise` for `slam`, sans subheads for mono kickers, softer sounds (see `styles.md` §4).

## Contents
1. Motion — springs and presets · `track` for values that retarget · stretching tab indicator · text swaps inside a morphing container
2. Text — headline slam · kicker · list · strike-through · laser engraving · dot-matrix word · glitch
3. Numbers — counter · bar comparison · cell fill · ring gauge · value morph
4. Lines and structure — circuit traces · scan beam · radar sweep · timeline · converging lines
5. Objects — circular grid (wafer) · isometric stack · chip package · mock UI + numbered badges · terminal panel · bit cells decaying / being written · falling-digit rain
6. Emphasis and cuts — flash · zoom creep · beat pulse · blink · shake · badge pop
7. Sound pairings
8. Performance

---

## 1. Motion — springs

`spring(t, k, d)` is a closed-form damped spring from 0 to 1, `t` in seconds since the move began. It stays a pure function of time (no simulation), so scrubbing and `?t=` stills are exact. There is no end time to pick: it accelerates, settles on its own, and the underdamped presets overshoot a hair. Spread a preset from `SPRING` into it:

| Preset | `[k, d]` | Overshoot · settles | Use for |
|---|---|---|---|
| `SPRING.snappy` | `[320, 28]` | ~2 % · 0.35 s | buttons, toggles, chips, list lines, leading edges |
| `SPRING.default` | `[170, 26]` | none · 0.5 s | cards, panels, bars, camera moves (`spring(t)` with no k, d) |
| `SPRING.heavy` | `[90, 19]` | none · 0.7 s | big type, logos, large objects — type never bounces |
| `SPRING.playful` | `[220, 16]` | ~13 % · 0.6 s | stickers, mascots, badges in playful styles |

Tiny overshoot on UI, none on type. `eBack` stays for `slam`'s punch; `spring` is for things that travel.

**Single move** — replace `eO(inv(t0, t0 + dur, lt))` with a spring started at `t0`:
```js
const p = spring(lt - t0, ...SPRING.default);                         // 0 → 1, starts at t0
ctx.fillRect(vx, y, vw * v / max * p, 56);                            // a bar that grows with weight (S.number in the engine)
T(s, 146 + (1 - spring(lt - t0, ...SPRING.snappy)) * 30, y, o);        // a list line sliding in from 30 px left (S.list)
const sc = lerp(.86, 1, spring(lt - .1, ...SPRING.heavy));            // a logo settling into place: scale from the centre, no bounce
```

**One value, several targets — `track`**. When a value changes target more than once (a cursor, a highlight, a container's width), don't restart a spring per segment — that snaps when a new move begins before the old one settled. `track(t, keys, k, d)` adds one spring per change, each from its own start time, so the motion stays continuous and any `t` is still computed directly. `keys = [[time, value], ...]`, sorted by time, at least one; before the second key the value is the first one.
```js
// a highlight that follows the newest list line (S.list in the engine); it fades in with the first line
const LT = TXT.lL.map((_, i) => (3 + i * 1.5) * B);
const hy = track(lt, LT.map((t0, i) => [t0, 560 + i * 90]), ...SPRING.snappy);
ctx.fillStyle = rgba(C.alt, .12 * inv(LT[0], LT[0] + .15, lt)); ctx.fillRect(96, hy - 52, 880, 74);
// a cursor gliding between three targets; x and y are separate tracks with the same times
const K = [[0, 300, 700], [1.2, 900, 420], [2.6, 1380, 610]];
const cx = track(lt, K.map(([t, x]) => [t, x])), cy = track(lt, K.map(([t, , y]) => [t, y]));
```

**Stretching tab indicator** — the same stops tracked twice: a stiff leading edge and a softer trailing edge. The bar stretches while it travels and snaps back to its width when it lands.
```js
const stops = [[.3, 200], [1.4, 620], [2.5, 1040]];                  // [time, left x of the active tab]
const lead = track(lt, stops, ...SPRING.snappy), trail = track(lt, stops, 140, 22);
const left = Math.min(lead, trail), right = Math.max(lead, trail) + 360;   // 360 = tab width
ctx.fillStyle = C.acc; ctx.fillRect(left, 520, right - left, 8);    // cue: stops.map(([t]) => [t, 'blip', 880])
```

**Morphing container with text swaps** — one box whose width and height are tracks (button → card → panel); the text of each state fades out just before the next morph starts and the new text fades in once the box has nearly settled, via `swapAlpha(t, tIn, tOut)` (in 0.08–0.2 s after `tIn`, out over the 0.1 s before `tOut`). Pass `tIn` plus the spring's settle lead — about 0.25 s for `SPRING.default` — so text never overlaps text and never rides a box that is still growing or shrinking.
```js
const M = [[.2, 'btn', 260, 84], [1.6, 'card', 620, 360], [3.4, 'panel', 1100, 560]];   // [start, state, w, h]
const bw = track(lt, M.map(([t, , w]) => [t, w])), bh = track(lt, M.map(([t, , , h]) => [t, h]));
const bx = 960 - bw / 2, by = 540 - bh / 2;
ctx.fillStyle = C.panel; ctx.fillRect(bx, by, bw, bh); ctx.strokeStyle = C.acc; ctx.lineWidth = 3; ctx.strokeRect(bx, by, bw, bh);
M.forEach(([tIn, state], i) => { const tOut = i + 1 < M.length ? M[i + 1][0] : Infinity, a = swapAlpha(lt, tIn + .25, tOut); if (a <= 0) return;
  T(TXT.morph[state], 960, 540 + 14, { z: 40, al: 'center', a, fit: bw - 60 }); });   // cues: M.map(([t]) => [t, 'whoosh', .2, .1])
```
Keep states at least ~1 s apart so each text is readable between its fade-in (~0.45 s after `tIn`) and the next morph, and give text a `fit` of the box's current width.

## 2. Text

**Headline slam** — overshoots in with an RGB split for the first frames. Only for a scene's key sentence (overused, everything shouts). `CFG.textSplit = false` or `{ split: false }` keeps the overshoot without the split.
```js
slam(TXT.title, 110, 300, lt, .1, { z: 96, fit: 900 });          // cue: [.1, 'slam', .7]
slam(TXT.brand, 960, 552, lt, 1.7, { f: FD, z: 88, al: 'center' });
```

**Rise** — the calm counterpart: fades in while lifting.
```js
rise(TXT.title, 110, 300, lt, .1, { z: 96, fit: 900 });           // rise(s, x, y, lt, t0, o, dur = .5, dy = 28)
```

**Kicker** (small Latin capitals, typed on) — top of a scene; this is where metaphor vocabulary lives.
```js
kicker('PROBLEM 01 · MEMORY LOSS', 110, 190, lt, .05);            // other colour: kicker(s, x, y, lt, t0, C.alt)
```

**List, one line per beat** — springs in 30 px from the left with a square marker (add the `track` highlight from §1 to point at the newest line).
```js
TXT.items.forEach((s, i) => { const t0 = (3 + i * 1.5) * B, a = inv(t0, t0 + .15, lt); if (a <= 0) return;
  ctx.fillStyle = C.alt; ctx.globalAlpha = a; ctx.fillRect(110, 560 + i * 90 - 22, 16, 16); ctx.globalAlpha = 1;
  T(s, 146 + (1 - spring(lt - t0, ...SPRING.snappy)) * 30, 560 + i * 90, { f: FK, w: 700, z: 40, a, fit: 820 }); });
// cues: TXT.items.map((_, i) => [(3 + i * 1.5) * B, 'blip', 660 + i * 150])   ← pitch rises line by line
```

**Strike-through reversal** ("it wasn't *speed*") — measure the word's position with `mw` and draw a red bar across it. If `fit` shrank the line, multiply by the same ratio `k` or the bar misses the word. See `S.statement` in the engine. Cues: `[8 * B, 'hit']` + `'glitch'`.

**Laser engraving** — each line is revealed left → right behind a glowing cutter. For closing signatures and product names. Lines wider than the object shrink to fit.
```js
L.forEach(([str, f, w, z0, y, col], j) => { const t0 = .3 + j * .42, p = inv(t0, t0 + .42, lt); if (p <= 0) return;
  const tw = mw(str, f, w, z0), cut = -tw / 2 + tw * p;
  ctx.save(); ctx.beginPath(); ctx.rect(-s / 2, y - z0, cut + s / 2, z0 * 1.4); ctx.clip(); T(str, 0, y, { f, w, z: z0, c: col, al: 'center' }); ctx.restore();
  if (p < 1){ glow(cut, y - z0 * .35, 46, rgba(C.accHi, 1)); dot(cut, y - z0 * .35, 5, '#fff'); } });
// cues: [0,1,2,3].map(j => [.3 + j * .42, 'laser', .42])
```

**Dot-matrix word → crisp word** (thesis scene) — draw a huge word offscreen, sample it on a 12-px grid, light the dots at random, then resolve into the real type. It measures text, so build it **in `ready.js`** (after fonts load).
```js
let DOTS = {};
function buildDots(){   // call from ready.js
  const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  const parts = [[TXT.a, C.alt], [TXT.mid, C.ink], [TXT.b, C.acc]]; let z = 290; g.font = `900 ${z}px ${FK}`;
  const w0 = parts.reduce((s, p) => s + g.measureText(p[0]).width, 0); if (w0 > 1720){ z = Math.floor(z * 1720 / w0); g.font = `900 ${z}px ${FK}`; }
  const tw = parts.reduce((s, p) => s + g.measureText(p[0]).width, 0); let x = (W - tw) / 2; const base = 600, spans = [];
  for (const [s, col] of parts){ const w = g.measureText(s).width; g.fillStyle = '#fff'; g.fillText(s, x, base); spans.push([x, x + w, col]); x += w; }
  const d = g.getImageData(0, 0, W, H).data, out = [];
  for (let y = 200; y < 700; y += 12) for (let xx = 0; xx < W; xx += 12)
    if (d[((y + 6) * W + xx + 6) * 4 + 3] > 120) out.push({ x: xx, y, col: (spans.find(sp => xx >= sp[0] - 4 && xx < sp[1] + 4) || spans[1])[2], r: hash(xx * 7 + y * 13) });
  DOTS = { cells: out, x0: (W - tw) / 2, base, z };
}
// draw: dots fade in by c.r, then the crisp word over them
const crisp = inv(.5, .8, lt);
for (const c of DOTS.cells || []){ const a = inv(c.r * .3, c.r * .3 + .08, lt); if (a > 0){ ctx.fillStyle = rgba(c.col, a * lerp(1, .22, crisp)); ctx.fillRect(c.x + 1, c.y + 1, 10, 10); } }
// cue: [0, 'impact']
```

**Glitch jitter** — for 0.1 s on a given beat the word jumps sideways with red/cyan ghosts.
```js
const jit = (lt > 4 * B && lt < 4 * B + .12);
const off = jit ? (hash(Math.floor(lt * 60)) - .5) * 40 : 0;
if (jit){ T(s, x + off - 10, y, { ...o, c: C.bad, a: .7 }); T(s, x + off + 10, y, { ...o, c: C.alt, a: .7 }); }
T(s, x + off, y, o);                                                // cue: [4 * B, 'glitch']
```

## 3. Numbers

**Counter with suffix** — decelerates from 0 to the value, with a slight overshoot. `dec` sets decimals.
```js
const cp = eO(inv(0, .45, lt)), val = n.v * cp, s = n.dec ? val.toFixed(n.dec) : Math.round(val).toLocaleString('en-US');
ctx.save(); const sc = lerp(1.18, 1, eBack(inv(0, .22, lt))); ctx.translate(110, 700); ctx.scale(sc, sc);
T(s, 0, 0, { f: FD, w: 900, z: 380, c: C.acc }); if (n.suf) T(n.suf, mw(s, FD, 900, 380) + 14, 0, { f: FD, w: 900, z: 170, c: C.acc });
ctx.restore();                                                       // cues: [0, 'slam', .75], [.02, 'roll', .45, 12]
```
To step through several numbers in one scene, 4 beats each, compute a sub-scene time and use it in place of `lt` above: `const k = Math.min(N - 1, Math.floor(lt / (4 * B))), l = lt - k * 4 * B, n = TXT.n[k];`.

**Bar comparison** (a big metric with its honest companion) — same scale, or the difference lies. Leave ~150 px right of the longest bar for its label. Data is `[label, exact value, display string]`: length from the exact value, label from the same rounded string as the headline. See `S.number` in the engine.

**Cell fill** (N of M) — M small squares, N fill up, the leading 20 are bright.
```js
const cols = 38, cs = 15, g = 4, fill = N * eO(inv(.05, 1.1, lt));
for (let i = 0; i < M; i++){ const x = vx + (i % cols) * (cs + g), y = 330 + Math.floor(i / cols) * (cs + g);
  ctx.fillStyle = i < fill ? (i > fill - 20 ? C.accHi : C.acc) : C.grid; ctx.fillRect(x, y, cs, cs); }
```

**Ring gauge** (time, ratio)
```js
ctx.lineWidth = 34; ctx.strokeStyle = C.grid; ctx.beginPath(); ctx.arc(cx, cy, r, 0, TAU); ctx.stroke();
ctx.strokeStyle = C.acc; ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + TAU * ratio * p); ctx.stroke();
```

**Value morph** (before → after, e.g. 555 → 58) — `Math.round(lerp(555, 58, eIO(sw)))`; when done, switch to `C.alt` and pop a `'−89%'` badge.

## 4. Lines and structure

**Circuit traces growing out** (boot, connection) — bent lines grow from a centre panel in every direction with a glowing pen tip. See `TRACES` + `S.title` in the engine. `polyPartial(pts, p)` returns the pen tip, so `glow` there.

**Scan beam** — a vertical bar sweeps a grid and the cells behind it get written (checking, saving). See `S.list`. A horizontal beam with a gradient and `'lighter'` compositing:
```js
ctx.save(); ctx.globalCompositeOperation = 'lighter'; const g = ctx.createLinearGradient(0, y - 30, 0, y + 30);
g.addColorStop(0, rgba(C.alt, 0)); g.addColorStop(.5, rgba(C.alt, .85)); g.addColorStop(1, rgba(C.alt, 0));
ctx.fillStyle = g; ctx.fillRect(x0, y - 30, w, 60); ctx.restore();         // cue: [t, 'scan', len, .08]
```

**Radar sweep** — a fading wedge sweeps once around a circular subject and cells behind it change colour (judgement, yield).
```js
const ang = inv(1 * B, 9 * B, lt) * TAU;
for (let j = 0; j < 24; j++){ const a0 = ang - Math.PI / 2 - j * .02; ctx.fillStyle = rgba(C.acc, .22 * (1 - j / 24));
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, R, a0 - .02, a0); ctx.closePath(); ctx.fill(); }
// precompute each cell's angle d.ang (0..TAU); d.ang < ang → "judged" colour
```

**Timeline** (career, history) — a line fills and each diamond node's year and name appear the moment the line reaches it. Derive each node's time from its x so line and labels stay in sync.
```js
const X = [230, 560, 890, 1220, 1590], TT = X.map(x => lerp(.2 * B, 6 * B, (x - 120) / 1680));
const px = lerp(120, 1800, inv(.2 * B, 6 * B, lt));                  // cues: TT.map((t, i) => [t, 'blip', 440 * Math.pow(1.19, i), .08])
```

**Converging lines** (several pieces of evidence point to one spot; locating an error) — bent lines from each origin drawn with `polyPartial`, staggered, meeting at one point.

## 5. Objects

**Circular grid (wafer)** — keep only the cells inside a circle and sort them in a zig-zag, so lighting them in order reads as "inspection in progress". Store per-cell seeded randoms (`h`, `h2`) and angle (`ang`).
```js
const WAF = (() => { const cell = 30, r = 440, dies = [];
  for (let gy = -15; gy <= 15; gy++) for (let gx = -15; gx <= 15; gx++){ const x = gx * cell, y = gy * cell;
    if (Math.hypot(Math.abs(x) + cell / 2, Math.abs(y) + cell / 2) < r - 10) dies.push({ x, y, gx, gy }); }
  dies.sort((a, b) => a.gy - b.gy || ((a.gy & 1) ? b.gx - a.gx : a.gx - b.gx));
  dies.forEach((d, i) => { d.i = i; d.h = hash(i); d.h2 = hash(i + 991); d.ang = (Math.atan2(d.y, d.x) + Math.PI / 2 + TAU) % TAU; });
  return { cell, r, dies }; })();
// drawWafer(cx, cy, rot, scale, d => colourOrNull): disc gradient + notch + per-cell colour callback
```

**Isometric stack** (layers, lanes, parallelism) — a diamond top plus left and right side faces. Each layer drops in from above, 0.15 s apart. Turning one layer red (REJECT) then cyan (REPAIR → PASS) tells "checked and fixed" in a single shot.
```js
const y = base - i * (th + gap) - (1 - eO(inv(i * .15, i * .15 + .28, lt))) * 260;
// top:  (cx-hw,y) (cx,y-hd) (cx+hw,y) (cx,y+hd)   left: (cx-hw,y) (cx,y+hd) (cx,y+hd+th) (cx-hw,y+th)   right: mirrored
```

**Chip package** (closing signature plate) — square body + 12 pins per side + pin-1 dot + laser engraving. See `S.outro`. Its box becomes `CFG.endCta`.

**Mock UI + numbered badges** (showing a tool) — instead of a screenshot, draw a simplified screen from rectangles, mark spots with dashed boxes, arrows and circles, then pop numbered badges. For a real image, load `new Image()` from a data URI (keeps the single file) before fonts are ready and `drawImage` it.
```js
const badge = (n, x, y, t0) => { const p = inv(t0, t0 + .18, lt); if (p <= 0) return; const s = lerp(1.8, 1, eBack(p));
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s); dot(0, 0, 17, OR); T(String(n), 0, 7, { f: FM, w: 700, z: 19, c: '#fff', al: 'center' }); ctx.restore();
  if (p < 1) glow(x, y, 60, 'rgba(255,106,26,.7)', 1 - p); };               // cue: [t0, 'stamp', .7]
```

**Terminal / code panel** — dark panel, each line `typeOn`; tags (`[1]`) in the accent, body in ink; a `'tick'` per line.

**Bit cells decaying → being written** (forgetting vs saving) — first half: lit cells flash red and die at their own `decay` time, "SESSION END" blinks, a remaining-count ticks down. Second half: a scan beam passes and cells are written white → cyan, pulsing on the beat. Strong for problem → fix inside one scene. Split halves with `const phaseB = lt >= 6 * B`.

**Falling-digit rain** (scale, tokens, data volume background) — columns of 0/1 fall at different speeds; a translucent band across the middle carries a big number.
```js
ctx.save(); font(FM, 400, 22, 0); ctx.textAlign = 'center';
for (let c = 0; c < 48; c++){ const x = 20 + c * 40, sp = 180 + hash(c) * 420, off = hash(c + 50) * H;
  for (let r = 0; r < 16; r++){ const y = ((off + lt * sp + r * 70) % (H + 140)) - 70;
    ctx.fillStyle = c % 3 ? rgba(C.acc, .1 + .08 * (r % 3)) : rgba(C.alt, .12); ctx.fillText(hash(c * 31 + r + Math.floor(lt * 8)) > .5 ? '1' : '0', x, y); } }
ctx.restore(); ctx.fillStyle = rgba(C.bg, .62); ctx.fillRect(0, 260, W, 600);
```

## 6. Emphasis and cuts

- **End-of-scene flash**: `const fl = inv(d - .12, d, lt); if (fl > 0){ ctx.fillStyle = rgba(C.accHi, fl * .55); ctx.fillRect(0, 0, W, H); }` — from the opening into the body.
- **Zoom creep**: `const z = 1 + lt * .012; ctx.translate(cx, cy); ctx.scale(z, z); ctx.translate(-cx, -cy);` — subtle life in a static statement scene.
- **Beat pulse**: `beatPulse(lt)` (1 → 0 every beat); multiply light or alpha by it. Closing halo: `glow(cx, cy, 420, rgba(C.acc, .18), beatPulse(lt) * inv(6 * B, 6.5 * B, lt))`.
- **Blink**: `a: Math.floor(lt * 8) % 2 ? 1 : .35` — warnings, "REJECT", cursors.
- **Shake**: `(hash(Math.floor(lt * 60)) - .5) * 12` — only for 0.2 s at the moment of an error.
- **Badge pop**: `eBack` scale 1.8 → 1 or 0 → 1 (value badges, chip labels).
- **Scene cuts** come from `transition()` in `style.js` (default: tile dissolve on odd scenes, light sweep on even ones).

## 7. Sound pairings

Use `SYN` names from the engine in `cues()`, on **the same beat** as the motion.

| Motion | Sound | Notes |
|---|---|---|
| power-on / start | `power` | scene 1 at 0 s |
| headline slam | `slam`, strength .6–.9 | 1–3 per scene |
| thesis / finale | `impact` (+ `chord` 3 s, `bell`) | at most twice per piece |
| list line | `blip`, raise the pitch each line | 660, 810, 960 … |
| counting up | `roll` (len, count) | together with `slam` |
| badge / chip / stamp | `stamp` | |
| scan / sweep | `scan` (len) | same length as the beam |
| into the next scene | `riser` (last 1.1–1.3 s) | may overlap the automatic `whoosh` |
| error → fixed | `error` → `correct` | same beats as red → cyan |
| decay / power-down | `down`, `glitch` | |
| clock / write ticks | `tick`, every half beat | |
| laser engraving | `laser` (len) | per line |

The beat bed starts from the second scene according to `CFG.music.groove`: `electro` (kick, clap, hats, saw bass), `soft` (light kick on 1 and 3, shaker, round bass, pad), `pulse` (pad and gentle arpeggio, no drums), `none` (cues only). `liteScenes` thin the bed for scenes that need reading; `arpScenes` add an arpeggio. `?audiotest` reports per-scene RMS; 0.04–0.15 is typical (calm grooves sit lower).

## 8. Performance

- Never `getImageData` or create canvases per frame — build them once in `geometry.js`, `style.js` or `ready.js`.
- Thousands of `fillRect`s (an 800-cell grid, 768 falling digits) run at 60 fps. `shadowBlur` is slow; use `glow()` (radial gradient + `'lighter'`).
- Repeating randomness comes from `hash(i)` — identical every frame, so no flicker and scrubbing is stable. For randomness that changes over time, quantise: `hash(i + Math.floor(lt * 8))`.
