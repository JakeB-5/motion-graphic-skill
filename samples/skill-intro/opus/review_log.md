# review_log.md — skill intro (30 s, EN + KO)

Critique loop per `references/critique.md`. Each round: `check.js` → builder's `cue-check.md` → a separate reviewer with a fresh context (critique.md, the check folder, the brief and facts.md only) → fixes.

## Round 1
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | FAIL | still-en-00 @ 0.98 s (`hello`): the Codex chip enters oversized and half-transparent, and its outline sits on the "r" of "A skill for". strip-en-00 @ 1.0 s shows the same collision. Also still-en-06 and still-ko-06 @ 13.83 s (`style`): the sliding CLEAN pill covers the "E" of CONSOLE, so the tab reads "CONSOL". The strip-en/ko-02…07 cuts themselves are clean, with no text on text. |
| D2 phone | FAIL | sheet-en-phone and sheet-ko-phone, 07 SHIP IT t=29.44 and 07 END t=29.95 (`outro`): the brief's required link line "github.com/JakeB-5" (~34 px mono at 1920) and the `$ npx skills add JakeB-5/motion-graphic-skill --skill motion-graphic` line (~30 px mono) come out about 6 px tall at 360 px. They can't be read, so only "motion-graphic-skill" survives. All other message lines are readable, though "About 3× longer to make" and "대신 제작 시간은 약 3배" (06 t=25.41) are at the limit. |
| D3 hook | PASS | strip-en-00 and strip-ko-00 @ 0.2 s: the "motion-graphic" name sticker slaps in, readable, and settles by 0.4 s. Only t=0.0 is empty. |
| D4 dead stretch | PASS | sheet-en and sheet-ko: the two stills of every scene differ (01: chips and v0.4 badge added; 02: file turns into a film; 03: stickers 1→5; 04: CLEAN→POP plus the spring card; 05: portrait→landscape; 06: 5/9→9/9 plus bars; 07: repo sticker plus command). The longest still hold is the end frame, about 29.6–30.0 s. |
| D5 blank/stutter | PASS | strip-en-02…07 and strip-ko-02…07: the diagonal wipe is clean at every cut. The old scene never flashes back and nothing jumps in position (the outro laptop rises steadily in strip-en-07 frames 5–12). The new scene sits bare for about 0.1 s after each wipe, which is acceptable as the landing. |
| D6 pop/linear | FAIL | strip-en-04 and strip-ko-04 (`style`, ≈12.4 s): the headline "A style picked for your topic." / "스타일은 주제에 맞게." goes from absent at +0.133 to full size and final position at +0.167, with no scale or travel. strip-en-05 and strip-ko-05 (`phone`, ≈17.06 s) do the same with "Plays on phones, too." / "폰에서도 그대로.". strip-en-06/07 and strip-ko-06/07: the `score` and `outro` headlines only fade up in place (+0.133…+0.233). |
| D7 banned default | PASS | sheet-en and sheet-ko: no centred title on a gradient, no glow on UI chrome, no particle burst. Stickers slap and cards flip, so not everything fades. The "STICKER 0n · …" kickers are acceptable on a developer-tool topic. |
| D8 covered/cropped | PASS | view-en-phone-portrait-390 and view-ko-phone-portrait-390: the play card (x 37–331) sits left-centre and clears the name sticker (x ≥ 340) and the chip line. No message copy is covered at rest in any sheet still. The transient tab crop at 13.83 s is logged under D1. |
| D9 blurry text | PASS | Full-size stills are crisp: still-en-00 (chip mid-scale), still-en-06 ("Clean." card), still-en-14 (end frame), still-ko-04 and still-ko-11. `smallText` is [] in report.json. |
| D10 names/numbers | PASS | sheet-en, sheet-ko and facts.md: "motion-graphic" (lower case, hyphen), "Codex", "Claude Code", "v0.4", "9 / 9" (the same string in `score` t=25.41 and on the outro sticker t=29.95), "13 min / 43 min" and "13분 / 43분" with bars 152 px : 500 px ≈ 13 : 43 (still-en-11), "7 device layouts", "7 AXES", and the install command verbatim at still-en-14. The "5 / 9" at 22.59 s is the tally mid-count and matches the 5 checks shown. |
| D11 sound | PASS | cue-check.md: "Round 1", every line PASS, 2 impact cues. report.json: peak 0.925 (no clipping), and the quietest scene has RMS 0.055, which is not near-silent. |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | No evidence for 8. strip-en-00 @ 0.2 s puts the name up fast and it springs, but from 0.4 to 1.8 s the frame is a static white card on yellow with only a small chip line added. What the skill does (a brief becomes a film) isn't said until about 3.3 s. |
| Readability at phone size | 6 | Capped by D2: the outro URL and install command are unreadable at 360 px. |
| Motion quality | 6 | Capped by D1 and D6. The stickers, checks and file flip do spring (strip-en-02 +0.133…+0.233, sheet 03 stamp stretch at 9.14 s), but headlines pop in or fade in a film whose own message is "motion that settles". |
| Variety | 6 | sheet-en 02, 04, 05, 06 and 07 all use the same layout: headline top-left, object right, empty lower-left. Every headline enters the same way. The kicker is identical in every scene. Only 03 breaks the pattern. The per-scene colour does the variety work alone. |
| Composition | 6 | Capped by D1. Also: the lower-left is empty in sheet-en 04 t=13.83 and 05 t=18.19. The end-frame headline breaks as "Give your / README a / trailer." with an orphaned "a", and "README a" crowds the laptop (about 40 px gap in still-en-14). |
| Brand accuracy | 7 | No evidence for 8. Every name and number matches facts.md (see D10), and the springs message is a proper light touch (still-en-07 @ 16.17 s). But `style`, 12.2–16.9 s, is a near-black scene: for 4.7 s the film looks like the "default dark console" the brief ruled out. The critique loop, one of the two headline features, appears only as a tiny kicker, "CRITIQUE · 7 AXES". The tickets show the blind-test result, not the score → fix → rescore loop. |
| Sound sync | 7 | No evidence for 8. cue-check.md is all PASS with 2 impacts, and peak 0.925 doesn't clip. But report.json shows `score` at RMS 0.055, half of every other scene (0.108–0.120), even though it holds the "9 / 9" payoff slam. The opening is also low at 0.064. Levels don't follow the scenes. |

