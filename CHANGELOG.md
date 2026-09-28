# Changelog

## Unreleased

- Codex support using the shared `motion-graphic` skill: UI metadata in `agents/openai.yaml`, repository discovery through `.agents/skills/motion-graphic`, and host-neutral tool instructions.
- English and Korean instructions for Codex installation and explicit `$motion-graphic` invocation.

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
