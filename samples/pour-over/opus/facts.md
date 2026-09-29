# facts.md — V60 pour-over for beginners (café screen, EN + KO)

Every number and instruction that appears on screen, with its source. Local copies of the sources are in `./sources/`.

## Sources

| Key | Document | Where | Local copy |
|---|---|---|---|
| **SCA-2CUP** | SCAA Best Practice, *Guidelines for Brewing with a Two Cup Pour-Over Brewer*, Technical Standards Committee, rev. 2 April 2016 | http://www.scaa.org/PDF/resources/best-practices-two-cup-pour-over-brewer.pdf (archived: https://web.archive.org/web/2018/http://www.scaa.org/PDF/resources/best-practices-two-cup-pour-over-brewer.pdf) | `sources/scaa-two-cup-pour-over.pdf`, page 2 |
| **SCA-GOLD** | SCAA *Brewing Best Practices*: Golden Cup Standard | http://www.scaa.org/?page=resources&d=brewing-best-practices (archived 17 Feb 2018: https://web.archive.org/web/20180217192250/http://www.scaa.org:80/?page=resources&d=brewing-best-practices) | `sources/scaa-brewing-best-practices-20180217.html` |
| **HARIO** | HARIO *V60 Dripper* manual (VD, leaflet 2104, PDF dated 21 Oct 2021) | https://global.hario.com/product/VD_global.pdf (linked as "MANUAL" from https://global.hario.com/seihin/productgroup.php?group=VDC) | `sources/VD_global.pdf`: English "How to brew" p. 4, Korean "추출 방법" p. 7; text dump in `sources/VD_global.txt` (EN lines 112–128, KO lines 225–242) |

Note: the Specialty Coffee Association (formed when the SCAA and SCAE merged in 2017) now keeps its current brewing standards behind a member login on sca.coffee (checked 29 Sep 2026). The SCAA pages above are the association's public brewing guidance and are the ones cited.

## On-screen facts

| # | On screen (EN / KO) | Value | Source, verbatim |
|---|---|---|---|
| F1 | 22 g coffee / 커피 22 g (recipe card: "22 g · medium-fine" / "22 g · 중간보다 조금 가늘게") | 22 g | SCA-2CUP p. 2: "Coffee: 22grams set at medium-fine grind" |
| F2 | medium-fine grind / 중간보다 조금 가늘게 | medium-fine | SCA-2CUP p. 2 (same line); HARIO p. 4 EN: "Add coffee grounds (medium-fine grind)" |
| F3 | 400 g water / 물 400 g | 400 g | SCA-2CUP p. 2: "Water: 400 grams or milliliters at 200°F / 93.5°C for brewing" |
| F4 | 93 °C | 93 °C | SCA-GOLD: "water temperature, at the point of contact with coffee, is recommended to fall between 200°F ± 5° (93.0°C ± 3°)"; SCA-2CUP p. 2: "200°F / 93.5°C" |
| F5 | first pour 50 g / 처음 50 g | 50 g | SCA-2CUP p. 2, Step 3: "Start the timer and pour 50 grams of water over the coffee. Make sure to saturate all the grounds thoroughly." |
| F6 | wait 30 s (bloom) / 30초 뜸 | 30 s | SCA-2CUP p. 2, Step 4: "Allow to bloom for 30 seconds."; HARIO p. 4: "Wait for about 30 seconds." (KO p. 7: "30초 정도 기다립니다") |
| F7 | pour the rest up to 400 g / 400 g까지 | remaining 350 g | SCA-2CUP p. 2, Step 5: "Continue to slowly pour the remaining 350 grams of hot water over the coffee … keeping the brew basket halfway filled with water during the brew process." |
| F8 | "Aim for 2:30–3:00" + timeline window label "2:30–3:00" / "2:30–3:00이면 딱 좋아요" (same string in both languages) | 2:30–3:00 | SCA-2CUP p. 2: "Brewing time: Between 2:30 and 3 minutes" |
| F9 | done by 3:00 / 3분 안에 | ≤ 3:00 | HARIO p. 4: "Brewing time should be within 3 minutes." (KO p. 7: "추출 시간은 양에 상관없이 3분 이내로 합니다") |
| F10 | pour in slow spirals from the centre / 가운데부터 천천히 원을 그리며 | — | HARIO p. 4: "Pour water slowly to moisten the grounds, from the center outward, while moving in a circular pattern." and "Slowly start adding more water using the same speed and swirling motion as before" |
| F11 | keep water off the paper / 종이 필터에 닿지 않게 | — | HARIO p. 4: "making sure the water does not come into direct contact with the paper filter" (KO p. 7: "종이 필터에 물이 닿지 않게 붓고") |
| F12 | fold the filter along its seam / 필터 접기 | — | HARIO p. 4: "Fold the paper filter along the seams and place inside the dripper." |
| F13 | rinse the filter with hot water, pour that water away / 헹군 물은 버려요 | — | SCA-2CUP p. 2, Step 2: "Place filter in pour-over brew basket and set on top of decanter. Preheat by pouring hot water through. Discard this water." |
| F14 | level the grounds / 흔들어 평평하게 | — | HARIO p. 4: "shake it lightly to level" |
| F15 | "Then zero the scale." + counter pill "ZERO THE SCALE" / "저울을 0으로 맞춰요" + pill "저울 영점 맞추기" | — | SCA-2CUP p. 2, Step 3: "Add the coffee to the filter and then tare the scale." |
| F16 | "then lift the dripper off." / "물이 거의 빠지면 드리퍼를 내려요" | — | SCA-2CUP p. 2, Step 6: "When all the water has been poured over the grounds and the filter has begun to drip very slowly, remove and discard the filter." |
| F17 | for two cups / 두 잔 분량 | 2 cups | SCA-2CUP title: "Guidelines for Brewing with a Two Cup Pour-Over Brewer" |

