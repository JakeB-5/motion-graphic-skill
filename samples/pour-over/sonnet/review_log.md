# review_log.md

## Round 1
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07 and strip-ko-02…07, frames −0.133 to +0.233 s: the iris clips the old text and the new text appears only inside the opening ring. Old and new text are never on screen together. Sheets en/ko 01–07: no overlaps. |
| D2 phone | FAIL | sheet-en-phone 01 HELLO t=1.05: "A 30-second guide to your first V60 cup." is about 5 px tall, mush. sheet-en-phone 04 STEP 3 t=13.08: "Wet every bit, then wait 30 s." is about 7 px. sheet-en-phone 05 STEP 4 t=18.72: "350 g more, from the centre outward." and "Keep water off the paper." are about 7–8 px. sheet-en-phone 06 DONE t=26.46: "coffee / water / water temperature / brew time" are about 5 px, so the numbers lose their meaning. KO has the same problem: "30초로 배우는 V60 첫 한 잔" (t=1.05), "종이엔 닿지 않게요" and "가운데에서 바깥으로, 350 g 더" (t=18.72). Headlines and big numbers are fine. |
| D3 hook | PASS | strip-en-00 @ 0.2 s: headline rising, dim. @ 0.4–0.6 s: full headline is readable and the dripper drops in. By 1.0 s the whole frame is composed. strip-ko-00 is the same. |
| D4 dead stretch | FAIL | still-en-00 (t=1.05) and still-en-01 (t=2.55) are the same frame apart from the scale LCD glyph (blank → "0"). Same for KO. From 1.2 to 3.0 s (strip-en-00 @ 1.2–2.2 s, then sheet 01) nothing new happens. sheet-en 28.05 → 29.55 → 29.95 (ENJOY) changes only when the subline appears. |
| D5 blank / stutter | PASS | strip-en/ko-02…07: the +0.000 s frame is an empty cream frame, which is the iris's closed beat and deliberate. No old scene flashes back after the cut. No position jumps in the scene content. Note: the ring is about 140 px wide at −0.033 s, vanishes at +0.000 s and reopens at about 98 px at +0.033 s. See Other notes. |
| D6 pop / constant slide | PASS | strip-en-00 @ 0.4–0.8 s: the dripper overshoots and settles, so it springs. strip-en-02…07 @ +0.133…+0.233 s: the kettle drops in and settles, and the recipe card rises in strip-en-06. Headlines fade and rise with easing. The number chips "pop" by design, and I could not see their landing frames in these files. |
| D7 banned default | PASS | sheet-en / sheet-ko, all 15 stills: no centred title on a gradient, no glow, no particle burst, no corner labels or frame borders. The faint bottom progress line with ticks looks like player chrome, not film content. |
| D8 covered copy / play button | FAIL | view-en-phone-portrait-390: the "Play with sound" button sits over the left-centre of the poster and cuts off "Pour-" and "ma", and it also covers the subline "A 30-second guide…". view-ko-phone-portrait-390: the button covers "핸드드립" and "어렵지", and the subline "30초로 배우는…". The headline block starts at x≈270 of 390, so the poster's left-centre is not free. |
| D9 blurry text | PASS | still-en-00, 02, 08, 09, 11, 13 and still-ko-08 at 1920×1080: all text is crisp and nothing looks scaled up from a small size. I saw no sign of a `fit` shrink below about 60 %. |
| D10 names / numbers | PASS | Checked against facts.md: 22 g, 400 g, 93.5 °C, 50 g, 30 s, 350 g, 2:30–3:00 and "within 3 minutes" / "3분 안에" all appear in sheet-en and sheet-ko exactly as printed, each as one string. No intermediate grams, no 56 g/kg, no link, no brand name. The scale reads only 0, 22 g, 50 g, "…" and 400 g. Small drift, with no wrong numbers: the poster says "30s · tap to play" in both languages, while the film body says "30 s" in EN and "30초" in KO. KO F10 reads "가운데에서 바깥으로, 350 g 더", not the listed "나머지 350 g". |
| D11 sound | PASS | report.json: peak 0.681 (no clipping), rms per scene 0.026–0.054, no silent scene, no warnings, failures []. cue-check.md is headed "Round 1", has 0 FAIL lines and counts 2 `impact` cues (limit 2). |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | No evidence for 8. strip-en-00 shows a readable headline by 0.4 s and a dripper drop with overshoot. But t=0.0 is blank, and after 1.2 s everything is static. "Pour-over, made simple." is a plain opener. |
| Readability at phone size | 5 | Capped by D2. Headlines and big numbers survive at 360 px, but almost all body and sub lines and the recipe-card labels do not. |
| Motion quality | 7 | No evidence for 8. The dripper and kettle springs in strip-en-00 and strip-en-03 are good. But every cut is the same 0.27 s iris, and the new headline is still at about 30 % opacity at +0.2 s (strip-en-03), so it is never seen landing. The ring also drops out for one frame at each cut. |
| Variety | 5 | Capped by D4 (cap 6). Six of seven scenes use the same left-text / right-object layout (sheet-en 01, 02, 04, 05, 06, 07). Only STEP 2 is mirrored. Every scene enters the same way. HELLO and ENJOY are close to static. |
| Composition | 5 | Capped by D8 (cap 6). The poster's play button sits on the headline. sheet-en 06 and 07 leave the upper half empty, with a tiny dripper and a cup pushed to the bottom. HELLO has a text block in the middle and an empty left third. |
| Brand accuracy | 8 | sheet-en, sheet-ko, facts.md: every number matches and each appears as one string. The palette is cream and caramel, the type is rounded, there is a five-dot counter, an iris and no link, all as briefed. D10 does not apply, apart from the minor wording drift listed in the D10 row. |
| Sound sync | 7 | No evidence for 8. report.json and cue-check.md show no clipping, no silence and 2 impacts. But cue-check PASS is true by construction, since the cues and motion share one table. I cannot see or hear that any cue lands on its motion. STEP 2 (WATER) is the quietest scene (rms 0.026) with only 3 cues in 4.2 s. |

