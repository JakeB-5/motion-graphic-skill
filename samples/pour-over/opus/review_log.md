# review_log.md — "Your first V60 pour-over"

## Round 1
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | Checked strip-en-02…07 and strip-ko-03, 04, 07. At every cut the old text fades out completely (by −0.033 s) before the wipe reveals the new headline, so text never sits on text. The recipe card in sheet-en 07 ENJOY t=27.00 → 29.31 fills row by row with no overlap. |
| D2 phone | FAIL | In sheet-ko-phone 03 STEP 2 t=9.12, the body line "중간보다 조금 가늘게, 흔들어 평평하게" is an unreadable blur at 360 px. The same is true of "부풀어 오르는 게 '뜸'이에요" (04 STEP 3 t=13.73) and "물이 다 빠지면 드리퍼를 내려요" (06 STEP 5 t=23.13). In sheet-en-phone and sheet-ko-phone 07 ENJOY t=29.31, the card labels can't be read. That means "Coffee · medium-fine" and "Water · at 93 °C" (F2 and F4 appear only there) and the "Recipe: SCA brewing guidelines · Hario V60" credit are lost. In sheet-en-phone 04 STEP 3 t=13.73, the "SPED UP" tag that facts.md requires can't be read. EN body lines ("It puffs up: that's the bloom.") are only just readable. |
| D3 hook | PASS | In strip-en-00 @ 0.6 s, "Your first V60 pour-over" is fully drawn and readable. strip-ko-00 @ 0.6 s shows the same for "처음 내려보는 V60 핸드드립". The scale, server and kettle are already on screen at 0.0 s, so the opening is not empty. |
| D4 dead stretch | FAIL | In sheet-en 01 START, t=1.21 and t=2.94 are the same frame; only the steam changes. sheet-ko 01 is the same. strip-en-00 confirms that nothing new happens from 1.2 s to the cut at 3.46 s. |
| D5 blank / stutter | FAIL | In strip-en-03 @ +0.000 (cut into `dose`, 7.50 s), the kettle vanishes from its home spot in one frame. In strip-en-04 @ +0.000 (12.12 s), the "ZERO THE SCALE" tag vanishes in one frame. In strip-en-07 @ +0.000 (25.38 s), the "STEP 5 OF 5" stepper vanishes in one frame. From −0.067 to +0.233 s in strip-en-07 there is no text at all: the frame holds only the server and kettle in the bottom-right corner. strip-ko-03, 04 and 07 show the same problems. |
| D6 pop / linear | FAIL | In strip-en-04 @ +0.000 (cut into `bloom`, 12.12 s), the kettle appears fully formed at its home spot. It was not there at −0.033 s, and it never enters. strip-ko-04 @ +0.000 is the same. |
| D7 banned default | PASS | Checked sheet-en and sheet-ko: no gradient backgrounds, no frame borders, no glow, no particle bursts. Headlines enter by a wipe and objects drop in on springs (strip-en-00 @ 0.2–0.4 s), so not everything fades in. The "STEP n OF 5" stepper is a functional progress bar, not a decorative corner label. |
| D8 covered copy / play button | FAIL | In view-en-phone-portrait-390, the "Play with sound" button sits on top of the second title line: "V60 pour-over" is cut in half. view-ko-phone-portrait-390 does the same to "V60 핸드드립". |
| D9 blurry text | PASS | still-en-08 STEP 4, still-en-13 ENJOY and still-ko-06 STEP 3 all have crisp text edges at 1920 px. report.json shows `smallText: []` and `clippedText: []` for both languages. |
| D10 facts | PASS | Checked sheet-en, sheet-ko and facts.md. 22 g (F1), medium-fine / 중간보다 조금 가늘게 (F2), 400 g (F3), 93 °C (F4), 50 g (F5), 30 s / 30초 (F6), 2:30–3:00 (F8) and Done by 3:00 / 3분 안에 (F9) all match and each appears as one string. The step count reads 5 everywhere. The 10–12 g dose is not shown. |
| D11 sound | PASS | report.json: peak 0.460 (no clipping). Per-scene RMS runs from 0.028 to 0.050, so no scene is silent. cue-check.md has the "Round 1" line, no FAIL lines, and 0 `impact` cues. |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | No evidence for 8. The title is readable by 0.6 s (strip-en-00), but it is a small top-left headline over a quiet still life. After 1.0 s nothing moves except the steam, so there is nothing striking to earn the 8. |
| Readability at phone size | 6 | Capped by D2. The headlines are excellent, but the KO body lines and the recap-card labels (the only place grind and temperature appear on the card) are lost at 360 px. |
| Motion quality | 5 | Capped by D5 and D6. All six cuts use the same pattern: text fades out, then a text-less gap, then the same brown wavy line sweeps across (strip-en-02…07 @ +0.133…+0.233). Props appear and vanish on the cut frame instead of moving. |
| Variety | 5 | Capped by D4. Every step scene (sheet-en 02–06) uses one layout: number badge, two-line headline and body on the left, dripper on the scale fixed at the same spot on the right, same camera, same wipe. The film never cuts in close (bloom dome, spiral) or changes scale. |
| Composition | 6 | Capped by D8. Hierarchy and the off-centre split are good. But in steps 1–3 the top-right quarter is empty (still-en-03), and ENJOY t=27.00 (still-en-12) is a large blank white card half over greyed-out leftover props, with the mug stranded in the middle of the floor. |
| Brand accuracy | 7 | No evidence for 8. The palette, rounded type and warm tone fit a café, and the numbers match facts.md. But the LCD stops at "2:45" and stays there into ENJOY (still-en-12), which states the single finish time that facts.md chose not to show. Also, the timer runs sped up in STEP 4 and 5 (LCD 0:35 → 2:45) with no "sped up" tag, and where the tag does appear it can't be read at phone size. |
| Sound sync | 7 | No evidence for 8. Every cue passes, levels are sane and there are no impacts. But `open`, `dose`, `bloom` and `pour` each start with a whoosh @0 right after the engine's automatic pre-cut whoosh (0.12 s earlier), so four cuts get a doubled whoosh. With 11 scene whooshes on top of the cut whooshes, the whoosh sound is overused. |