## Decisions (notation and rounding)

- **93 °C.** SCA-GOLD gives 93.0 °C ± 3 and SCA-2CUP 93.5 °C; both come from 200 °F. That is a rounding difference, not a different value, so screen shows **93 °C** (SCA-GOLD notation). No °F on screen.
- **"g" for water.** SCA-2CUP says "400 grams or milliliters" and "1 gram = 1 milliliter". Screen uses **g** throughout, because the viewer reads it off a scale.
- **Grind in Korean.** Hario's Korean manual says "가는 굵기" (fine), but its English, Japanese (中細挽き) and SCA all say medium-fine. Korean copy follows medium-fine: **"중간보다 조금 가늘게"**.
- **Timer on screen is sped up.** The on-screen timer runs faster than real time (30 s of bloom shown in about 3.5 s). From the first pour until the step-5 cut, a "TIMER SPED UP / 타이머 빠르게 재생" tag sits under the scale, so no one brews to the film's clock.
- **Timer end state.** The film shows one example brew. Its timer stops at **2:45**, an illustrative reading inside the **2:30–3:00** window (F8). It is not a target. The instruction on screen is the window plus the headline **"Done by 3:00"** (F9), which both sources agree with. The intermediate readings are a running clock and not recipe values: 0:35 → 2:14 during the pour, and 100/200/300 g on the scale.
- **The ratio is not shown.** 22 g / 400 g = 55 g/L, which is exactly the SCA-GOLD "55 g/L ± 10%". It stays off screen: beginners follow grams, not ratios.

## Open question for the user: dose

The two sources give different doses:

- **SCA-2CUP:** 22 g coffee for 400 g water, which is 55 g/L (about 1 : 18), matching SCA-GOLD.
- **HARIO p. 4:** "10-12g is for one serving (120mL)", about 83–100 g per litre of cup (roughly 1 : 10–1 : 12). That is noticeably stronger, and Hario gives no total water amount.

**Proposed:** use SCA's complete recipe for every number (22 g · 400 g · 93 °C · 50 g bloom · 2:30–3:00), and use Hario for the technique: grind, the 30 s bloom, spirals from the centre, keeping water off the paper, and finishing within 3 min. Hario's 10–12 g per serving would not appear.