Worst three:
1. 00:00–00:03 poster / `hello` — D8: the play button covers the start of the headline and the subline in both languages (view-en/ko-phone-portrait-390). Move the headline block so the left-centre of the poster is free, or move the headline up or to the right.
2. 00:01.0 `hello`, 00:13.1 `bloom`, 00:18.7 `pour`, 00:26.5 `done` — D2: sublines, the "Keep water off the paper" note and the recipe-card labels are 5–8 px at 360 px. Raise them to at least 1.6× and cut words. Give the card labels real size or drop them. Also check the KO lines.
3. 00:01.05–00:03.0 `hello` — D4: both stills are the same frame, and nothing changes for about 1.8 s after the dripper lands. Add a drip, steam or the LCD lighting, or shorten the scene. The same applies to `enjoy` at 00:28.05–00:29.5, where the subline is the only change.

Other notes:
- The iris is 8 frames (0.13 s) to close and 8 to open. That is too fast to read as a coffee-ring identity. At every cut the ring shrinks to about 140 px, disappears for one frame at +0.000 s, then reappears at about 98 px (strip-en-02 −0.033 / 0 / +0.033). Text is still mid-fade when the iris opens.
- `pour` (sheet-en 05, t=18.72 and 22.32): the spiral disc has a floor shadow and stands on the table like a vinyl record or a coin. Its meaning ("keep water off the paper") is not readable at phone size. It also takes up the lower left, and the diagram has no explicit link to the note beside it.
- The dripper plus the hourglass-shaped server looks more like a Chemex than a V60 with a server. The kettle spout overlaps the dripper rim, and the kettle hovers above the cone, so it looks slightly off.
- The "cup fills up as you learn" world is carried by the server. The actual cup only appears in the last scene, at small size and bottom-right.
- `water` has a kettle and a thermometer but no dripper. It is a clean scene, but it changes the world for 4.2 s.
- KO poster chrome uses "30s"; the rest of KO uses "초".

