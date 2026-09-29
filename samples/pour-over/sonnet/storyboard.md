# Storyboard — V60 pour-over for beginners (30 s, EN + KO) — as built

The approved revision-2 storyboard, brought in line with what was built. The numbers, message per scene, length, world, palette and "no link" are unchanged. What changed during the build (mostly layouts, found in the critique loop) is listed at the end.

**Style:** warm cream paper (light, faint grain, a wooden counter along the bottom) · no HUD, only a five-dot step counter · Nunito 900 for Latin headlines and every number, Jua for Korean headlines, Noto Sans KR for Korean body copy, Nunito 800 for English body copy · headline entrances differ by scene: rise, wipe, slide from the right, slide from the left · drawn objects (dripper, kettle, dosing cup, server, cup) enter on springs · flat fills, no glow · a coffee-ring iris between scenes (closes over 0.3 s, opens over 0.42 s; the last two cuts open slower, 0.6 s and 0.75 s) · `soft` groove at 100 BPM (0.6 s per beat), C–Am–F–G · palette: bg `#F6EFE4`, ink `#2B1D14`, dim `#8A7565`, acc caramel `#C8632B`, alt sage `#5F8F6B`, bad `#B8352A` — because this plays on a café's in-store screen for people who have never brewed pour-over: it must feel warm and unhurried, read from a few metres away, and look like the café's own world, not a tech demo.

**Concept (one world):** *the cup fills up as you learn.* The spine is a V60 on a scale over a glass server; the server's level is the progress bar. Every step is one thing you do to that dripper. Body copy is plain kitchen language, with no coffee jargon beyond "bloom" and "medium-fine", and each is explained in the line next to it.

**Length:** 50 beats × 0.6 s = 30.0 s, 7 scenes. Files: `index.html` (`?lang=en` default, `?lang=ko`), `film.mp4` (English). `CFG.cta.href = ''`, no link object anywhere.

**Number rule:** every figure on screen is printed in a source, exactly as printed (`facts.md`): **22 g · 93.5 °C · 50 g · 30 s · 350 g more · 400 g · 2:30–3:00 · within 3 minutes**. The scale never counts up: its numbers pop in at printed values only (0 after the tare, 22 g, 50 g, 400 g), and shows nothing, or a rolling "." / ".." / "...", in between. No per-round gram targets, no ratio line, no SCA or Hario name on screen.

| # | id | beats (time) | HUD code | one-line message | visual (as built) | key motion | sound |
|---|---|---|---|---|---|---|---|
| 1 | `hello` | 5 (0.0–3.0 s) | HELLO | Pour-over is easy, and you can start today. | Copy sits above and below the poster's play-button band: kicker + headline "Pour-over, / made simple." top-left with a marker underline, subline "A 30-second guide to / your first V60 cup." bottom-left. A faint coffee-ring stain (the iris motif) fills the empty middle-left. The V60 on its scale stands at right, big. | Headline rises at 0 s. The dripper drops in on `SPRING.playful` at beat 0.5. The subline rises at beat 1, the scale powers on at beat 2, drips land at beats 3 and 4 (the pool in the server grows, ripples), and the underline sweeps beats 3–4. | `bell` + warm `pad` chord at 0, `whoosh` on the drop, `blip`s at beats 1, 2, 3, 4 |
| 2 | `prep` | 7 (3.0–7.2 s) | STEP 1 | Rinse the filter, then add 22 g of coffee. | Text left (headline wipes in, "22 g" in caramel), rig right. A kettle drops in from above and rinses the paper (blue water, the server fills, then drains = discard). A dosing cup drops in and pours grounds. The scale pops "22 g" (chip too), then a tare press resets it to "0". | Stream beats 1–2.5; discard beat 3; grounds beats 3.5–5; "22 g" at beat 5; tare at beat 6. | `whoosh`, `blip`, `whoosh`, `whoosh`, `correct`, `blip` |
| 3 | `water` | 7 (7.2–11.4 s) | STEP 2 | Use water at 93.5 °C. | Standing thermometer (unlabelled scale, one mark) at left, gooseneck kettle beside it, text right (headline slides in from the right). | The kettle slides in from the right. The mercury climbs beats 1–3 to the mark and the "93.5 °C" chip pops at beat 3. Steam thins from beat 4 (the water settles). | `whoosh`, rising `scan`, `bell`, `blip` |
| 4 | `bloom` | 8 (11.4–16.2 s) | STEP 3 | Wet the grounds with 50 g of water, then wait 30 seconds. | Text left (headline slides in from the left), rig in the middle, the 30-second ring timer as the hero on the right. A kettle drops in from the right and pours a thin stream; the scale pops "50 g" (chip too); the bed swells into a dome with bubbles. | Stream beats 1–2, "50 g" at beat 2, dome at beat 2.5, ring fills beats 3–7 with a dot lighting on each quarter (beats 4, 5, 6, 7). | `whoosh`, `blip`, `correct`, `whoosh`, four `blip`s, `bell` |
| 5 | `pour` | 12 (16.2–23.4 s) | STEP 4 | Pour the rest slowly, in spirals, from the centre. | Text right (headline wipes in, three lines), rig in the middle, a top-down inset at left (paper, bed, three spiral passes that never touch the rim) with the note "Keep water off the paper." under it. The kettle follows the spiral's pen point. No live gram counter. | Spiral passes at beats 1–4, 4–7, 7–10 (visual rhythm only, no text). The server level rises throughout. "400 g" pops at beat 11. | `whoosh`, `blip`s at beats 1, 4, 7 (rising pitch), `correct` at 11 |
| 6 | `done` | 6 (23.4–27.0 s) | DONE | It is ready within 3 minutes. Here are the four numbers to remember. | Headline "Ready within / 3 minutes." (KO on one line) slides in at left; the full server and its scale, larger, below it; a recipe card at right with four rows (22 g coffee · 400 g water · 93.5 °C temperature · 2:30–3:00 brew time). | The card springs up (soft `impact` at beat 1); the rows stamp at beats 1, 1.5, 2, 2.5; the brew-time row is highlighted at beats 3.5–4.5; the last drip falls at beat 5 with a ripple. | `impact`, four `blip`s, `bell` |
| 7 | `enjoy` | 5 (27.0–30.0 s) | ENJOY | Enjoy your first cup. Pour slower next time for a richer taste. | A full cup on a saucer at left, steam, ripples crossing the coffee; headline "Enjoy your / first cup." and subline "Pour slower for / a richer cup." at right. The five step dots turn sage one by one. Nothing to click. | The cup rises on a spring at beat 0; the headline rises at beat 1, the subline at beat 2; dots turn sage at beats 1, 1.5, 2, 2.5, 3. The last 1–2 s is a held still. | `bell` + soft `impact`, five quiet `blip`s |