Worst three:
1. 00:27.8–30.0 `outro`: D2. The brief's required link and the install command can't be read on a phone (sheet-en-phone and sheet-ko-phone 07 END t=29.95; "github.com/JakeB-5" and the `npx …` line are about 6 px). The command finishes typing at about 29.6 s, leaving only 0.4 s to read it. **Fix:** set the full URL `github.com/JakeB-5/motion-graphic-skill` on the repo sticker at 64 px or more, with both lines at the same size (no small prefix line). Raise the command to 44 px mono or more, or drop `--skill motion-graphic` onto a second line. Type faster (ticks at 0.125 B), or start at 4 B, so the command completes by about 28.6 s and the end frame holds at least 1.2 s. Reflow the headline to "Give your README / a trailer." to free width.
2. 00:12.4 `style` and 00:17.06 `phone` (also 00:20.7 `score` and 00:26.4 `outro`): D6. Headlines pop in fully formed in one frame (strip-en/ko-04 and strip-en/ko-05, +0.133 → +0.167) or only fade in place (strip-en/ko-06 and strip-en/ko-07). **Fix:** give every headline a real spring entrance, for example y +40 px → 0 and scale 1.08 → 1 on `SPRING.snappy`, with lines staggered by 0.25 B and the slam cue on the landing frame. Vary it by scene (mask-slide for `score`, drop-and-squash for `style`) so entrances also add variety.
3. 00:00.94–1.0 `hello` and 00:13.6–13.9 `style`: D1. The oversized, semi-transparent Codex chip overlaps the "r" of "for" (still-en-00 @ 0.98), and the CLEAN pill covers the "E" of CONSOLE (still-en-06 and still-ko-06 @ 13.83). **Fix:** scale the chips from a left-edge transform origin, or pad "A skill for" by the chip's maximum overshoot. For the style tabs, keep the labels above the pill layer and swap the label colour, or animate the pill's left and right edges on separate springs so it never passes over a neighbouring label.