Fixed (builder, round 1 → 2):
1. D8 — the hello scene is re-laid out: headline and kicker sit top-left above the play button's band, the subline sits under the band, the V60 is bigger at right. The poster's left-centre (x < 46 %, y 37–63 %) is empty.
2. D2 — sublines 46 → 64 px, kickers 34 → 40 px, recipe-card labels 42 → 54 px (label "water temperature" shortened to "temperature"), pour note 46 → 60 px; bloom and pour text blocks re-spaced for the larger type.
3. D4 — hello: two more drips land (beats 3 and 4) and the server level rises; enjoy: the five step dots turn sage one by one (beats 1–3) and ripples run across the coffee.
4. Variety — bloom and enjoy are mirrored (object left, text right); the water scene keeps kettle-left, text-right; entrances differ by element (kettle drops in from above, card springs up, ring scales in, thermometer climbs, dots pop).
5. Iris — closes over 0.30 s and opens over 0.42 s, and both end on the same 34 px ring, so there is no blank frame at the cut. Headlines wait 0.2 s so they arrive as the iris opens.
6. Drawing — the server is now a round-bellied jug with a handle and a spout (it read as a Chemex); the pour inset lost its floor shadow.
7. Cup enlarged for the last scene. Water scene gets a rising-mercury `scan` cue.
Not fixed: the poster's "30s · tap to play" text comes from the engine shell (`${Math.round(DUR)}s`), not from copy.js; it cannot be changed from `parts/`.

