---
name: motion-graphic
description: Turns a brief plus reference material (docs, PDFs, images, numbers, URLs, existing HTML) into a single-file canvas motion graphic in HTML — beat-synced 1920×1080 scenes drawn by a pure render(t), synthesized Web Audio music and sound effects, a scrubbable player that works on phones, multi-language copy, and automated verification (scene stills, clipped text, audio levels, 7 device layouts). The visual style is chosen per topic, from dark technical consoles to clean corporate, editorial paper, flat pop or playful pastel. Use this skill whenever the user asks for a "motion graphic", "animated intro", "opening/intro video as HTML", "sizzle reel", "kinetic typography", "product/portfolio/pitch/talk opener animation", a "15/30/60-second intro", or hands over material and says "make this into something that plays like a video" — even if they never say "canvas" or "HTML". Do not use it for editing video files (mp4), After Effects work, simple CSS hover effects, or slide decks.
---

# motion-graphic — material → one-file motion graphic

The deliverable is **one self-contained HTML file**. Opened in a browser it plays 16:9 scenes locked to a tempo (BPM), with music and effects synthesized by Web Audio — no audio or video assets. Only web fonts are fetched (Google Fonts).

The skill is built around an engine extracted from a production piece (a 54-second portfolio film). Don't write a player from scratch: **split the engine, fill in scenes, copy and style, and reassemble**. The player, audio, mobile layout and verification hooks are already proven; time spent there is wasted.

## Bundled files

| File | When to read |
|---|---|
| `assets/engine.html` | The source for `assemble.py split`. Ships five example scenes (title, statement, list, number, outro) — open it as-is to see a 24-second demo. No need to read or edit it directly |
| `references/story.md` | When writing the storyboard and copy: structures by length, copy rules, how to show numbers honestly |
| `references/styles.md` | When choosing the concept: topic → visual-language decisions, and style building blocks (console, clean, editorial, pop, playful) |
| `references/scene-patterns.md` | When designing and coding scenes: proven animation patterns with code, and which sound goes with which move |
| `scripts/assemble.py` | Splits the engine into small editable parts and reassembles them, with a syntax check |
| `scripts/check.js` | Verification after each build: contact sheet of stills, clipped text, audio levels, 7 device layouts, touch playback, truncated labels; warnings for small text |
| `scripts/record.js` | Only when the user wants a video file: renders the piece frame by frame to an MP4 with its own soundtrack (needs ffmpeg) |

`SKILL_DIR` below means the directory containing this file.

## Workflow

### 1. Intake — what, for whom, how long

Check the brief for the following. If something that matters is missing, ask **once**, all together (AskUserQuestion when available); use defaults for anything the user doesn't care about.

- **Purpose and audience** — job application, product intro, talk opener, team intro… If the audience is non-specialist, jargon has to go, so this matters.
- **Length** — default 45–60 s (10–12 scenes). A 30 s opener is about 7 scenes, a 15 s intro 4–5.
- **Language** — default: the language the user is writing in. For more languages add `I18N.<lang>` blocks to the same file (`?lang=xx` switches).
- **Call to action** — a link to open at the end (PDF, site, repo)? If none, `CFG.cta.href = ''`.
- **Output path** — if not given, `<slug>-motion.html` in the current working directory.

Read every reference (extract PDF text, look at images, fetch URLs). Then create `facts.md` in the working folder listing every fact and number that will appear on screen **with its source** (file and line/page, or URL). Numbers in a motion graphic are huge and get screenshotted; a number without a source doesn't go on screen. If sources disagree on a value, ask which one to use (rounding differences don't count — see `references/story.md`).

### 2. Concept — one metaphor from the audience's world, and a style to match

A good motion graphic is not "slides that move"; it has **one world**. Pick a metaphor from the audience's (or recipient company's) domain and make HUD labels, transitions, shapes and sounds all speak it.

- Example: application to a memory-chip maker → a wafer-probe test sequence (power on → wafer → yield → error correction → package engraving), translating the actual content (an AI workflow) into fab language.
- Example: a dev tool whose vocabulary is "tracks" → a railway dispatch board (tracks as rails, parallel worktrees as parallel lines, merging as joining the main line).
- Example: logistics → container-terminal control screen. Games → boot → stage select → boss fight.
- The metaphor is a **visual device, not vocabulary**. Body copy stays in plain language; metaphor terms live only in HUD labels and kickers. (Lesson from production: pushing datasheet jargon into body copy made it unreadable for non-specialists.)