Fixed after round 1 (builder):
- D2 / worst 1 (`outro`): the repo sticker now carries the full URL on two lines of the same size (`github.com/JakeB-5/` + `motion-graphic-skill`, 58 px display). The install command is 44 px mono on two lines and finishes typing at 3.5 B–5 B (≈28.6 s), so the end frame holds ≈1.4 s. The headline reflows as "Give your / README / a trailer.", and the lid is shorter so nothing crowds.
- D6 / worst 2: every headline now enters word by word on its own spring, with a different entrance per scene. `brief`, `score` and `outro` rise out of a mask; `beat` drops one word per ¼ beat; `style` zooms from 1.25× (heavy); `phone` travels in from the left.
- D1 / worst 3: the `hello` chips scale from their left edge, and the style tabs are spaced 70 px apart with the labels drawn on top of the pill in ink.
- Brand: the `style` scene is pink, not near-black (the scene colours are now yellow, blue, tomato, pink, yellow, blue, cream). `score` adds seven review-axis chips (hook · phone · motion · variety · composition · brand · sound) under the headline, so the critique loop reads as more than a kicker.
- Variety / composition: `style` and `score` flip to object-left, copy-right.
- Hook: a play badge pops on the name sticker at beat 1, the sticker bounces and tilts on every beat, and four kicks build into the groove.
- Sound: `score` is no longer a lite scene (RMS 0.055 → 0.105), and the opening goes from 0.064 to 0.090. The `9 / 9` hit is a single slam .55 and the outro impact is .6, so the peak stays at 0.923.
- check.js: 0 failures (en + ko, full run with audio and layouts).