Worst three:
1. **00:00.0–00:03.5 `open`: D8 + D4.**
   - Problem: on the poster, the play button covers "V60 pour-over" / "V60 핸드드립" (view-en/ko-phone-portrait-390). In the film, the scene is frozen from 1.0 s to 3.46 s (sheet 01 t=1.21 ≈ t=2.94).
   - Fix, poster: move the title block up so both lines sit above the button's top edge, or move the illustration right and the title higher so left-centre is free.
   - Fix, opening beat: at beat 3–4 (≈1.7–2.3 s), tilt the kettle so steam puffs, and scale the "22 g · 400 g · 93 °C" chips in on a spring under the title. That gives a second image before the cut and makes the hook striking.
2. **Cuts at 07.50 (`rinse`→`dose`), 12.12 (`dose`→`bloom`) and 25.38 (`done`→`close`): D5 + D6.**
   - Problem: the kettle blinks out at 7.50 and blinks back fully formed at 12.12. The ZERO THE SCALE tag and the stepper vanish in one frame. The `close` cut has a text-less, near-empty stretch of more than 0.3 s.
   - Fix, kettle: never hide it. Slide it off right on a spring during `dose` beat 0 and bring it back on a spring before its pour at `bloom` beat 0.
   - Fix, tag and stepper: exit the tag with a scale-down spring by beat −0.5. Keep the stepper across the cut and let it morph into the card header.
   - Fix, close: start the "Enjoy your cup." wipe at +0.0 instead of after the gap.
   - Also give the six cuts at least two different transitions (for example, a pour-stream wipe for the pouring steps and a push for the others).
3. **00:09.1 `dose`, 00:13.7 `bloom`, 00:23.1 `done`, 00:27.0–30.0 `close`: D2.**
   - Problem: the KO body lines, the recap-card labels, the credit line and the "SPED UP" tag can't be read at 360 px.
   - Fix, body lines: raise body copy from about 46 px to at least 60 px at 1920 (at least 11 px at phone size). Shorten the KO lines, e.g. "중간보다 조금 가늘게" on one line and "흔들어 평평하게" on the next.
   - Fix, card labels: set them at 44 px or more, and make "medium-fine" and "93 °C" part of the bold value line rather than the label.
   - Fix, "SPED UP" tag: set it at 36 px or more, place it inside the ring, and repeat it next to the LCD in `pour` and `done`.

