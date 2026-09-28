# Critique — score the film before anyone sees it

Passing `check.js` means nothing is broken. It doesn't mean the film is good. The critique loop closes that gap: look at your own frames, score them, fix the worst three problems, and repeat. **Be a harsh motion director, not a proud author.** The first pass always feels finished to the person who built it.

## What to open

All from the `check.js` output folder, for every language:

| File | Look for |
|---|---|
| `strip-<lang>-00.png` | the opening, t = 0 … 2.2 s: is something striking and readable on screen by 2 s? |
| `sheet-<lang>.png` | the whole film: composition, variety, dead stretches, repeated layouts, the end frame |
| `sheet-<lang>-phone.png` | the same stills at 360 px wide: can you read every message line? |
| `strip-<lang>-<n>.png` | every cut, frame by frame: pops, overlaps, flashes of the old scene, blank frames |
| `still-<lang>-*.png` | full size, for anything suspicious on the sheets |
| `report.json` / console | per-scene audio RMS, warnings |

For sound, read each scene's `cues()` next to its `draw()`: every cue should sit on the same beat multiple as the motion it belongs to.

## Score 1–10 on seven axes

8 means a professional motion designer would ship it with minor notes. Give a one-line reason for every score.

| Axis | What earns an 8+ | Evidence |
|---|---|---|
| Hook in the first 2 s | a striking, readable line or image by t = 2 s; no empty or slow lead-in (`story.md` Pace) | `strip-00` |
| Readability at phone size | every message line readable at 360 px; decorative labels may blur, meaning may not | phone sheet |
| Motion quality | things that travel or grow use springs; nothing slides on a fixed curve, pops in fully formed or stutters; no dead frames | cut strips, sheet |
| Variety | something new every 2–4 s; scenes don't reuse one layout; entrances differ by element type | sheet, `scenes.js` |
| Composition | clear hierarchy, safe area kept, balanced frames, off-centre where it helps; no banned defaults (`styles.md` §5); the poster's left-centre is free for the play button | sheet, `view-*` |
| Brand accuracy | name, logo, colours, type and tone match the brief; every number matches `facts.md` and appears as one string | sheet, `facts.md` |
| Sound sync | each hit on the beat of its motion; no silent scene, no clipping; `impact` at most twice | `cues()` vs `draw()`, audio line |

Scores come from what you see, not from what you meant. If round 1 scores 8+ everywhere, look again with the hunt list below before accepting it.

## Hunt for these

- Text overlapping text during a swap, a transition or a list build
- Anything sliding at constant speed or on a fixed curve where it should spring; an element that appears fully formed in one frame
- Corner labels and frame borders on a non-technical topic; a centred title on a gradient; everything fading in; glow on UI chrome; generic particle bursts
- Blurry scaled text (drawn small and scaled up, or shrunk by `fit` below ~60 %)
- A dead beat: 2–4 s where nothing on screen changes
- A stutter at a cut: the old scene flashing back, a blank frame, a jump in position
- Copy covered by shapes, or the poster frame's play button covering content
- A number that differs from `facts.md` or shows up as two strings

## The loop

1. Run `check.js` (while iterating, `--lang` one language and `--no-layout` are fine) and open the files above.
2. Score all seven axes.
3. Write down the **three worst problems**, each with its timestamp (seconds and scene id) and the fix you will make.
4. Append the round to `review_log.md` in the working folder (format below).
5. Fix those three, rebuild, re-run `check.js`, and start the next round.

Deliver only when **every axis is 8 or higher, at least two rounds have run, and `check.js` has zero failures**. If an axis is still below 8 after four rounds, stop, deliver, and tell the user which axis fell short and why — don't loop forever and don't raise a score without a change you can point to in the log.

## review_log.md

One section per round, newest last:

```markdown
## Round 2
| Axis | Score | Why |
|---|---|---|
| Hook in the first 2 s | 8 | brand slams at 1.2 s over the first boot line |
| Readability at phone size | 7 | list lines in scene 4 are 30 px — mush at 360 px |
| Motion quality | 8 | bars and list on springs; cut 3→4 clean |
| Variety | 8 | new element every ~2.5 s; scenes 5 and 7 share a layout |
| Composition | 8 | … |
| Brand accuracy | 9 | … |
| Sound sync | 8 | … |

Worst three:
1. 00:14.2 `list` — list lines 30 px, unreadable on the phone sheet → 40 px, 4 more beats for the scene
2. 00:21.8 `proof2` — 3 s with no change after the entrance → bar fills at beat 6
3. 00:08.6 cut into `thesis` — the headline slams in under the tile dissolve and is never seen landing (strip-en-04, frames 5–12) → slam at 1 beat

Fixed: 1, 2, 3 — rebuilt, check.js 0 failures.
```