## Round 2
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | PASS | strip-en-02…07 and strip-ko-00/02/04/07, every cut: the wipe cuts the old copy cleanly and the new copy only starts after the wipe has passed. No text on text in the list builds either: sheet-en 03 ON THE BEAT t=11.48 (five sound stickers) and 06 CRITIQUE t=25.41 (ticket grid). Near miss: still-en-10 CRITIQUE t=22.59, where the check badge on ticket row 2 col 2, mid-stamp, covers half of "0.4". It's a shape over text for about 1 frame, not text on text. |
| D2 phone | PASS | sheet-en-phone and sheet-ko-phone, all 15 tiles: every headline and body line can be read at 360 px. Smallest message lines: 06 CRITIQUE t=25.41 "About 3× longer to make" / "blind film pairs won by 0.4 over 0.3" / "대신 제작 시간은 약 3배" / "블라인드 비교 9쌍, 모두 0.4 승", and 07 END t=29.95 `npx skills add …`. All are readable but at about 8 px, right at the limit. The 24 px axis chips (report.json smallText t=22.59) and the CONSOLE/CLEAN/EDITORIAL tabs turn to mush, but they are decorative labels. |
| D3 hook | PASS | strip-en-00 and strip-ko-00: the name sticker slaps in at 0.2 s and "motion-graphic" is readable from 0.4 s. "A skill for Codex" arrives at 1.0 s, Claude Code at 1.4 s, the v0.4 badge at 2.0 s. Only t=0.0 is blank. |
| D4 dead | PASS | sheet-en and sheet-ko: both stills differ in every scene. 01 (chip plus v0.4 badge), 02 (chips → file becomes a film), 03 (one sticker → five), 04 (CLEAN → POP plus spring sticker), 05 (portrait → landscape plus device checks), 06 (5/9 → 9/9 plus bars), 07 (bare lid → repo sticker plus command). Longest hold: 06, from about 24.6 s to 26.25 s, 1.7 s. The end hold is 28.6–30.0. |
| D5 blank/stutter | FAIL | Every cut has 0.13–0.2 s of empty flat colour after the wipe lands, 6 cuts in total. strip-en-04 / strip-ko-04 (00:12.19 into STYLE): frames +0.000…+0.133 are empty pink; the headline only shows, faintly, at +0.167. strip-en-06 (00:20.63 into CRITIQUE): +0.000…+0.100 empty blue. strip-en-03 (00:07.50): +0.000…+0.067 empty red. strip-en-02 (00:02.81): +0.000…+0.100 empty blue. strip-en-07 / strip-ko-07 (00:26.25): +0.000…+0.100 only a slab edge. The wipe is deliberate; the gap after it is not a beat. |
| D6 pop/linear | PASS | strip-en-00 @ 0.2→0.4 s: name sticker overshoots large and tilted, then settles. v0.4 badge @ 2.0→2.2 s: squashes and settles. strip-en-02 +0.133…+0.233: file scales and rotates in. strip-en-06: tickets cascade. strip-en-07: lid rises and stickers slap. No element appears fully formed from one frame to the next. (Several entrances also lean on opacity, noted under Motion.) |
| D7 banned default | PASS | sheet-en and sheet-ko: no centred title on a gradient, no particle burst, no frame border. The "STICKER 0n · …" kicker in each scene is allowed because the topic is a developer tool. Entrances mix slaps, drops, masks and morphs, so it is not "everything fades". Outside the sheet: the status dot in the "Open on GitHub" dock has a soft halo in view-en-phone-portrait-390. That is minor, but it is the one glow-on-chrome candidate. |
| D8 covered/poster | PASS | sheet-en 07 SHIP IT t=29.44 and still-ko-13: the repo sticker overlaps only other stickers, and the headline clears the laptop by about 45 px (KO "README에"). view-en/ko-phone-portrait-390: the play button covers no copy. But the sticker's own red ▶ badge sits about 4 CSS px from the real play button, see worst #3. |
| D9 blurry scaled | PASS | still-en-01, still-en-05, still-en-07, still-en-09, still-en-10, still-ko-11, still-ko-13: all text is crisp at 1920. No upscaled raster text, and nothing shrunk by `fit`. |
| D10 facts | PASS | sheet-en/ko against facts.md: `motion-graphic`, Codex, Claude Code, `v0.4`, `github.com/JakeB-5/motion-graphic-skill`, the npx command verbatim, `9 / 9` (06 and the lid sticker, the same string), `13 min`/`43 min` (KO `13분`/`43분`), "About 3×", 7 device layouts, 7 axes all match. The "5 / 9" at t=22.59 is a live tally that matches the 5 stamped tickets, not a second string for the fact. Wording drift only: KO reads "v0.4 새 기능:" where facts C13 lists "v0.4:". |
| D11 sound | PASS | report.json: peak 0.923 (no clipping), rms/scene 0.090 / 0.119 / 0.111 / 0.111 / 0.108 / 0.105 / 0.113, no silent scene, failures []. cue-check.md: "Round 2", no FAIL lines, 2 impact cues (brief @7, outro @3). |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 7 | strip-en-00 / strip-ko-00: readable by 0.4 s and no slow lead-in. But the first 2 s are a name card only: "motion-graphic" plus chips. Nothing tells a developer what it does until the brief line at about 3.3 s. A logo slap is the safe choice, not a striking one. |
| Readability at phone size | 7 | No evidence for 8. sheet-en-phone and sheet-ko-phone 06 t=25.41 (detail lines, bar labels) and 07 t=29.95 (npx command) are readable only at about 8 px. The axis chips and style tabs are unreadable, which is allowed because they are decorative, but the scene 06 detail lines are at the limit. |
| Motion quality | 6 | Capped by D5. The empty flat colour after every cut is in strip-en-02…07. Also, strip-en-04 / strip-ko-04 +0.167…+0.233: the STYLE headline ramps up in opacity in place with no travel. |
| Variety | 7 | No evidence for 8. sheet-en: the same diagonal colour wipe at all 6 cuts, with a riser plus whoosh into each one (cue-check). The same kicker position in every scene. Headline-left / visual-right in 02, 05 and 07, mirrored in 04 and 06. The colour changes per scene carry most of the variety. |
| Composition | 7 | No evidence for 8. sheet-en 01 t=2.39: the upper-left 40 % is empty. 05 t=18.19: the lower-left half is empty. view-*-phone-portrait-390: two play icons side by side on the poster. The hierarchy is otherwise clear and the safe area is kept. |
| Brand accuracy | 8 | sheet-en, sheet-ko, facts.md: every name, the URL and the command match exactly. Each number appears as one string (`9 / 9`, `13 min` → `43 min`, `7`, `v0.4`). The flat-pop look matches the brief and is not a dark console. Springs appear once, lightly, in 04 STYLE t=16.17 ("New in v0.4: motion that settles." with the `SPRING.playful` curve), as the user asked. None of the D10 defects apply. |
| Sound sync | 7 | No evidence for 8. cue-check.md is all PASS with 2 impacts, and report.json shows no clipping or silence. But levels don't follow the scenes: the opener is the quietest scene (0.090 rms), the others sit flat at 0.105–0.119, and the outro isn't lifted. The riser plus whoosh repeats identically before all 6 cuts. |

