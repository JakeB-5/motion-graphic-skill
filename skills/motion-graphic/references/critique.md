# Critique — score the film before anyone sees it

Passing `check.js` means nothing is broken. It doesn't mean the film is good. The critique loop closes that gap: someone looks at the frames, checks them for known defects, scores them, and the builder fixes the worst problems. **Be a harsh motion director, not a proud author.** The first pass always feels finished to the person who built it — which is why the builder should not be the one scoring it.

## Who reviews

**A separate reviewer with a fresh context, whenever the host can start one** (a sub-agent, helper agent or second session — whatever the host calls it). Give the reviewer only:

- this file (`references/critique.md`);
- the `check.js` output folder: sheets, phone sheets, strips, stills, `view-*` screenshots, `report.json`, and the builder's `cue-check.md` (below);
- the brief as the user wrote it, and `facts.md`.

Tell it to open only those files — not the scene code, the storyboard, `review_log.md` or other skill references; everything it needs to judge is in this file. Don't give it build notes, the previous round's scores or your own opinion of the film. Ask it to return the defect table, the scores and the worst three problems in the `review_log.md` format below. Start a new reviewer for every round, so it isn't anchored on the last one. The builder only fixes, and appends the reviewer's answer to the log unchanged.

If the host can't start a separate reviewer, review it yourself — with the same defect table, caps and evidence rules, and write `Reviewer: self` in the log.

**Cue check (builder, every round).** The reviewer can't see the timing code, so before handing over, the builder writes `cue-check.md` into the check output folder: a first line `Round <n>` with the round number the reviewer is told, then one line per scene — each `cues()` entry, the beat of the motion it belongs to, PASS if they sit on the same beat multiple, FAIL if not — and a last line counting `impact` cues in the whole film.

## What to open

All from the `check.js` output folder, for every language:

| File | Look for |
|---|---|
| `strip-<lang>-00.png` | the opening, t = 0 … 2.2 s: is something striking and readable on screen by 2 s? |
| `sheet-<lang>.png` | the whole film: composition, variety, dead stretches, repeated layouts, the end frame |
| `sheet-<lang>-phone.png` | the same stills at 360 px wide: can you read every message line? |
| `strip-<lang>-<n>.png` | every cut, frame by frame (the 5th frame is the new scene's first): pops, overlaps, flashes of the old scene, blank frames |
| `still-<lang>-*.png` | full size, for anything suspicious on the sheets |
| `view-<lang>-phone-portrait-390.png` | the poster frame with its play button |
| `report.json` | per-scene audio RMS and peak, warnings |

## Step 1 — defects first: pass or fail, with evidence

Go through every row before giving any score. Each row gets **PASS** or **FAIL** and its evidence: the file and the time (`strip-en-04 @ +0.10 s`, `sheet-en-phone 05 PROOF t=14.2`). For a PASS, name what you checked (`strip-en-02…07, all cuts`). A row without evidence counts as FAIL.

| # | Defect | Where to look | A FAIL caps |
|---|---|---|---|
| D1 | Text overlapping text — during a swap, a transition or a list build | cut strips, sheet | Composition ≤ 6, Motion ≤ 6 |
| D2 | A message line (headline or body copy, not a decorative label) can't be read | phone sheet | Readability ≤ 6 |
| D3 | Nothing striking and readable on screen by t = 2 s | `strip-00` | Hook ≤ 6 |
| D4 | A dead stretch: both stills of a scene look the same, or nothing new for more than 4 s | sheet | Variety ≤ 6 |
| D5 | A blank or near-empty frame that isn't a deliberate beat, or a stutter at a cut (old scene flashing back, a jump in position) | cut strips, sheet | Motion ≤ 6 |
| D6 | An element that pops in fully formed from one frame to the next, or slides at constant speed where it should spring | cut strips | Motion ≤ 6 |
| D7 | A banned default — this list is complete: centred title on a gradient, everything fading in, corner labels or frame borders on a non-technical topic, glow on UI chrome, a generic particle burst | sheet | Composition ≤ 6 |
| D8 | Copy covered or cropped by shapes, or the poster's play button covering content | sheet, `view-*-phone-portrait-390` | Composition ≤ 6 |
| D9 | Blurry scaled text: drawn small and scaled up, or shrunk by `fit` below ~60 % | stills | Readability ≤ 6 |
| D10 | A name, version or number that differs from the brief or `facts.md`, or a number shown as two different strings | sheet, `facts.md` | Brand ≤ 6 |
| D11 | A near-silent scene or clipping; a FAIL line in `cue-check.md`; more than two `impact` cues; or no `cue-check.md` for this round | `report.json` audio line, `cue-check.md` | Sound ≤ 6 |

## Step 2 — score 1–10 on seven axes

8 means a professional motion designer would ship it with minor notes. Two rules bind every score:

- **Caps.** An axis capped by a FAIL in step 1 scores 6 at most, however good the rest looks.
- **Evidence for 8+.** A score of 8 or more names the file it was judged from and says in one line why none of that axis's defects apply. No evidence → 7 at most.

| Axis | What earns an 8+ | Evidence |
|---|---|---|
| Hook in the first 2 s | a striking, readable line or image by t = 2 s; no empty or slow lead-in | `strip-00` |
| Readability at phone size | every message line readable at 360 px; decorative labels may blur, meaning may not | phone sheet |
| Motion quality | things that travel or grow spring; nothing slides on a fixed curve, pops in fully formed or stutters; no dead frames | cut strips, sheet |
| Variety | something new every 2–4 s; scenes don't reuse one layout; entrances differ by element type | sheet |
| Composition | clear hierarchy, safe area kept, balanced frames, off-centre where it helps; no banned defaults; the poster's left-centre free for the play button | sheet, `view-*` |
| Brand accuracy | name, logo, colours, type and tone match the brief; every number matches `facts.md` and appears as one string | sheet, `facts.md` |
| Sound sync | every cue on its motion's beat, `impact` at most twice, no silent scene, no clipping, levels that follow the scenes | `cue-check.md`, `report.json` |

Then write the **three worst problems**, each with its timestamp (seconds and scene id), worst first. Every FAIL row belongs in this list before anything else.

## The loop

1. Run `check.js` (while iterating, `--lang` one language and `--no-layout` are fine) and write `cue-check.md`.
2. The reviewer does step 1, step 2 and the worst three.
3. Append the round to `review_log.md` in the working folder.
4. The builder fixes the FAIL rows and the worst three, rebuilds, and re-runs `check.js`. Next round.

Deliver when **no row FAILs, every axis is 8 or higher, at least two rounds have run, and `check.js` has zero failures**. **Stop after three reviewed rounds** whatever the scores: fix what you can from round 3, re-run `check.js` (zero failures is still required), and deliver without another review — listing what is still below 8 or still FAILs, with timestamps, under `Unresolved:` at the end of `review_log.md` and in the delivery report.

If an axis rises from one round to the next with no logged fix that touches it, the lower score counts — a fresh reviewer can't know the earlier score, so this is the builder's job. Leave the reviewer's table as it is and add a line under it: `Builder adjustment: Motion 8 → 7 (no fix logged)`.

## review_log.md

One section per round, newest last:

```markdown
## Round 2
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07: no text on text at any cut; list build in sheet 04 clean |
| D2 phone | FAIL | sheet-en-phone 04 LIST t=10.4: list lines unreadable |
| D3 hook | PASS | strip-en-00 @ 1.2 s: brand readable |
| … | | |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 8 | strip-en-00 @ 1.2 s: brand slams in over the boot line; no empty lead-in |
| Readability at phone size | 6 | capped by D2 |
| Motion quality | 7 | no evidence for 8: springs visible in strip-en-03, but strip-en-05 is mostly under the transition |
| … | | |

Worst three:
1. 00:10.4 `list` — D2, list lines 30 px, mush at 360 px → 40 px, 4 more beats for the scene
2. 00:21.8 `proof2` — 3 s with no change after the entrance → bar fills at beat 6
3. 00:08.6 cut into `thesis` — the headline slams in under the tile dissolve and is never seen landing (strip-en-04, frames 5–12) → slam at 1 beat

Fixed: 1, 2, 3 — rebuilt, check.js 0 failures.
```

After the last round, if anything is still below 8 or FAILs, end the log with `Unresolved:` and one line per item.