**Choose the style from the topic yourself.** Read `references/styles.md` and decide each axis — brightness, texture, frame, typeface, entrance, easing, transitions, music, colour. The engine default (dark console + HUD + electro beat) is only a starting point for technical topics; don't use it unchanged for investor relations, brand stories or children's education. Don't ask the user to pick a style — infer it from the material, audience and brand, and state it in one line at the top of the storyboard ("Style: … because …"). If the user named a tone or supplied a reference design (existing HTML, brand guide, screenshots), that wins.

- Palette: 1 background + 2 inks (`ink`, `dim`) + 3 accents (`acc` primary, `alt` secondary, `bad` alert). A brand colour goes into `acc`.

### 3. Storyboard — the approval gate

Using the structures in `references/story.md`, build a scene table, show it to the user, and **get approval before building**. Changing the story after implementation costs several times more; this is the cheapest place to change course.

| # | id | beats | HUD code | one-line message | visual | key motion | sound |
|---|---|---|---|---|---|---|---|

- One scene = one message. Copy per scene: 1 headline + 1–3 supporting lines.
- Beats: at 140 BPM one beat ≈ 0.43 s. 8 beats ≈ 3.4 s (short), 12 ≈ 5.1 s (normal), 16 ≈ 6.9 s (e.g. four numbers in a row). The more there is to read, the longer the scene.
- Showing the table in the conversation is enough; no separate document needed.

### 4. Build — split, fill, assemble

Don't edit the ~640-line engine directly. **Split it into small files**; the player, audio and helpers never need touching, so there's no need to read them.

```bash
python3 "$SKILL_DIR/scripts/assemble.py" split "$SKILL_DIR/assets/engine.html" <work>/parts
# fill the files in parts/ with Write/Edit, then
python3 "$SKILL_DIR/scripts/assemble.py" build <work>/parts <output.html>   # assemble + syntax check
```