## Round 2
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07 and strip-ko-02…07, all six cuts: the iris ring clips the old scene, and no new text appears until about +0.17 s, after the ring has cleared the old text. The sheets show no text on text in either language, including the card build at 24.66 and 26.46. |
| D2 phone | PASS | sheet-en-phone and sheet-ko-phone, all 7 scenes. Every headline and body line reads at 360 px: "Fresh, medium-fine grind." and "골고루 적시고 30초 기다려요" at t=6.57 and 15.48, "Pour slower for a richer cup." at t=29.55. Body lines are small (about 11–12 px), which is borderline but legible. The recipe-card row labels ("coffee", "brew time", "원두", "추출 시간" at t=26.46) are about 9 px. I counted them as labels next to a readable number. |
| D3 hook | PASS | strip-en-00 and strip-ko-00 @ 0.4 s: the headline and dripper are on screen, and the dripper overshoots below its final position at 0.6 s before settling. By 1.2 s the headline and subline are fully readable. |
| D4 dead stretch | PASS | Sheet stills within each scene differ: underline and LCD in hello, chip and mercury in water, spiral and coffee level in pour (18.72 vs 22.32), ring fill in bloom, stamped rows in done. The longest gap between cues is 2.4 s (pour: passes at 16.8, 18.6, 20.4, 22.8 s). The end of enjoy from 28.8 s to 30.0 s is quiet but under 2 s. |
| D5 blank/stutter | PASS | strip-en-02…07 and strip-ko-02…07. Each cut has one near-empty frame at +0.000 s: a tiny ring blob on cream, with the dots still showing. It is a deliberate iris pinch. Ring size goes 125 px to 15 px to 95 px at a steady rate, with no old-scene flash and no position jump. The blank first frame at strip-*-00 t=0.0 is a deliberate lead-in. |
| D6 pop/slide | PASS | Objects spring in: dripper overshoot at strip-en-00 @ 0.6 s, kettles dropping in strip-*-02/04/05 @ +0.13…+0.23 s, cup settling in strip-*-07 @ +0.13…+0.23 s. Headlines rise from grey over about 0.2 s, not in one frame. The scale-LCD and chip pops are deliberate, per facts F6/D3. I can't verify the springing of those chips from stills. |
| D7 banned default | PASS | Nothing on the banned list: no centred title on a gradient, no glow on UI chrome, no particle burst, no frame border. The dots and eyebrow labels are the requested step counter. Entrances are mixed: springing objects, rising text, the iris. See Other notes on the floor progress rail. |
| D8 covered/cropped | PASS | view-en-phone-portrait-390 and view-ko-phone-portrait-390: the play button covers no copy and no drawing. It does fill the whole gap between the headline underline and the subline, so it is crowded. Sheets show no cropped copy. At still-en-10 (24.66) the sliding "water" label kisses the card's right edge, and "물" does the same in the ko sheet. It is mid-motion and clean by 26.46. |
| D9 blurry text | PASS | still-en-00, 02, 05, 07, 09, 10, 11 and still-ko-08, 11: text and numerals are crisp. report.json shows smallText [] and clippedText [] for both languages. |
| D10 facts | PASS | Every number matches facts.md and is one string throughout. Scale, chip and card values are 22 g, 400 g, 93.5 °C, 50 g, 30 s, 350 g more, 2:30–3:00 and 3 minutes, with KO "3분 안에 완성" and "30초". There are no intermediate gram targets, no 56 g/kg line, no link and no café name, in both languages. The KO card labels (원두 / 물 / 물 온도 / 추출 시간) match F13. Minor: the poster shows "30s · tap to play" (KO "30s · 탭해서 재생"), while the film says "30-second" / "30초" and the bloom says "30 s". |
| D11 sound | PASS | cue-check.md is headed "Round 2", has 0 FAIL lines, and counts 2 impact cues (limit 2). report.json: peak 0.681 (no clipping), scene RMS 0.026–0.054 (no silent scene), and the level rises into scenes 6 and 7. I judged this from numbers, not by ear, and the cue times are the builder's own. |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | Readable and warm (strip-en-00 @ 0.4–1.2 s), but not striking. The headline is modest, sits in the top-left, and leaves a big empty gap above the subline. Only the dripper drop has energy. |
| Readability at phone size | 7 | No defect (sheet-en-phone, sheet-ko-phone), but the body and sub lines are only about 11–12 px, and the hangul sublines and card labels are close to the limit. That is not the "every line comfortably readable" an 8 needs. |
| Motion quality | 7 | No defect row applies, and springs are visible (strip-en-00 dripper overshoot, kettles in strip-*-04/05). No 8 because all six cuts are the identical 0.4 s iris, every headline uses the same grey fade-rise, and the chips pop hard. The cut strips show almost nothing of the scenes' own motion. |
| Variety | 6 | Scenes 2, 4, 5 and 1 all use the same layout: text top-left, apparatus right (sheet-en 01–09). Scene 3 is only a mirror of it, and only 6 and 7 differ. Entrances and transitions are identical every time. No D4 defect, but this is not "scenes don't reuse one layout". |
| Composition | 7 | No banned default, and the drawing style and palette are coherent. Weaknesses: the poster's left-centre is not free (view-*-390: button jammed under the underline and above the subline), scene 6 has a tiny dripper stranded bottom-left with half-empty upper space (sheet-en 06 t=24.66), and pour is text-heavy (sheet-en 05). No 8 evidence. |
| Brand accuracy | 8 | sheet-en, sheet-ko and facts.md: no D10 defect. All numbers are printed values, each as one string, in both languages, with no link, honesty line or invented figures. The palette is warm cream and caramel, the type is rounded, the KO tone is friendly (-요), and the iris and five dots are present. Minor notes: the poster's "30s" and the KO numerals in a lighter fallback face. |
| Sound sync | 8 | cue-check.md and report.json: 0 FAIL, 2 impacts, peak 0.681, every scene RMS at or above 0.026, and the level follows the scenes. It is untested by ear. |

Worst three:
1. 03.0–23.4 s (`prep`, `water`, `bloom`, `pour`, plus `hello`), Variety: four of seven scenes reuse one left-text/right-apparatus layout. Every headline enters by the same grey fade-rise and every cut is the same 0.4 s iris. Change the layout of at least `bloom` and `pour`, vary the text entrance, and give the iris a slower or heavier moment at one cut.
2. 00:00 poster frame (`hello`), Composition: the play button fills the whole gap between the headline underline and the subline (about 12–14 px each side). The subline is pushed onto the floor line and the button's border sticks out past the text margin (view-en/ko-phone-portrait-390). The left-centre is not free. Give the button room, or move the subline lower or the headline higher.
3. 24.0–26.4 s (`done`), Composition/Variety: the card lands with two empty dashed rows for about 1.2 s (still-en-10 at 24.66), and the "water" label slides across the card edge. The dripper is tiny and stranded bottom-left, and the upper half is empty. Land the card with its rows already in place or stamp them faster, and enlarge or reposition the dripper.

