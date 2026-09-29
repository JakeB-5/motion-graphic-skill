# Changelog

## 0.4.0 — 2026-09-29

Motion quality and a scored critique loop.

- Engine: closed-form `spring()`, `track()` for values that move through several targets, `swapAlpha()` for text inside a morphing box, and four `SPRING` presets (snappy, default, heavy, playful). Existing easings and scenes are unchanged.
- `check.js`: a phone-size contact sheet (360 px), an opening strip (0–2.2 s), a 12-frame strip around every cut, and a determinism check that renders the same times forwards and backwards.
- `references/critique.md`: the step-5 critique loop.
  - A separate reviewer with a fresh context scores the film when the host can start one. Otherwise the agent reviews itself under the same rules.
  - A defect table with file-and-time evidence comes first. A failed row caps its axes at 6.
  - Seven axes, each scored 1–10: hook, phone readability, motion, variety, composition, brand accuracy and sound sync. Any 8+ must name its evidence.
  - The builder writes `cue-check.md` for the sound axis.
  - Delivery needs every axis at 8+ after at least two rounds. The loop stops after three reviewed rounds and lists the open issues in `review_log.md` and the delivery report.
- References: banned "AI-look" defaults, and the corner HUD limited to technical topics (`styles.md`). Pace rules: a hook within 2 s and something new every 2–4 s, with shorter openings (`story.md`). Spring patterns (`scene-patterns.md`).
- `record.js`: renders to `<out>.part.mp4` and checks it with ffprobe before moving it into place. The file must be playable and not truncated, and its last video packet must be within 0.5 s of the film length. `--verify-only` checks an existing MP4. `SKILL.md` now waits for `record.js` before reporting.
- In a blind comparison on three prompts, 0.4 beat 0.3 on all nine film pairs. The 7-axis mean went from 6.00 to 6.89, with the biggest gains in the first-2-second hook (+2.45) and variety (+1.12). Because of the critique rounds, each piece takes about three times as long (13 → 43 minutes) and costs about 3.5 times as much with Opus 5.5.

## 0.3.0 — 2026-09-28

- Codex support using the shared `motion-graphic` skill: UI metadata in `agents/openai.yaml`, repository discovery through `.agents/skills/motion-graphic`, and host-neutral tool instructions.
- English and Korean instructions for Codex installation and explicit `$motion-graphic` invocation.
- `samples/codex-studio/`: a 30-second, seven-scene paper-card motion graphic with English and Korean playback, MP4 exports, contact sheets, sourced facts, a storyboard and verification results.
- README showcase: English and Korean video embeds, live playback links, and a reusable production prompt describing the sample's audience, source material, style, timing and call to action.

## 0.2.0 — 2026-09-28

- `record.js`: render a piece to MP4 (H.264 + AAC) frame by frame, with the engine's own offline-rendered soundtrack.
- `samples/`: three pieces made from one prompt each — skill intro (flat pop), James Webb Space Telescope (night-sky planetarium), V60 pour-over (café illustration) — with their prompt, `facts.md`, storyboard and MP4.

## 0.1.0 — 2026-09-28

First public version.

- Skill workflow: intake with a sourced `facts.md`, metaphor and topic-derived style, storyboard approval gate, build, verification, delivery.
- Engine: beat-locked 1920×1080 canvas scenes (`render(t)` is a pure function of time), Web Audio synthesis with four grooves and an effects palette, scrubbable player with keyboard, touch and full screen, portrait and short-landscape phone layouts, per-language copy with `?lang=`, `?t=` freeze frames and `?audiotest`.
- Swappable frame (`style.js`: background, overlay, HUD, transitions); palette-driven page chrome that also works on light backgrounds.
- `assemble.py`: split the engine into small editable parts and reassemble them with a syntax check.
- `check.js`: contact sheet and stills, text clipped at the canvas edge, per-scene audio levels, 7 device layouts, touch playback and seek, ellipsized labels; warnings for small body text and CJK in the mono font.
- References: story structures (15/30/45–60 s), style decisions and building blocks (console, clean, editorial, pop, playful), scene patterns with sound pairings.