Fixed:
1. `open`:
   - The title moved up to baselines y 258/378, so the phone play button (canvas y ≈ 410–680) sits between the title and the sub.
   - Five numbered step dots now spring in at 2.5–4.5 B as a second beat, with rising blips.
2. Cuts:
   - The kettle is drawn in `dose`, so it never blinks out.
   - The ZERO THE SCALE pill, the stepper, the bloom ring, the pour inset and the timeline all leave with the copy in the last 0.25 s.
   - The close headline enters at 0.1 s.
   - There's a second cut style, a pour from above in blue or coffee colour, for `bloom`, `pour` and `close`.
   - The dose zoom creep now returns to 1 before the cut.
   - The camera pushes in on the bloom (×1.18) and pulls back at the start of `pour`, which adds variety.
3. Phone readability:
   - Body copy went from 46 to 58 px, and the Korean dose, bloom and done lines and the English bloom line now take two lines.
   - Card values are 52 px, with grind and temperature moved into them. Card labels are 34 px and the credit line 40 px.
   - "TIMER SPED UP" is now a 34 px pill under the scale from the first pour to the end of step 5.
- Also: the doubled whooshes are gone, since no scene opens with a whoosh at beat 0. `rinse` lost one whoosh, and `close` has a stamp for the card instead. The 2:45 timer end is recorded in facts.md as an illustrative reading.
- Rebuilt; check.js reports 0 failures.