Other notes:
- A thin orange-and-grey tick rail runs along the floor at the bottom of every still. It reads as a progress bar, which conflicts with "no HUD except the five-dot counter" (still-en-00 to 13).
- The pour scene (18.72–22.32) has four competing blocks: headline, "350 g more…", the spiral coin, and "Keep water off the paper.". The spiral coin's meaning is unclear. The kettle body overlaps the dripper rim, and the stream starts below the spout tip (still-en-09).
- In `water` (8.67–10.77) the thermometer stands loose beside a kettle that looks like a teapot, and its ticks are unlabelled. It looks like an odd object rather than a measurement (still-en-05).
- `enjoy` (28.05–29.95): the top half is empty. "Pour slower for a richer cup." lands as a non sequitur after "Enjoy your first cup." (still-en-13).
- The Korean numerals and "g"/"°C" render in a lighter fallback face, and the "g" sits low like a subscript next to the bold hangul (still-ko-11, sheet-ko 04/05).
- The scale LCD shows "0" before the rinse and the coffee (still-en-02, t=4.47). This is arguably fine as a tare zero, but facts F6 describes a blank display before the tare.

## Round 3
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | FAIL | strip-en-04 @ +0.233 s (scene 3 into 4, film time 11.63 s): the "STEP 3 · BLOOM" eyebrow and the headline "Bloom: pour" sit on the same line and smear into "Bloom·pour". strip-ko-04 @ +0.233 s: the KO eyebrow "3단계 · 뜸 들이기" and the headline "뜸 들이기," overlap the same way. It lasts about one frame at low alpha, but it is text on text during a transition. The other cuts are clean: strip-en-02, 03, 05, 06, 07 and strip-ko-02, 03, 05, 06, 07 show no text on text. |
| D2 phone | PASS | sheet-en-phone and sheet-ko-phone, all 14 stills: every headline and body line is legible at 360 px, including "Fresh grounds, medium-fine grind.", "Keep water off the paper." and the KO "갓 간 원두, 중간보다 조금 곱게". Risk: the recipe-card labels (coffee / water / temperature / brew time, 원두 / 물 / 물 온도 / 추출 시간) are small and pale at 06 DONE t=24.66. The numbers next to them read fine on their own. The grey hello subline is low-contrast. |
| D3 hook | PASS | strip-en-00 and strip-ko-00: the headline is readable at 0.4 s and fully in by 0.6 s. The dripper drops in from 0.4 s and the subline is readable by 1.0 s. |
| D4 dead stretch | FAIL | sheet-en and sheet-ko, 01 HELLO t=1.05 vs t=2.55: same layout, and the only differences are a thin underline and a tiny "0" on the LCD. The cue-check says drips land at 1.8 s and 2.4 s, but no drip or water shows in the server at t=2.55. About 3 s of essentially one picture. Also 07 END t=29.55 vs t=29.95 are identical, but that is a deliberate end hold. Scenes 02 to 06 each show real change between their two stills. |
| D5 blank/stutter | PASS | strip-en-02…07 and strip-ko-02…07: every cut goes iris-close to a tiny ring at +0.000, then opens. The near-empty frames (about −0.033 to +0.067 s) are the deliberate iris beat. No old scene flashes back and there is no jump in position. The new scene's objects arrive at their positions with no pop. |
| D6 pop/constant slide | PASS | strip-en-00 @ 0.4–1.0 s: the dripper drops in and settles, and the headline fades and rises. strip-en-03/04/05 @ +0.133…+0.233: the kettles drop in with easing. The chips ("22 g", "50 g", "93.5 °C") and the recipe rows appear only in the stills, so I could not check their entrances frame by frame. |
| D7 banned default | PASS | sheet-en and sheet-ko: no centred title on a gradient, no glow on chrome, no frame borders, no particle burst. The step-dot counter is the requested element. The eyebrow labels are small copy sitting above headlines, not corner labels. |
| D8 covered/cropped | PASS | view-en-phone-portrait-390 and view-ko-phone-portrait-390: the play button covers no copy and no drawing. It is wedged in the gap between the headline underline (about 17 px above) and the subline (about 9 px below), so it is crowded (see Composition). sheet-en and sheet-ko: nothing is cropped. In strip-en-05 and strip-ko-05 at −0.133 s, the "400 g" chip sits very close under "outward." and under the KO "350 g 더" line. It touches nothing, but it is tight. |
| D9 blurry text | PASS | still-en-01-HELLO-2.55, still-en-09-STEP_4-22.32 and still-ko-11-DONE-26.46 are crisp at full size. report.json `smallText` and `clippedText` are empty for both languages. |
| D10 numbers/names | PASS | Every string in sheet-en and sheet-ko matches facts.md: 22 g, 400 g, 93.5 °C, 50 g, 30 s / 30초, "350 g more" / "350 g 더", 2:30–3:00, "Ready within 3 minutes" / "3분 안에 완성". The same number is always the same string. The LCD "22 g", "50 g" and "400 g" match the chips. The only other numbers are "30-second", the step numbers and the step dots, which facts.md F17 allows as the film's own structure. There is no CTA, link or SCA/Hario name. |
| D11 sound | PASS | cue-check.md: header "Round 3", all lines PASS, `impact` cues = 2 (limit 2), FAIL lines 0. report.json: peak 0.681 (no clipping) and per-scene RMS 0.026–0.054 (no silent scene, quietest at the water scene). I have only the numbers, not the audio. |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | strip-en-00 and strip-ko-00: the headline is readable at 0.4–0.6 s and the dripper drops in by 1.0 s, so D3 passes. Not an 8 because the frame is calm. The headline is top-left, the subline is glued to the floor line, and the middle-left is empty. t=0.0 is blank and t=0.2 is a half-faded headline. |
| Readability at phone size | 7 | No FAIL. Not an 8 because the sublines and card labels are small and pale in sheet-en-phone and sheet-ko-phone (06 DONE). The hello subline has very tight leading and its descenders touch the floor edge in still-en-01. |
| Motion quality | 6 | Capped by D1 (strip-en-04 and strip-ko-04 @ +0.233). Otherwise the iris cuts are clean and the kettles and dripper ease well. |
| Variety | 6 | Capped by D4 (01 HELLO stills are near-identical). Scenes 02 to 06 also reuse one layout, a text block on one side and an illustration on the other. Only left and right swap. Scenes 02 and 04 are the same layout. The recipe card in 06 is the one distinct beat. |
| Composition | 6 | Capped by D1. Beyond the cap: the middle-left of the hello frame is a large void. The hello subline sits on the floor edge. The poster button is squeezed between headline and subline, so the left-centre is not free (view-en-phone-portrait-390). The pour scene (sheet-en 05 t=22.32) has the most on screen: spiral icon, caption, kettle, dripper, headline and body, spread across the frame. |
| Brand accuracy | 8 | sheet-en, sheet-ko and facts.md: none of D10's defects apply, and each number is one string in both languages. The warm cream/caramel palette, rounded type, five-dot counter and coffee-ring iris follow the brief. There is no CTA link and no SCA or Hario name. |
| Sound sync | 8 | cue-check.md and report.json: every cue is PASS, there are 2 `impact` cues, peak is 0.681 and no scene is silent. Caveat: the cue check is the builder's own and I cannot hear the audio. |