## Copy — EN and KO (as built)

| id | EN | KO |
|---|---|---|
| `hello` | V60 POUR-OVER · FOR BEGINNERS / Pour-over, made simple. / A 30-second guide to your first V60 cup. | V60 핸드드립 · 처음 시작하는 분께 / 핸드드립, 어렵지 않아요 / 30초로 배우는 V60 첫 한 잔 |
| `prep` | STEP 1 · PREP / Rinse, then add 22 g coffee. / Fresh grounds, medium-fine grind. | 1단계 · 준비 / 필터를 헹구고 원두 22 g / 갓 간 원두, 중간보다 조금 곱게 |
| `water` | STEP 2 · WATER / Water at 93.5 °C. / Take it off the boil, let it settle. | 2단계 · 물 / 물 온도는 93.5 °C / 불에서 내려 잠시 기다려요 |
| `bloom` | STEP 3 · BLOOM / Bloom: pour 50 g of water. / Wet every bit, then wait 30 s. (ring: 30 s) | 3단계 · 뜸 들이기 / 뜸 들이기, 물 50 g / 골고루 적시고 30초 기다려요 (ring: 30초) |
| `pour` | STEP 4 · POUR / Pour the rest slowly, in spirals. / 350 g more, from the centre outward. / Keep water off the paper. | 4단계 · 붓기 / 나머지는 천천히, 원을 그리며 / 가운데에서 바깥으로, 350 g 더 / 종이엔 닿지 않게요. |
| `done` | DONE · YOUR RECIPE / Ready within 3 minutes. / card: 22 g coffee · 400 g water · 93.5 °C temperature · 2:30–3:00 brew time | 완성 · 오늘의 레시피 / 3분 안에 완성 / card: 22 g 원두 · 400 g 물 · 93.5 °C 물 온도 · 2:30–3:00 추출 시간 |
| `enjoy` | Enjoy your first cup. / Pour slower for a richer cup. | 첫 한 잔, 맛있게 드세요 / 천천히 부으면 더 진한 맛이 나요 |

## What changed from the approved storyboard

| Item | Approved | Built | Why |
|---|---|---|---|
| Layout | text left, apparatus right in most scenes | five different layouts: hello (copy top-left/bottom-left), water (thermometer left, text right), bloom (text left, rig middle, ring right), pour (inset left, rig middle, text right), enjoy (cup left, text right) | critique rounds 1–3: variety, poster play button |
| `hello` | headline mid-frame, dripper right, steam curls | copy above and below the play-button band, faint coffee-ring stain, no steam (nothing hot is on screen yet), two drips instead of one, marker underline | poster frame (D8) and dead stretch (D4) |
| `hello` sub | "A 30-second guide to your first V60 cup." (one line) | two lines | phone readability |
| `water` | kettle tilts in; thermometer beside it | a standing thermometer with one mark, a gooseneck kettle that slides in from the right, steam | round 2–3: the clip-on thermometer read as an odd object |
| Server | hourglass carafe | round-bellied jug with a handle | it read as a Chemex |
| Headlines | all rise | rise / wipe / slide / slide-from-left by scene | round 2: repeated entrance |
| Text sizes | subline 42 px, kicker 30 px | subline 72 px, kicker 40 px, card labels 62 px | phone readability (D2) |
| Card label | "water temperature" | "temperature" | fits at the larger size |
| `pour` | 2-line headline, sub in one line | 3-line headline and sub; the note is two lines | fits the narrower right column |
| KO `done` headline | "3분 안에 / 완성" | "3분 안에 완성" (one line) | orphan line |
| `done` | two-pass rows at beats 1, 2, 3, 4 | rows at beats 1, 1.5, 2, 2.5, and a highlight on the brew-time row | empty rows on landing |
| Iris | one identical ring each cut | the same ring, closing to a 34 px dot and opening from it (no blank frame); the last two cuts open slower | round 1–2 |
| Enjoy | dots static, sub one line | dots turn sage one by one, ripples on the coffee, sub in two lines | dead stretch |
| Number typeface | display face | Nunito 900 for digits and units in both languages | Jua's Latin sat low next to Hangul |