Worst three:
1. **00:02.81 / 07.50 / 12.19 / 16.88 / 20.63 / 26.25, every cut; worst at 00:12.19 into `style` and 00:26.25 into `outro`.** D5: after the wipe finishes, the new scene holds 0.13–0.2 s of empty colour before anything enters (strip-en-04 / strip-ko-04 +0.000…+0.133; strip-en-07 +0.000…+0.100).
   - Fix: start each scene's first entrance at +0 so it lands inside the wipe's last frames. The headline mask-rise or slap should begin at 0 B and settle by 0.5 B.
   - Alternative fix: have the wipe band reveal the key element already mid-spring.
   - Also replace the STYLE headline's in-place opacity ramp with a travelling spring entrance, a word drop like 03's.
2. **00:02.81 → 00:26.25, all six cuts, `hello`…`outro`.** Variety: the same diagonal wipe, riser and whoosh at every cut, plus a repeated headline-left / visual-right grid in 02, 05 and 07.
   - Fix: give at least three cuts their own transition, drawn from what's already on screen:
     - `hello`→`brief`: the name sticker peels off to reveal the blue.
     - `brief`→`beat`: match-cut from the playing index.html film to the pad row.
     - `phone`→`score`: the landscape phone zooms to fill the frame.
   - Drop the riser on those cuts so the remaining risers mean something.
   - Flip or restack one of 05 and 07, for example put the headline under the phone in 05.
3. **00:00.4–02.8 `hello` (01 HELLO), plus the poster.** The hook is just the name. The "what" ("A brief in. One HTML file out.") first appears at about 3.3 s. The poster (view-en/ko-phone-portrait-390) shows the sticker's red ▶ badge about 4 px from the real "Play with sound" button, so the frame has two play affordances.
   - Fix: slap a one-line promise under the sticker by 1.0 s (for example "Brief in → film out." / "브리프 넣으면 → 영상"), and shrink the Codex / Claude Code chips to a second line.
   - Swap the sticker's ▶ badge for a non-play mark (a star, or the v0.4 badge alone) so the poster has a single play target.
   - Lift the hello-scene level toward the others' 0.11 rms so the opening hits.

No builder adjustment: every axis that rose (Readability 6 → 7, Variety 6 → 7, Composition 6 → 7, Brand 7 → 8) has a logged round-1 fix that touches it.