Worst three:
1. 00:11.63 `bloom` (cut from `water`) — D1: the eyebrow and headline collide as the headline enters, in both languages (strip-en-04 and strip-ko-04 @ +0.233). Move the headline entrance below the eyebrow, or delay the eyebrow until the headline has cleared it.
2. 00:00–03.0 `hello` — D4: stills at 1.05 s and 2.55 s are almost identical, and the drips cued at 1.8 s and 2.4 s cannot be seen in the server. Add a visible change, such as drops landing with a ripple, the dripper filling, or a second element arriving.
3. 00:00–03.0 `hello` and the poster frame — Composition: the subline is glued to the floor with tight leading, the middle-left is a void, and the play button is wedged between the underline and the subline in view-en-phone-portrait-390 and view-ko-phone-portrait-390. Lift the subline off the floor, give it normal leading, and move the block or the button so the left-centre is free.

Other notes:
- Scenes 02 to 06 all use a text block on one side and an illustration on the other. Vary the composition somewhere, for example a full-width scale close-up or a centred cup.
- The "Keep water off the paper." spiral icon (scene 05, t=18.7–22.3) looks like a vinyl record or a target. It doesn't say "paper" or "spiral pour", and the scene carries too many separate elements.
- The KO headline "3분 안에 / 완성" (06 DONE) breaks into a short orphan line.
- The hello subline is grey on cream with low contrast, and its two lines nearly touch.
- The thermometer is drawn stuck through the kettle in scene 03. It reads as an odd object.
- Each cut spends about 0.1 s near-empty (a tiny ring on cream). This is deliberate, but the film has 6 of them in 30 s.