## Round 2
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07 and strip-ko-03/05/07: at every cut the old headline and body fade out by −0.067 s and the new headline only starts at +0.20 s, so text never sits on text. The recipe card builds row by row (sheet-en 07 ENJOY t=27.00 blank, then 29.31 complete) with no overlap. |
| D2 phone | FAIL | sheet-en-phone 03 STEP 2 t=11.42: "ZERO THE SCALE" is the only place the tare instruction (F15) appears, and it is about 5 px tall at 360 px, which can't be read. KO has the same problem with "저울 영점 맞추기" (sheet-ko-phone 03). sheet-en-phone 06 STEP 5 t=23.13: "2:30–3:00" (F8, a number from the brief) is only a 36 px chart label, about 7 px on a phone, and appears nowhere else. "TIMER SPED UP" / "타이머 빠르게 재생" (the facts.md disclaimer) can't be read in any phone frame from 04 to 06. Headlines and body lines are fine. |
| D3 hook | PASS | strip-en-00 @ 0.6 s: "Your first V60 pour-over" is fully readable and the dripper has dropped in. strip-ko-00 @ 0.6 s: "처음 내려보는 V60 핸드드립" is readable. |
| D4 dead stretch | PASS | sheet-en: each scene's two stills differ. STEP 1 goes from seated filter to tipped server, STEP 2 from grounds pouring to scale zeroed, STEP 4 from 210 g to 400 g, STEP 5 from dripping to dripper lifted. STEP 3 13.73 vs 16.04 is the weakest pair: only the push-in and the ring (0:08 → 0:28) change, but that is under 4 s. The ENJOY/END pair is the deliberate end hold. |
| D5 blank / stutter | FAIL | strip-en-07 @ −0.067 … +0.20 s (cut into `close`, 25.38 s): about 8 frames where the frame is almost empty. All text is gone and the only thing left is a static server, scale and kettle in the lower-right quarter. strip-ko-07 is the same. The same hole of about 0.25 s with no text appears at every cut (strip-en-02…06 @ −0.067 … +0.167). The old copy leaves a beat early and the new copy arrives late. |
| D6 pop / linear slide | PASS | strip-en-03 +0.067…+0.233: the dosing cup slows as it comes in (y steps shrink). strip-en-04: the kettle lifts and tilts over frames. strip-en-05 +0.233: the view-from-above inset grows from a dot. strip-en-06 −0.133: the inset shrinks out. strip-en-00: the step dots come in one at a time from 1.4 s to 2.2 s. Nothing appears fully formed. |
| D7 banned default | PASS | sheet-en / sheet-ko: title is left-aligned on flat cream, not centred on a gradient. Headlines enter with a pour-line wipe, not a fade. No glow, no particles, no frame border. "STEP n OF 5" is a working progress indicator, although it repeats the numbered badge. |
| D8 covered / play button | PASS | view-en-phone-portrait-390 and view-ko-phone-portrait-390: the play button sits between the title and the subtitle and covers neither, but it is tight (about 3 px under "V60 pour-over" in EN). still-en-12 t=27.00: the card lands over a fading scale and kettle, and the "400.0 g 2:45" LCD peeks out beneath it. No copy is covered, but it looks messy. |
| D9 blurry text | PASS | still-en-02, 05, 07 (push-in), 08, 10, 12 and still-ko-08: all text is crisp at full size, including the LCD enlarged by the STEP 3 camera push. |
| D10 facts | PASS | sheet-en/ko 07 END t=29.95 against facts.md: 22 g · medium-fine (F1/F2), 400 g · 93 °C (F3/F4), 50 g · 30 s (F5/F6), Done by 3:00 / 3분 안에 (F9). STEP 5 shows 2:30–3:00 (F8). The timer stops at 2:45, as the facts decision says. 22.0 g and 400.0 g on the LCD are the scale's consistent one-decimal readout, not a second recipe string. |
| D11 sound | PASS | cue-check.md: "Round 2", every line PASS, 0 impact cues. report.json: peak 0.460, no clipping, RMS per scene 0.029–0.050. No scene is near-silent, and the quietest is the bloom wait, which suits it. |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | No evidence for 8. strip-en-00 @ 0.6 s: the title is readable early, but it is a small top-left label (about 12 % of the frame) over a quiet static rig. After the dripper drops at 0.2 s, only steam and the step dots move, so nothing is striking. |
| Readability at phone size | 6 | Capped by D2 (ZERO THE SCALE, 2:30–3:00 and TIMER SPED UP can't be read at 360 px). |
| Motion quality | 6 | Capped by D5: dead text hole at every cut, near-empty frame at 25.38 s. The pour-line wipe is a good idea, and the cup and kettle ease in (strip-en-03/04). |
| Variety | 6 | sheet-en: steps 1–5 (5 of 7 scenes, 3.5–25.4 s) use one layout: badge and headline on the left, the same rig centre-right, scale and tag at the bottom. Every cut uses the same fade-out plus wave-wipe. The ring (STEP 3), inset (STEP 4) and bar (STEP 5) are small add-ons to the same frame. The STEP 3 stills are nearly identical. |
| Composition | 7 | No evidence for 8. still-en-12 t=27.00: the card sits on top of the ghost scale and kettle. still-ko-08: "천천히 원을 그리며" ends about 33 px from the inset ring, which is cramped. still-en-02/05: the band from x ≈ 850 to 1150 is empty, so frames split into two blocks. On the poster the play button touches the title. |
| Brand accuracy | 8 | sheet-en/ko 07 END and STEP 1–5 checked against facts.md F1–F17: every number matches and appears as one string. Tone is warm and café-like. Minor note: the KO step 5 body "물이 다 빠지면" differs from the facts.md wording "거의 다 빠지면". |
| Sound sync | 8 | cue-check.md is all PASS with 0 impact. report.json has RMS 0.029–0.050 across 7 scenes and peak 0.46, so there is no silent scene and no clipping. |

Builder adjustment: none. Composition rose from 6 to 7 after the logged fix to D8 (title moved clear of the play button). Brand rose from 7 to 8 after the logged fixes (sped-up pill, and the 2:45 decision recorded in facts.md). Sound rose from 7 to 8 after the logged fix (doubled whooshes removed).

Worst three:
1. 25.38 s cut into `close` (strip-en-07 / strip-ko-07 @ −0.067 … +0.20 s), with the same pattern at every step cut (3.46, 7.50, 12.12, 16.73, 21.92 s). D5: the old text is gone before the cut, the new headline starts only at +0.20 s, and at the close cut the frame is a static server in one corner. Fix: overlap exit and entrance. Start the pour-line wipe on the cut beat so it clears the old copy and reveals the new copy in the same pass (new headline visible from +0.0 s). At the `close` cut, start the mug and card entrance (or slide the rig out) 0.25 s before the cut so no frame is just the leftover server.
2. 11.25 s `dose` / 21.9–25.4 s `done` / 12.1–25.4 s. D2: three pieces of meaning live only in tags about 28–36 px tall that can't be read at 360 px: "ZERO THE SCALE" (F15), "2:30–3:00" (F8) and "TIMER SPED UP" (the disclaimer). Fix: move the instructions into the body copy ("Medium-fine, shaken level. Zero the scale." / "Aim for 2:30–3:00, then lift the dripper off.") and the KO equivalents. Raise the tags and the bar's window label to at least 48 px bold, keeping them on screen long enough to read.
3. 3.5–25.4 s, steps 1–5, worst at 12.1–16.7 s `bloom`. Variety: five scenes reuse one frame and one transition. The bloom's two stills are almost identical, and "It puffs up" is never actually shown (the bed at still-en-07 t=16.04 is flat). Fix: break the template twice. For `bloom`, push in to a full-frame close-up of the bed visibly doming (spring the dome in over 2 beats, copy as a lower-third). For `pour`, cut to a full-frame top-down spiral with the copy on the right. Give the `rinse`/`done` exits a different transition from the step wipes.

Fixed:
1. Cuts (D5):
   - Copy no longer fades out before a cut. Each scene now has a `copy()` that the cut's wipe redraws, frozen, in the part it hasn't uncovered yet. The wave (or the pour from above) clears the old copy and uncovers the new copy in the same pass, so there are no text-less frames.
   - The new headline starts rising at 0.1 s.
   - `close` starts its server-to-mug pour on the cut.
   - The wipe's leading band fades out at the end instead of resting on the counter.
2. Phone readability (D2):
   - The tare instruction is in the body copy: "Then zero the scale." / "저울을 0으로 맞춰요".
   - The window is in the body copy: "Aim for 2:30–3:00, then lift the dripper off." / "2:30–3:00이면 딱 좋아요 · 물이 거의 빠지면 드리퍼를 내려요". `done` grows from 6 to 7 beats and `close` shrinks from 8 to 7 to give it time; the film is still 52 beats (30.0 s).
   - The counter pills ("TIMER SPED UP", "ZERO THE SCALE") are 44 px bold, and the window label is 52 px.
3. Variety:
   - `bloom` is now a real close-up. The camera pushes in to ×1.5 on the cone and the bed visibly domes (30 px, soft spring) with larger bubbles. `pour` pulls back from it.
   - The 93 °C tag shows only while the kettle is actually pouring.
   - Pour copy is fitted to 700 px, clear of the inset.
- Also:
  - Title moved up 10 px on the poster and enlarged to 124 px.
  - The close card lands at 2.25 B after the bar has faded, so it no longer covers the leftover LCD.
  - The KO step 5 wording now matches facts.md ("물이 거의 빠지면").
- Rebuilt; check.js reports 0 failures.

## Round 3
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07 and strip-ko-04/06/07, every frame from −0.133 to +0.233 s: the wave wipe splits old and new copy at the wipe line, and no glyph sits on another glyph. The wipe does create mixed sentences for about 2 frames: strip-en-04 @ +0.233 "Pour 50 g, / of coffee", strip-en-05 @ +0.233 "Slow spirals, / wait 30 s", strip-ko-06 @ +0.233 "3분 안 / 까지". |
| D2 phone | PASS | sheet-en-phone and sheet-ko-phone, all 15 tiles: every headline and body line reads at 360 px, e.g. ko 06 STEP 5 t=23.34 "물이 거의 빠지면 드리퍼를 내려요" and en 05 STEP 4 t=18.55 "Keep off the paper." The inset labels ("not here", "VIEW FROM ABOVE"), the timeline ticks, the card row labels and the ko credit line do not read, but they are labels, not message lines. |
| D3 hook | PASS | strip-en-00 and strip-ko-00 @ 0.6 s: the headline "Your first V60 pour-over" / "처음 내려보는 V60 핸드드립" is at full opacity, and the dripper has dropped onto the server by 0.4 s. |
| D4 dead stretch | PASS | sheet-en and sheet-ko: both stills of every scene differ (rinse: server tipped; dose: 20.1 g → zero-the-scale pill; bloom: push-in and dome; pour: 210 → 400 g; done: dripper lifted; close: card empty → filled). The two START stills (1.21 vs 2.94) are nearly identical, differing only by the step dots, but that stretch is under 4 s. |
| D5 blank/stutter | PASS | strip-en-02…07 and strip-ko-04/06/07: no blank frame and no flash-back of the old scene. The camera pull-out at strip-en-05 +0.033…+0.200 is fast but eased over about 5 frames, not a jump. |
| D6 pop/linear | PASS | strip-en-00 (dripper drops, step dots spring in one by one), strip-en-02 (filter descends while fading), strip-en-03 (grounds packet falls in from the top edge), strip-en-04/05 (kettle arcs in). The only one-frame appearance is the 93 °C pill at strip-en-05 +0.100 → +0.133. It is revealed from behind the kettle, not popped in, so it is logged under D8. |
| D7 banned default | PASS | sheet-en and sheet-ko: no centred title on a gradient, entrances differ, no frame border, no glow, no particles. The top-left "STEP n OF 5" rail is a working progress indicator, not a decorative corner label (though it repeats the numbered badge). |
| D8 covered copy / poster | **FAIL** | still-en-06-STEP_3-13.73 and still-ko-06-STEP_3-13.73 (`bloom`): the "93 °C" pill is drawn under the kettle body at about x 1700–1820, y 220–265. It shows only as a ghosted "°C" and cannot be read. It appears only when the kettle swings away at strip-en-05 +0.133 (16.86 s). The poster is fine: in view-en-/view-ko-phone-portrait-390 the play button sits in the gap between headline and subtitle and covers nothing. |
| D9 blurry text | PASS | still-en-02/06/07/08/11/14 and still-ko-06/10 at full size: all copy is crisp, including the LCD digits during the bloom push-in (still-en-07 @ 16.04). |
| D10 facts | PASS | sheet-en, sheet-ko and still-en-14 against facts.md F1–F9 and F17: 22 g · medium-fine, 400 g · 93 °C, 50 g · 30 s, 2:30–3:00 (the same string in en and ko), Done by 3:00 / 3분 안에, For two cups. The 400.0 g and 50.0 g LCD readings are the scale's own display format, the running readings facts.md allows for. |
| D11 sound | PASS | cue-check.md is headed "Round 3", every line PASS, 0 impact cues. report.json: peak 0.460 (no clipping); per-scene RMS 0.050/0.049/0.033/0.029/0.041/0.049/0.044 (no silent scene). |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | No evidence for 8. strip-en-00 is readable by 0.6 s but not striking: a standard top-left title fades up over a small rig (about 18 % of frame width), and 0.6–2.2 s is a static tableau apart from the LCD and the dots. |
| Readability at phone size | 7 | No evidence for 8. The message lines pass on the phone sheets, but meaning-bearing labels go to mush at 360 px: "not here" and "VIEW FROM ABOVE" (en 05 t=18.55), the card row labels 원두/물/뜸/추출 시간, and the ko credit line "레시피: SCA 추출 가이드 · 하리오 V60" (ko 07 t=29.39). |
| Motion quality | 7 | No evidence for 8. The props spring well (strip-en-00, -03, -04), but every cut is the same wave wipe, and the new headline rides in under it at half opacity, so it is never seen landing. At strip-en-07 +0.067…+0.133 the coffee in the tipping server rotates rigidly with the glass: the liquid surface tilts instead of staying level. |
| Variety | 6 | sheet-en and sheet-ko: five step scenes (3.46–25.96 s) reuse one layout: badge plus a two-line headline and body at left, the same rig at right, the same framing. The bloom push-in is the only camera change. All six cuts use the same wave wipe in two colours. |
| Composition | 6 | Capped by D8. Also: still-en-07 @ 16.04 crops the kettle at the frame's top-right edge with the dripper rim about 100 px from the top (safe area broken). still-en-11 @ 25.36 leaves the upper-right half empty after the dripper vanishes. |
| Brand accuracy | 8 | sheet-en, sheet-ko and still-en-14 against facts.md: every recipe number matches F1–F9 and F17, each appears as one string in both languages, the tone is warm, and the palette fits a café screen, so no D10 item applies. |
| Sound sync | 7 | No evidence for 8. cue-check.md is all PASS with 0 impact and report.json shows no clipping. But rinse and pour open with a scene whoosh at 0.5 beat (0.29 s), only 0.41 s after the engine's cut whoosh at −0.12 s, so the swishes double up. RMS stays flat (0.029–0.050), and the close (0.044) sits below the open and rinse, so the level doesn't build to the payoff. |

Builder adjustment: none. Readability rose from 6 to 7 and Motion from 6 to 7 after the logged round 2 fixes (instructions moved into the copy, bigger pills, the wipe that redraws the previous copy).

Worst three:
1. 00:12.4–00:16.9 `bloom` (D8): the "93 °C" pill is drawn under the kettle and never reads during the bloom (still-en-06 / still-ko-06 @ 13.73). It then appears in one frame when the kettle swings away at the cut into `pour` (strip-en-05 +0.100 → +0.133). **Fix:** draw the pill on a layer above the kettle. Anchor it left of the kettle body, clear of the spout's rotation arc (e.g. below the kettle, right of the dripper rim). Spring-scale it in at 0.5 beat and keep it readable through 2.5 beats of `bloom`.
2. 00:03.5–00:26.0 `rinse`→`done` (Variety): five scenes share one layout and one framing, and all six cuts use the same wave wipe. On the sheet, rows 1–3 read as the same slide with different props. **Fix:**
   - `rinse`: a close crop on the filter fold.
   - `pour`: let the spiral inset take half the frame instead of a small circle.
   - `done`: let the 2:30–3:00 timeline span the frame width.
   - Swap at least two wipes for match-cuts on the kettle or the scale LCD, so every cut isn't the same wave.
3. 00:25.4–00:30.0 `done` → `close` (Composition/Motion): at 25.36 the dripper disappears and leaves the upper-right half empty, and the dimmed "400.0 g" reads as a fault. Through the cut (strip-en-07 +0.067…+0.233) the server tips with its coffee rotating as a solid block. At 27.38 the payoff frame is a blank card beside a small mug floating mid-frame, with the lower-left quadrant dead. **Fix:**
   - Set the lifted dripper down beside the server instead of removing it, and keep the LCD lit.
   - Keep the coffee surface level as the server tips.
   - Enlarge the mug about 1.5× and seat it on the counter under "Enjoy your cup." so the headline, mug and card form one group.
   - Have the card land 1 beat earlier (1.25 beats) with its first row already ticking, so the card is never blank on screen.

Fixed after round 3 (no further review; this was the third and last reviewed round):
1. D8, 93 °C: the pill now sits at a fixed spot left of the stream and right of the pour inset. It is drawn above the bar and outside the camera zoom, and it springs in with the first pour (0.5 B) in both `bloom` and `pour`. It stays while the water runs (bloom until 2.75 B, pour until 6 B), so it's never hidden under the kettle.
2. Variety:
   - The `pour` inset grew from r 132 to r 150.
   - The bloom close-up is ×1.4, which keeps the dripper rim and kettle inside the frame.
   - Reworking all five step layouts and the cut styles (match cuts) was **not** done; see Unresolved.
3. `done` → `close`:
   - The LCD stays lit (no dimmed "400.0 g"), and steam rises from the full server once the dripper has lifted away.
   - The close was re-staged so the mug (×1.55) sits on the counter under "Enjoy your cup.". The server swings over after the wipe has passed (0.75 B), pours (1.25–2.25 B) with a level coffee surface, then rights itself and fades.
   - The scale and kettle bow out during the pour, so the recipe card (2.5 B) never lands over leftover props. Card rows tick in from 2.75 B.
- Also:
  - Sound: rinse and pour no longer open with a whoosh 0.29 s after the cut whoosh (they use a tick and a blip).
  - The close has its own pad and bass, so the payoff is the loudest scene (RMS 0.060).
  - "not here" is 36 px, "VIEW FROM ABOVE" 30 px, card labels 38 px, and the close credit line 44 px.
- check.js (full run, EN + KO, audio, 7 layouts): 0 failures.

Unresolved (still below 8 after round 3, or not re-reviewed):
- Hook, 7 (0.0–2.2 s `open`): readable at 0.6 s, but the opening is a calm title over a small rig, not a striking image.
- Variety, 6 (3.5–26.0 s):
  - The five step scenes still share one layout: badge, headline and body on the left, the rig on the right.
  - Every cut is one of two wipes (a wave or a pour from above), with no match cuts.
  - The bloom close-up is the only big framing change.
- Composition, 6 in round 3 (capped by D8, which is now fixed but not re-reviewed). The band between the copy and the rig (x ≈ 850–1150) is still empty in `rinse` and `dose`.
- Motion, 7: the new headline rises under the wipe and is not seen landing on its own. For about 2 frames per cut the wipe line splits old and new copy (e.g. 16.95 s "Slow spirals, / wait 30 s").
- Readability, 7: the timeline tick labels (0:00–3:00) and small decorative labels blur at 360 px; every message line reads.
- Sound, 7: fixes were applied (no doubled whoosh, louder close) but not re-reviewed.