Fixed after round 2 (builder):
- D5 / worst 1: every scene's first entrance now starts at 0 s, inside the last frames of the cut: headline words, the file, the tickets, the phone and the lid. The `style` headline zooms *and* rises 60 px (it no longer only ramps opacity in place).
- Worst 2 (variety): the six cuts now use four kinds, three of them grown out of what is on screen: an iris out of the index.html film's play button (`brief` → `beat`), seven vertical blinds (`style` → `phone`), and the landscape phone screen growing to fill the frame (`phone` → `score`). The other three stay diagonal wipes. The riser is dropped before the iris and screen-grow cuts. `outro` is restacked: the headline runs as one line across the top and the lid is centred with the command under it. The `phone` copy block is lowered to balance the left column.
- Worst 3 (hook + poster): a promise line, "Motion graphics / from a brief." (KO "브리프로 만드는 / 모션그래픽."), rises top-left at 0.2 s and 0.55 s. It sits above y ≈ 400 so the poster's play button can't cover it (checked in view-ko-phone-portrait-390). The sticker's ▶ badge is now a star badge (beat 3), so the poster has one play target. The opening adds kicks and hats from beat 1 (hello RMS 0.090 → 0.094).
- Readability: `score` detail lines 54 → 62 px, companion line and bar labels 50 → 56 px.
- Sound: a chord under the repo sticker, and an arpeggio added to `outro`.
- check.js: 0 failures (en + ko, full run with audio and layouts). Peak 0.957.

## Round 3
Reviewer: separate agent, fresh context

| # | Result | Evidence |
|---|---|---|
| D1 overlap | FAIL | strip-en-04 @ +0.133…+0.233 s (12.33–12.43 s, `style`): the headline words slide into each other with the space gone. "style" touches "picked" and "for" touches "your" on every frame, still at +0.233. The same happens in strip-ko-04 @ +0.200…+0.233 ("주제에" runs into "맞게.") and strip-en-05 @ +0.100…+0.233 (17.00–17.13 s, `phone`): "Plays" + "on" read as "Playson", then "phones,too". It settles later (still-en-07 16.17 and still-en-09 20.06 are spaced correctly), but the build puts text on text. The other cuts are clean: strip-en/ko-02, 03, 06, 07 |
| D2 phone | FAIL | sheet-en-phone and sheet-ko-phone, 06 CRITIQUE t=22.59 and t=25.41: the seven axis chips (hook · phone · motion · variety · composition · brand · sound / 훅 · 폰 가독성 …) are 24 px (report.json smallText) and about 4–5 px at 360 px, which is mush. The kicker "7 AXES" is also unreadable, so the "seven axes" claim (facts C11/C15) gets no readable line on a phone. Every other message line reads at 360 px, including "New in v0.4: motion that settles.", "About 3× longer to make", "13 min / 43 min", the KO lines and the install command on the END frame |
| D3 hook | PASS | strip-en-00 and strip-ko-00 @ 0.2 s: the "motion-graphic" sticker slams in large and tilted. The promise line is readable by 0.6–1.0 s, the Codex chip at 1.0 s and the v0.4 badge at 2.0 s. Only the 0.0 s frame is empty |
| D4 dead stretch | PASS | sheet-en/ko: both stills of every scene differ. 01: chips and badges added. 02: chips become a film. 03: 1 sticker becomes 5, plus a subline. 04: CLEAN card becomes POP, plus the spring sticker. 05: portrait phone becomes landscape, plus device row. 06: 5/9 becomes 9/9, plus bars. 07: bare lid becomes repo sticker, plus command. Nothing sits unchanged for more than 4 s |
| D5 blank / stutter | PASS | strip-en/ko-02…07, all cuts: the +0.000 frame after each full-cover wipe/iris/blinds/screen-grow is a clean background plate for one frame. No old scene flashes back and nothing jumps in position |
| D6 pop / linear slide | PASS | strip-en-00 @ 0.2→0.4 s: the name sticker overshoots, then settles smaller. strip-en-02 +0.033…+0.133: the file card flips in and settles. strip-en-06 +0.067…+0.233: tickets scale in on a cascade. strip-en-07 +0.133…+0.233: the lid sticker lands with a tilt. Nothing appears fully formed and nothing slides at constant speed |
| D7 banned default | PASS | sheet-en/ko: no centred title on a gradient, no particle burst, no glow on UI chrome, and entrances mix slaps, flips, iris and word rises. The "STICKER 0n · …" corner kickers are allowed because the topic is a developer tool (technical). Noted under Composition |
| D8 covered copy / play button | PASS | view-en-phone-portrait-390 and view-ko-phone-portrait-390: the play box sits in the free gap between the promise line and the chip row and covers no copy. sheet-en 07 t=29.44/29.95: the repo sticker overlaps the mini stickers on purpose, and "POP!", "slam" and "9 / 9" stay readable. The only covers happen during transitions (strip-en-06 screen-grow) |
| D9 blurry scaled text | PASS | still-en-04, 06, 07, 10, 11, 14 and still-en-09: headlines, chips, command and numbers are all crisp at full size. The only distorted text is the squashed "stamp" sticker at 9.14 s, which is its mid-motion squash |
| D10 names / numbers | PASS | Checked against facts.md: sheet-en 25.41 "9 / 9", "13 min" / "43 min", "About 3× longer to make". sheet-ko 25.41 "13분 / 43분", "약 3배", "9쌍, 모두 0.4 승". Also "v0.4" (01 t=2.39, 04 t=16.17), "7 device layouts" (05 t=20.06), "7 AXES" (06 t=22.59), and still-en-14 command and URL verbatim. The "5 / 9" at 22.59 is the running tally documented in facts.md. Each number appears as one string, and the bars are in the right 13:43 ratio (about 135:450 px) |
| D11 sound | PASS | report.json: all seven scenes have signal (RMS 0.094–0.119), peak 0.957 with no clipping. cue-check.md is present for Round 3, every line PASSes, and there are 2 impact cues (brief @7, outro @3) |