To revise a finished HTML later, `split <output.html> parts` again. Never edit `parts/_shell.html`. (The shell's `<html lang>` is only a default; the engine sets it at runtime to the language being shown.)

| Part | Contents |
|---|---|
| `head.html` | `<title>`, description, og/twitter meta, theme-color, font links |
| `config.js` | `CFG` — `bpm`, `colors` (light backgrounds work; the page margin and play button follow), `fonts`, `textSplit` (RGB split in `slam`), `hudTitle`/`hudMeta`, `cta`, `endCta` (canvas-px box of the last-frame object that becomes the link), `endCtaBeat` (beats into the last scene when that link may appear), `posterT`, `watchKey` (unique per piece), `music.groove` (`electro`/`soft`/`pulse`/`none`), `music.liteScenes` (quieter beat) / `arpScenes` (add arpeggio) / `tailBeats` (how long the beat bed runs into the last scene) / optional `roots`/`chords` |
| `style.js` | The frame: `drawBg(t)`, `overlay(t)`, `hud(t, sc)`, `transition(sc, lt)`. Default is the dark console. **Rewrite it to fit the topic** by mixing and bending the blocks in `references/styles.md` |
| `copy.js` | `I18N.<lang> = {...}` — per-language `ui` (player strings) and scene copy. Scene code reads `TXT.*` only, never literal strings. **For a single language, delete the other blocks** — the language link hides itself |
| `geometry.js` | Shapes precomputed once for the scenes (seeded with `hash()`). The title panel is `TITLE`; its traces follow when you move or resize it |
| `scenes.js` | Replace the examples with your storyboard: `S.<id> = { draw(lt, d), cues(d) }`. Patterns in `references/scene-patterns.md` |
| `plan.js` | `const PLAN = [[id, beats, HUD code], ...]` |
| `ready.js` | Anything that measures text and caches it (dot-matrix words etc.) — runs after web fonts load |

To see how example scenes are written, read `scenes.js` right after `split` (~100 lines).

Rules, and why:

- **`draw()` is a pure function of `lt`.** No accumulated state, no `Math.random()`, no `Date.now()` — use `hash(i)` / `rng(seed)`. That way scrubbing anywhere or freezing with `?t=12.3` shows exactly what playback shows, and verification stills can be trusted.
- **Time in beats.** Write `inv(2 * B, 2.3 * B, lt)` with multiples of `B`, and put the matching sound in `cues` on the same beat. Sound and motion landing together is most of what makes this format feel good.
- **Safe area.** 110 px left/right, below 150 px at the top (HUD), above 950 px at the bottom (progress bar at y = 1002).
- **Long lines get `fit`.** `T(s, x, y, { z: 96, fit: 900 })` shrinks a line to its box, so translations don't overflow. Give every headline a box width.
- **No CJK in the mono font.** JetBrains Mono has no Hangul/CJK glyphs; the fallback spaces them out. Use the mono font (`FM`) for Latin labels, numbers and code; CJK text uses `FK`.
- **Minimum text size.** On a phone the 1920-px film shrinks to ~390 px (about 1/5), so body text under 26 px is unreadable there (check.js warns). Message copy ≥ 32 px, headlines ≥ 80 px. **Decorative mono labels** (HUD, kickers, engraving sublines) may be small — only where the meaning survives without reading them.
- **Poster frame vs play button.** A first visit shows the frame at `posterT` with the play button on top: left 4.5 %, vertically centred, growing to ~40 % of the film width on phones. Pick a poster frame whose **left-centre is empty** (a first scene with the logo centre-right works). Check `view-<lang>-phone-portrait-390.png` from check.js.
- **Numbers: exact value and display string are separate.** Bars and gauges use the exact value; labels use the same rounded string as the headline and the source (`nBar: [['label', 33.93, '33×']]`), so a number never appears two different ways.
- **Dock button label** (`ui.ctaLab`) ≈ 16 Latin characters. Longer labels get ellipsized on phones (check.js fails it). Put long URLs in `ctaSub`.
- **End call to action.** Draw an object in the last scene that becomes the link (chip, card, ticket, book cover…) and put its box in `CFG.endCta`. It only activates after one complete viewing (engine behaviour).

### 5. Verify — look at the stills yourself

check.js needs `puppeteer-core` and Chrome/Chromium:

```bash
npm i --prefix "$SKILL_DIR/scripts" puppeteer-core@23        # once (or install anywhere and set NODE_PATH)
node "$SKILL_DIR/scripts/check.js" <output.html> --out <scratch>/check
```

Chrome is auto-detected on macOS, Linux and Windows; set `CHROME=/path/to/chrome` otherwise. While iterating, `--lang ko` checks one language, and `--no-audio` / `--no-layout` skip the slower parts; run the full check before delivery.

Then **always open `sheet-<lang>.png` and look at it** (two frames per scene plus the last frame). Problems the script can't see — overlapping text, shapes covering copy, text too small, empty frames, a metaphor that doesn't read — only show up in stills. Inspect suspicious frames at full size in `still-*.png`.

Failures reported by the script: page errors (with stack), text clipped by the canvas edge, near-silent scenes or clipping audio, elements overflowing the viewport on 7 devices, ellipsized labels, broken touch playback/seek. Warnings (judge against the sheet): body text under 26 px, CJK in the mono font. Fix and re-run until failures are zero.

If a scene's `draw()` throws, only that scene goes blank; the engine catches it and logs `console.error`. A blank frame on the sheet → read the page error in the report first.

Pitfalls:
- Headless Chrome's `--window-size` has a minimum width, so phone-width screenshots taken that way are wrong. Judge phone layouts only with check.js (puppeteer emulation).
- In zsh, loops over paths with spaces don't word-split; run such loops with `bash -c`.
- Translations run longer: a scene that fits in one language can overflow in another. Look at each language's sheet.

### 6. Deliver

- Report the output path, length (s) and scene count, and the verification result (zero failures, audio levels).
- Mention in one line: `?t=<seconds>` freezes a frame, `?lang=xx` switches language, `?audiotest` renders the audio offline and reports levels.
- If the user needs a video file (social posts, a README, a deck), `node "$SKILL_DIR/scripts/record.js" <output.html> --out <name>.mp4 [--lang xx] [--crf 18]` renders it at 1080p30 with the synthesized audio. Raise `--crf` (e.g. 23) to shrink grainy or textured pieces under an upload limit.
- For a link-preview image, suggest cropping the last-frame still (`still-*-END-*.png`) to 1200×630 as `og.png`.
- Publishing (static hosting, artifacts) makes it public — only when the user asks.

## When the user asks for changes

- "Bigger / easier to read" → larger type and longer scenes; fewer lines per scene (split a scene in two).
- "No jargon" → plain body copy; metaphor terms only in HUD and kickers.
- "Change the numbers" → update `facts.md` first, then every language in `copy.js`.
- Record settled decisions (wording, numbers, notation) in `HANDOFF.md` in the working folder so a later session doesn't undo them.