Round 2 → 3 fixes (builder): bloom, pour and water were re-laid out (bloom: rig centre, ring timer right, kettle enters from the right; pour: text right, rig centre, top-down inset left; water: thermometer clip-on), headlines now enter in four ways (rise, wipe, slide, drop), the poster's headline block moved up and its subline down, sublines went to 72 px, the recipe card lands with its rows in place and the brew-time row is marked, the done scene's rig is larger, numerals are always drawn in Nunito 900 (Jua's Latin sat low), and the last two cuts open more slowly.

Fixed after round 3 (builder; no further review, per the three-round limit):
1. D1 — the bloom headline no longer drops in from above through the eyebrow: it slides in from the left (`slideL`). strip-en-04 @ +0.233 s now shows the eyebrow clear and the headline entering beside it.
2. D4 — hello: the pool in the server grows visibly after each of the two drips (drops are larger), and a faint coffee-ring stain fills the empty middle-left.
3. Poster / hello composition — subline lifted off the floor line with looser leading, its colour darkened, the stain fills the void; the play button now sits on decoration only.
4. Water — the thermometer stands on the table on its own; the kettle slides in from the right. The "400 g" chip moved away from the pour copy. The KO `done` headline is one line. Card labels 62 px and darker.
5. Final rebuild: `check.js` ALL CHECKS PASSED (zero failures, both languages, 7 device layouts), audio peak 0.681, no scene below rms 0.026, `cue-check.md` 0 FAIL, 2 `impact` cues. `film.mp4` rendered by `record.js` and verified (30.00 s, 1920×1080, 30 fps, H.264 + AAC).

Unresolved: (the fixes above were not re-reviewed, so the round-3 scores below are the last scored ones)
- Round 3 scored Hook 7, Readability 7, Motion 6 (D1, since fixed), Variety 6 (D4, since fixed; reviewer also noted scenes 02–06 still share a "text on one side, illustration on the other" structure), Composition 6 (D1 cap; poster crowding since eased but not verified), Brand 8, Sound 8. Axes at 8 or above: Brand accuracy and Sound sync only. Hook, Readability, Motion, Variety and Composition are not confirmed at 8+.
- D1 and D4 were FAIL rows in round 3; both were fixed afterwards but not re-scored.
- The play button on the poster (390 px portrait) still sits close to the copy above and below it; a fixed text-free band would need a shorter opening headline.
- Sound was judged from `report.json` and the cue table, not by ear.
- The engine's scrub bar (thin tick rail along the floor) and the poster's "30s · tap to play" text are shell features that `parts/` cannot change.