| Axis | Score | Evidence / why |
|---|---|---|
| Hook in the first 2 s | 8 | strip-en-00 / strip-ko-00 @ 0.2 s: the name sticker slams in with overshoot and is readable immediately, and the promise line lands by 1.0 s. No slow lead-in, and the D3 defect doesn't apply |
| Readability at phone size | 6 | Capped by D2: the axis chips and "7 AXES" are unreadable at 360 px (sheet-*-phone 06, t=22.59/25.41) |
| Motion quality | 6 | Capped by D1: words collide during the headline builds in `style` and `phone`. Otherwise the springs are good: sticker overshoot (strip-00), file flip (strip-02), iris out of the play button (strip-03) |
| Variety | 7 | No evidence for 8. Six of seven scenes use the same two-column "kicker at y≈172 + headline top-left/right + object on the other side" layout (sheet-en). Every headline enters with the same word-by-word ghost rise (strip-en-02…07, +0.067…+0.233). Background colours and objects do change every scene |
| Composition | 7 | No evidence for 8. still-en-06 13.83 (`style`): the lower-right third under the headline is empty from 12.2 to 14.3 s until the spring sticker lands. sheet-en 03 t=9.14: the top-right half is empty. A console-style mono corner kicker repeats on every scene of a flat-pop film. The end frame is a centred laptop under a one-line headline, which is safe rather than bold |
| Brand accuracy | 8 | sheet-en/ko compared with facts.md: every name (motion-graphic, Codex, Claude Code, v0.4, repo URL, install command) and number (9 / 9, 13 / 43 min, 3×, 7 layouts, 7 axes) matches and appears as one string. The look is flat pop, not dark console, as the brief asked. The springs message appears once, lightly, in `style` (still-en-07 16.17), as requested |
| Sound sync | 7 | No evidence for 8. cue-check.md is all PASS with 2 impacts, but report.json shows levels that barely follow the scenes (0.094–0.119). The payoff scenes (`score` 0.105, `outro` 0.111) sit below `brief` (0.119), and the peak of 0.957 leaves almost no headroom |

