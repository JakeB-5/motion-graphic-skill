# Storyboard — James Webb Space Telescope explainer

*Approved 2026-09-29 with three notes, all applied: one HTML with `?lang=en` (default) and `?lang=ko`; temperature shown as under 50 K (−223 °C), with −370 °F added in English; scene 2's gold band starts inside the red end of the rainbow. Kept in sync with the build below.*

**Style:** Dark deep-space near-black navy with a static starfield that drifts slowly, because a lobby screen runs in a dim hall and the subject is the night sky. The frame is a small masthead ("JWST · NASA") and a page counter only, with no technical HUD, since the audience is the general public and not engineers. Gold (the mirror's own colour) is the one accent per frame. Cool blue marks cold and coral marks hot. Type is Space Grotesk 700 for display, with Noto Sans KR for Korean and mono only for Latin kickers. Things that travel or grow (mirror segments, sunshield layers, the calendar) use springs. Headlines `rise`. Only the closing line gets a `slam`, with the RGB split off. The transition is a hexagonal iris: the outgoing scene keeps playing outside a growing hexagon while the new scene shows through it. Music is a `soft` groove at 96 BPM, no hard drums, with an arpeggio in the last two scenes. The piece has to read with the sound off, because lobby screens are usually muted.

**Metaphor:** an observatory unfolding. Webb launched folded up and opened in space, so each scene is one step of that deployment: STEP 02 · LIGHT, STEP 03 · OPTICS, STEP 04 · ALIGN… (the number matches the page counter) Metaphor words appear only in kickers. Body copy is plain language.

**Timing:** 96 BPM, 1 beat = 0.625 s, 72 beats = 45.0 s, 9 scenes. Loop: the last frame holds the link, then the film restarts on scene 1, which opens straight on its title.

| # | id | beats (time) | kicker | one-line message | visual | key motion | sound |
|---|---|---|---|---|---|---|---|
| 1 | open | 6 (0.0–3.75 s) | — (poster frame at 2.6 s) | Webb looks back over 13.5 billion years. | Title top-left, the 18-segment gold mirror at right, "Looking back over 13.5 billion years" bottom-left; the left-centre stays free for the play button. | Segments spring in from the edges (ring 1 at 0, ring 2 at beat 1); the number rises at beat 3 (1.9 s); a glint crosses the mirror at beat 4. | `power`, `blip`s, `bell` on the number |
| 2 | infrared | 8 (3.75–8.75 s) | STEP 02 · LIGHT | Webb sees from red light deep into the infrared. | A log-scale strip: a small wavelength-true rainbow, then dark. A gold band starts at 0.6, in the orange of the rainbow's red end, and runs out to 28.5. Big counter 0.6 – 28.5 microns. | Rainbow wipes in (beat 2); the band springs out from beat 4 while the counter runs. | `whoosh`, `scan` + `roll`, `blip` on 28.5 |
| 3 | mirror | 10 (8.75–15.0 s) | STEP 03 · OPTICS | 18 gold segments work as one 6.5 m mirror. | Large mirror at right with a 1.32 m dimension on one segment; below the text, two bars on one linear scale: Hubble 2.4 m, Webb 6.5 m. | 12 centre segments snap together, then the 3 + 3 wing segments unfold from their inner edge (beat 4); bars spring open at beats 7 and 8. | `blip`s, `whoosh`, `correct` on Webb's bar |
| 4 | precision | 8 (15.0–20.0 s) | STEP 04 · ALIGN | The segments are lined up to 1/10,000 of a hair. | Ladder at left: a hair's thickness cut in tenths four times (1/10 → 1/10,000), labels on background chips. Text at right (the headline slides in), small mirror below it. | Rows spring open on beats 1–4; the last tenth pops on beat 5; a glint crosses the small mirror at beat 7. | `blip` per row, `correct`, `whoosh` |
| 5 | sunshield | 10 (20.0–26.25 s) | STEP 05 · SHIELD | A 5-layer shield the size of a tennis court keeps Webb under 50 K (−223 °C). | Five isometric sheets (tennis-court lines on the top one), the Sun at top right, 21.2 × 14.2 m under the stack. | Sheets drop in on beats 1–3; from beat 5 they turn from steel grey to hot coral (top) and cold blue (bottom); the "Like SPF 1 million" pill stamps in at beat 8. | `blip`s (falling pitch), `whoosh` + `bell`, `stamp` |
| 6 | orbit | 8 (26.25–31.25 s) | STEP 06 · ORBIT | Webb sits 1.5 million km away. | Big counter 1.5 million km; a true-scale Earth–L2 line with a 6-px Earth; at beat 5 an inset "Zoomed in on Earth" shows Hubble's orbit 560 km up at the true ratio. | Webb's dot travels out on a soft spring while the counter runs (beat 1 → 3.5), then circles L2; the inset springs in at beat 5. | `whoosh` + `roll`, `bell` on arrival, `blip` |
| 7 | trip | 6 (31.25–35.0 s) | STEP 07 · TRIP | Launched Dec 25, 2021; arrived Jan 24, 2022; about 30 days. | Headlines at left, a counter that runs 0 → 30 days, a 31-cell calendar wall at right. | The marker runs to day 3 (the Moon's orbit) at beat 1 and on to day 30 from beat 2; the arrival label lands at beat 3.5. | `blip`s, `whoosh` + `roll`, `correct` |
| 8 | payoff | 8 (35.0–40.0 s) | STEP 08 · LOOK | The first galaxies, over 13.5 billion years back. | Giant counter 13.5 billion years; a timeline drawn from Today back to the first galaxies; a spiral galaxy fills the right half. | Counter and timeline run together (beat 1); "The first galaxies" slams in and the galaxy blooms at beat 4. | `whoosh` + `roll`, the only `impact` |
| 9 | close | 8 (40.0–45.0 s) | STEP 09 · EXPLORE | Explore Webb: science.nasa.gov/mission/webb/ | Headline and credit line at left, the URL plaque (the link, `endCta`) below, the lit mirror at right. | The headline slams in; the plaque slides up (beat 1); the URL types on (beats 2–3.5); the last frame holds and fades only in its final 0.5 s for the loop. | `bell`, `roll`, `correct` |

**Cuts:** a hexagonal iris (the outgoing scene keeps playing outside a growing hexagon) on cuts into scenes 2, 3, 5, 7 and 9, and a hexagonal-tile sweep on the cuts into scenes 4, 6 and 8. New text starts about 0.36 s after each cut.

## Copy draft (English / Korean)

Copy is written as natural sentences with the same meaning, not literal translations. Each scene has 1 headline and 1–3 supporting lines. Headline sizes are at least 80 px and body text at least 32 px.

| # | EN | KO |
|---|---|---|
| 1 | **James Webb Space Telescope** / Looking back over **13.5** billion years | **제임스 웹 우주망원경** / 135억 년 넘게 거슬러 올라가 봅니다 |
| 2 | **Beyond the red end of the rainbow** / Webb sees from red light deep into the infrared. / 0.6 – 28.5 microns | **무지개의 붉은 끝 너머** / 웹은 붉은 빛에서 적외선 깊은 곳까지 봅니다. / 0.6 – 28.5 마이크로미터 |
| 3 | **18 gold mirrors, working as one** / Each segment is 1.32 m across. / Hubble's mirror 2.4 m · Webb's mirror 6.5 m | **황금 거울 18장이 하나로 움직입니다** / 조각 하나의 지름은 1.32 m. / 허블의 거울 2.4 m · 웹의 거울 6.5 m |
| 4 | **Aligned to 1/10,000 of a hair** / All 18 segments, lined up as one mirror. | **머리카락 굵기의 1/10,000 정밀도로 맞춥니다** / 18개 조각 모두를 하나의 거울처럼 정렬합니다. |
| 5 | **A shield the size of a tennis court** / 5 layers, each thinner than a hair / Keeps Webb under 50 K (−223 °C · −370 °F) / Like SPF 1 million (NASA's comparison) / 21.2 × 14.2 m | **테니스장만 한 햇빛 가리개** / 머리카락보다 얇은 5겹 / 웹을 50 K 아래로 지켜 줍니다 (−223 °C) / SPF 100만 수준 (NASA의 비유) / 21.2 × 14.2 m |
| 6 | **1.5 million km from Earth** / Zoomed in on Earth: Hubble orbits just 560 km up. / Webb at L2, the second Lagrange point | **지구에서 150만 km** / 지구를 확대한 모습: 허블은 상공 560 km를 돕니다. / L2의 웹, 제2 라그랑주점 |
| 7 | **Launched Dec 25, 2021** / **Arrived Jan 24, 2022** / about 30 days · Moon's orbit · day 3 | **2021년 12월 25일 발사** / **2022년 1월 24일 도착** / 약 30일 · 달 궤도 · 3일째 |
| 8 | **The first galaxies** / over 13.5 billion years back in time · born after the Big Bang | **최초의 은하** / 135억 년 넘게 거슬러 올라갑니다 · 빅뱅 뒤에 태어난 은하들 |
| 9 | **Explore Webb** / Every figure here comes from NASA's public Webb pages. / science.nasa.gov/mission/webb/ | **웹을 더 만나보세요** / 화면 속 수치는 모두 NASA 웹 공개 페이지에서 가져왔습니다. / science.nasa.gov/mission/webb/ |

The kickers ("STEP 02 · LIGHT" … "STEP 09 · EXPLORE", numbered like the page counter; scene 1 has none) stay in Latin capitals in both languages.

## Settled decisions (from the approval)

1. **Language:** one HTML with both languages; `?lang=en` is the default, `?lang=ko` switches. A lobby playlist can use the two URLs one after the other.
2. **Temperature:** "under 50 K (−223 °C)" in both languages (English adds −370 °F). NASA's own wording is quoted in `facts.md`. The −220 °C and −225 °C figures are not used.
3. **Scene 2:** the gold band starts inside the red end of the rainbow at 0.6 and runs into the dark, so the drawing matches the numbers.
4. **The link:** shown as readable text on the plaque, and set as the clickable link (`CFG.cta.href`) for anyone opening the file in a browser.
5. **Sound:** every scene reads without audio.
6. **Left out on purpose:** the "5–10 years" mission duration, the conflicting temperature figures, and the 570 °F sunshield difference. Details are in `facts.md`.
