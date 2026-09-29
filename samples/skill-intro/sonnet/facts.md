# facts.md — motion-graphic skill intro (30 s, EN + KO)

Sources (all in the repo at `/Users/jin/orca/workspaces/motion-graphic-skill/samples-v040`):
- README = `README.md`, CHANGELOG = `CHANGELOG.md`, SKILL = `skills/motion-graphic/SKILL.md`
- Only facts listed in the "on screen" tables go on screen. Anything not listed there does not.

Revision 2: added springs (F12); scorecard trimmed to `9 / 9` plus the 13 → 43 min companion (6.00 → 6.89 and the 7-axes line moved to "Not used").
Revision 3 (build): added F13 (scored-review headline); the score caption now reads "0.4 beat 0.3 in blind film pairs"; the small source line was dropped; the four-groove pills and the "STEP 03" label are gone; the `0.4` starburst in scene 1 is N5.

## Brief-level facts (from the user's request)

| Fact | Source |
|---|---|
| Audience: developers browsing GitHub; length 30 s; English + Korean; flat-pop look, not the dark console | user brief |
| Ends with a link to https://github.com/JakeB-5/motion-graphic-skill (`CFG.cta.href` = that URL; on-screen text `github.com/JakeB-5/motion-graphic-skill`) | user brief |
| v0.4.0 has two headline features: the scored critique loop and springs; springs get a light-touch mention inside an existing scene | user revision notes |

## What it is (on screen)

| # | On-screen fact | Source |
|---|---|---|
| F1 | Name: `motion-graphic` | README:1, SKILL:2 |
| F2 | "Hand Codex or Claude a brief. Get a motion graphic in one HTML file." (basis of the promise line) | README:3 |
| F3 | It is a skill for Claude Code and Codex | README:5 |
| F4 | Input: a brief plus reference material — docs, PDFs, numbers, screenshots, URLs | README:5 |
| F5 | The agent reads every reference before building | SKILL:41 ("Read every reference") |
| F6 | Output is one self-contained HTML file: no build step, no video, no audio assets | README:83, SKILL:8 |
| F7 | Open it in a browser, drop it on any static host, or attach it | README:83 |
| F8 | Music and effects are synthesized live (Web Audio) | README:85 |
| F9 | Every motion is timed in beats and each sound effect lands on the same beat as its motion | README:84 |
| F10 | Storyboard is shown for approval before anything is built; it is the cheapest place to change the story | README:188, SKILL:59 |
| F13 | **Scored review:** "Every film gets a scored review." — headline of the score scene. A separate reviewer scores the film on seven axes and the agent fixes the worst problems for up to three rounds (the seven axes and the three rounds are not shown on screen) | README:92; CHANGELOG:9–14 |
| F12 | **Springs:** "Motion that settles. Closed-form springs and multi-target tracks give moves overshoot and follow-through, while every frame stays a pure function of time." On screen only as a light touch: pill "SPRINGS · NEW IN 0.4" and the line "Moves overshoot and settle." (no "closed-form", "track" or "pure function" jargon) | README:90; CHANGELOG:7 (0.4.0 "Engine: closed-form `spring()`, `track()`…"), SKILL:98 |

## Numbers (v0.4.0 scorecard, on screen)

| # | On-screen number | Exact / display | Scope and baseline | Source |
|---|---|---|---|---|
| N1 | Wins vs 0.3 (hero) | **9 of 9** film pairs → display "9 / 9" | Blind comparison, three prompts, nine film pairs; 0.4 vs 0.3 | CHANGELOG:17 |
| N3 | Time per piece (honest companion of N1) | **13 → 43 minutes**, "about 3×" (display "13 min" / "43 min", pill "≈ 3× longer"; bars share one scale, 0–45 min) | Same benchmark; the extra time comes from the critique rounds ("Because of the critique rounds, each piece takes about three times as long (13 → 43 minutes)") | CHANGELOG:17 |
| N5 | Version | **0.4** (v0.4.0, 2026-09-29) — the `0.4` starburst in scene 1, the kicker "SCORED CRITIQUE · v0.4", the springs pill "NEW IN 0.4" and the caption "0.4 beat 0.3" | | CHANGELOG:3, README:9 |

The small source line "CHANGELOG 0.4.0 · 3 prompts · 9 film pairs" was cut in the build: at 34 px it was unreadable on the phone sheet (round 1). The caption "0.4 beat 0.3 in blind film pairs" carries the scope instead; "3 prompts" is no longer on screen.

Decisions:
- 43 / 13 = 3.3; CHANGELOG itself says "about three times as long", so the screen says "≈ 3×", never "3.3×".
- README:236 says a 30–45 s film took "30–55 minutes with three reviewed rounds". That is a per-film range, not a benchmark mean, so it is not a conflict with 13 → 43 (CHANGELOG:17). The screen uses only the CHANGELOG figure.
- The critique loop reaches the screen through the headline "Every film gets a scored review." (F13), the kicker ("SCORED CRITIQUE") and the time-bar label ("review rounds included"). The wording "review rounds" is backed by CHANGELOG:9–14 and CHANGELOG:17.

## Close: install and links (on screen)

| Fact | Source |
|---|---|
| Install: `npx skills add JakeB-5/motion-graphic-skill --skill motion-graphic` (shown on three lines: `npx skills add` / `JakeB-5/motion-graphic-skill` / `--skill motion-graphic`) | README:107 |
| License: MIT (in the pill "Claude Code · Codex · MIT") | README:9, README:242–244 |
| Repository URL: https://github.com/JakeB-5/motion-graphic-skill | user brief; README:117 |

## The film's own facts (not from a source file; they describe this piece)

- 30 s, 7 scenes, electro groove at 128 BPM (64 beats × 60 / 128 = 30.0 s), English and Korean in one HTML file.

## Not used on screen (checked, deliberately off)

- **6.00 → 6.89** 7-axis mean (CHANGELOG:17): dropped in revision 2 so the score scene stays legible on a phone.
- **"7 axes"** (CHANGELOG:12, README:92): dropped in revision 2 (one of the two, per the notes); the critique is carried by the kicker and the time-bar label instead.
- Four grooves `electro`/`soft`/`pulse`/`none` (README:85): the groove pills came out of the `beat` scene to make room for springs.
- "3 prompts" and the source line "CHANGELOG 0.4.0 · 3 prompts · 9 film pairs" (CHANGELOG:17): cut in the build, see above.
- +2.45 hook gain, +1.12 variety gain, 3.5× cost (CHANGELOG:17): one honest cost metric is enough.
- "7 device layouts", "12-frame strips", "determinism check" (README:91): correct but too technical for a 30 s intro.
- The other three samples (README:17–77): not needed.