Worst three:
1. 00:22.6–00:26.3 `score` — D2. On phones the seven axis chips (24 px) and the "7 AXES" kicker are 4–5 px mush in both EN and KO, so the "scored on seven axes" claim can't be read. → Put the claim in a real message line, for example "Scored on 7 axes before you see it." / "7개 축으로, 보여 주기 전에 채점.", at body size (≥ 40 px). Either treat the chip row as decoration, or set it as 4 + 3 chips at ≥ 36 px.
2. 00:12.3–00:12.5 cut into `style` and 00:17.0–00:17.2 cut into `phone` — D1. During the headline builds the words run into each other: "stylepicked", "foryour", "주제에맞게", "Playson", "phones,too" (strip-en-04, strip-ko-04 and strip-en-05, frames +0.100…+0.233). → Animate each word from its own offset towards its final laid-out position, and keep its overshoot away from the neighbouring word. Or bring the words in on y/scale instead of x, or start each word only once the previous one has left its slot.
3. 00:20.2–00:20.6 `phone` — the payoff of "Checked on 7 device layouts." misses. still-en-09 at 20.06 shows only 5 of 7 outlines. The seventh pops at beat 7 (≈ 20.18 s) and the screen-grow covers the row from about 20.42 s, so all seven are on screen for only about 0.25 s (strip-en-06 @ −0.133 s). → Move the seven outline pops (and their blips) to beats 3.5…5 (≈ 18.5–19.2 s) so the complete row holds for about 1.2 s before the screen grows.

No builder adjustment: the one axis that rose (Hook 7 → 8) has a logged round-2 fix (the promise line).

Fixed after round 3 (builder; no further review, per the three-round limit):
- D2 / worst 1: the review axes are now a real line on two rows of 36 px chips, led by a yellow "7 axes" / "7개 축" label chip (hook · phone · motion / variety · composition · brand · sound). The counter and detail lines moved down to make room (counter 210 px, detail 56 px).
- D1 / worst 2: no headline entrance moves a word into its neighbour's slot any more. `style` words grow from 0.85× about their own centre while rising, and `phone` lines travel in as one piece. strip-en-04 and strip-en-05 (final check) show the spacing intact on every frame.
- Worst 3: the seven device outlines pop on beats 3.5–5 (≈18.5–19.2 s), after the sub at beat 3, so the full row holds ≈1.3 s before the screen grows (still-en-09 @ 20.06 shows all seven).
- Composition (`style`): the spring-curve sticker and the springs line arrive with the CLEAN morph at beat 3 (≈13.6 s), not beat 4.5, so the right column fills sooner.
- Sound: `brief` landing hits .45 → .32.
- check.js after these fixes: 0 failures (en + ko, full run with audio, 7 device layouts and touch). Audio peak 0.957, RMS per scene 0.094 / 0.119 / 0.105 / 0.107 / 0.101 / 0.105 / 0.111.

Unresolved:
- Readability at phone size — 6 in round 3 (capped by D2, the 24 px axis chips at 22.6–26.3 s `score`). Fixed after round 3 (36 px chips on two rows), but not re-scored.
- Motion quality — 6 in round 3 (capped by D1, headline words colliding at 12.3–12.5 s `style` and 17.0–17.2 s `phone`). Fixed after round 3, but not re-scored.
- Variety — 7: every scene keeps the same mono corner kicker at y≈180, and five of seven scenes use a two-column copy/object layout (0–26 s). Not changed.
- Composition — 7: the top-right of `beat` stays empty above the sequencer (7.5–12.2 s), and the end frame (29.95 s) is a centred lid under a one-line headline, "safe rather than bold". The `style` gap is fixed (sticker now at ≈13.6 s); the rest is not changed.
- Sound sync — 7: scene levels are flat (RMS 0.094–0.119), the payoff scenes `score` (0.105) and `outro` (0.111) sit just under `brief` (0.119), and the peak is 0.957, with little headroom and no clipping. A chord and an arpeggio in `outro` barely moved its RMS. Not resolved.
