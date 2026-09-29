# facts.md — V60 pour-over (30 s, EN + KO) — revision 2

Rule for this revision: **every number on screen is printed in a source, exactly as printed.** No derived amounts, no intermediate gram targets, no arithmetic on screen. I fetched both SCAA documents myself on 2026-09-29.

## Sources

| Tag | Source | What I did |
|---|---|---|
| **SCAA-PO** | SCAA Best Practice, *Guidelines for Brewing with a Two Cup Pour-Over Brewer*, Technical Standards Committee, "Revised: April 2, 2016", 2 pages. Archived copy: https://web.archive.org/web/2018/http://www.scaa.org/PDF/resources/best-practices-two-cup-pour-over-brewer.pdf (the Wayback Machine redirects that to the 2018-03-04 capture, `web/20180304124426/…`) | Downloaded the PDF and extracted its text with `pdftotext`. Quotes below are copied from that text. |
| **SCAA-GC** | SCAA "Brewing Best Practices", Golden Cup Standard page, archived 17 Feb 2018: https://web.archive.org/web/20180217192250/http://www.scaa.org:80/?page=resources&d=brewing-best-practices | Downloaded the page and read its text. Used as a cross-check only (see "Consistency checks"). Nothing on screen comes from it alone. |
| **HARIO-WEB** | Hario, "V60 Series" page (Brewing methods → V60 basic recipes, Steps 1–6; plus the "Dripper features" text above them). https://global.hario.com/v60/v60series.html (fetched 2026-09-29) | Read the page text. Used for **technique only**. |
| **HARIO-MAN** | Hario, *V60 Dripper NEO* instruction manual (EN + JA), "How to brew Coffee" steps 1–3. https://www.hario.com/product/VDN.pdf, p. 2 | Read the PDF text. Used for **technique only**. |

**Dropped from revision 1:** SCA Standard 310-2021 (for automatic home brewers, read from a third-party host), and every derived figure that came from it (14 g, 250 g, 28 g, 100 / 175 g, 56 g/kg, 90–96 °C).

## Quotes (verbatim)

**SCAA-PO, "PARAMETERS":**
> Coffee: 22grams set at medium-fine grind
> Water: 400 grams or milliliters at 200°F / 93.5°C for brewing
> Additional water at 200°F / 93.5°C for preheating
> Filters: #2 size
> Decanter
> Gram scale (1 gram = 1 milliliter)
> Brewing time: Between 2:30 and 3 minutes

**SCAA-PO, steps (numbering is the document's own; it has two "Step 3"s):**
> Step 2 Place filter in pour-over brew basket and set on top of decanter. Preheat by pouring hot water through. Discard this water.
> Step 3 Place the brew basket with filter on a cup, and put everything on the scale. Add the coffee to the filter and then tare the scale.
> Step 3 Start the timer and pour 50 grams of water over the coffee. Make sure to saturate all the grounds thoroughly.
> Step 4 Allow to bloom for 30 seconds.
> Step 5 Continue to slowly pour the remaining 350 grams of hot water over the coffee for the next 2:30 to 3 minutes, keeping the brew basket halfway filled with water during the brew process.
> Step 6 When all the water has been poured over the grounds and the filter has begun to drip very slowly, remove and discard the filter.
> Step 7 Enjoy!

**SCAA-GC:**
> Coffee-to-Water Ratio: To achieve the Golden Cup Standard, the recommended coffee-to-water ratio is 55 g/L ± 10%.
> Coffee Preparation Temperature: To achieve the Golden Cup Standard, water temperature, at the point of contact with coffee, is recommended to fall between 200°F ± 5° (93.0°C ± 3°).

**HARIO-WEB, Steps 2, 4, 5, 6, and "Dripper features":**
> Step. 2: Set the dripper onto the server and pour hot water over the entire paper filter to warm the device and remove any odor from the paper filter. Dispose of any hot water poured into the server.
> Step. 4: Pour twice as much hot water as the amount of coffee, starting slowly from the center until the entire ground coffee is soaked, and wait for 30 seconds.
> Step. 5: Divide the pouring of hot water into 3 parts. (Amount of hot water per pour = 4 times the amount of ground coffee) Pour hot water in a spiral shape from the center, avoiding pouring directly onto the paper filter. The brewing time should be within 3 minutes, regardless of the number of cups.
> Step. 6: Brewing is complete when all the hot water poured into the dripper has fallen into the server.
> Dripper features: Pour quickly for a smooth taste, or pour slowly for a richer taste.

**HARIO-MAN, steps 1–3:** "medium-fine grind"; "Using freshly ground coffee is recommended"; "Take the boiling water off the flame, and wait for the water to settle. Pour hot water slowly to moisten the grounds from the center outward, while moving in a circular pattern. Wait for about 30 seconds."; "Brewing time should be within 3 minutes."

## Every fact on screen

Numbers come **only** from SCAA-PO and are shown exactly as printed. Hario supplies technique and wording, never an amount.

| # | Fact | On-screen string (EN / KO) | Source | Notes |
|---|---|---|---|---|
| F1 | Coffee: **22 grams**, medium-fine grind | "22 g" · "Fresh grounds, medium-fine grind." / "22 g" · "갓 간 원두, 중간보다 조금 곱게" | SCAA-PO Parameters ("22grams set at medium-fine grind"). Medium-fine also in HARIO-MAN step 1. | |
| F2 | Freshly ground coffee | "Fresh" / "갓 간 원두" | HARIO-MAN step 1 | Technique. No number. |
| F3 | Water: **400 grams** | "400 g" | SCAA-PO Parameters ("400 grams or milliliters") | Appears in the recipe card and as the final scale read-out. |
| F4 | Water temperature **93.5 °C** | "93.5 °C" | SCAA-PO Parameters ("200°F / 93.5°C for brewing") | Metric only on screen (café in Korea). One printed figure, so no range is shown. |
| F5 | Preheat the filter with hot water and **discard** that water | "Rinse the filter" / "필터를 헹궈요" | SCAA-PO Step 2 ("Preheat by pouring hot water through. Discard this water."); HARIO-WEB Step 2 (rinse also removes paper taste) | No number. |
| F6 | Add the coffee, **then tare** the scale | scale shows "22 g", then "0" after the tare press (before it lights up, and while the water is being poured, the LCD shows nothing or a rolling "." / ".." / "..." — a "measuring" mark, not a number) | SCAA-PO Step 3 | "0" is the tare, not an amount. There is no count-up: the "22 g" appears in one pop, so no unprinted grams show. |
| F7 | Take the boiling water off the heat and let it settle | "Take it off the boil, let it settle." (two lines) / "불에서 내려 잠시 기다려요" (two lines) | HARIO-MAN step 2 | Hario gives no time and no temperature, so none is shown for this. |
| F8 | Bloom: pour **50 grams** and saturate all the grounds | "50 g" · "Wet every bit" / "50 g" · "골고루 적셔요" | SCAA-PO Step 3 (second) ("pour 50 grams of water over the coffee. Make sure to saturate all the grounds thoroughly.") | Hario's own bloom is "twice the coffee" (= 44 g here). I use SCAA's printed 50 g and never show "twice". |
| F9 | Bloom for **30 seconds** | "30 s" / "30초" | SCAA-PO Step 4; HARIO-WEB Step 4; HARIO-MAN step 2 ("about 30 seconds") | All three agree. |
| F10 | Pour the **remaining 350 grams** slowly | "350 g more, from the centre outward." / "가운데에서 바깥으로, 350 g 더" | SCAA-PO Step 5 ("slowly pour the remaining 350 grams") | The only pour-scene number, and it is printed. |
| F11 | Pour in a spiral from the centre; keep water off the paper filter | "from the centre outward" · "Keep water off the paper." / "가운데에서 바깥으로" · "종이엔 닿지 않게요." | HARIO-WEB Step 5; HARIO-MAN steps 2–3 | Technique. No number. |
| F12 | Total: 50 g + 350 g = **400 g** | end of pour scene, scale/server label snaps to "400 g" | SCAA-PO Parameters ("400 grams") | 400 is printed. It is not computed on screen. |
| F13 | Brewing time **2:30–3:00** | "2:30–3:00" · label "brew time" / "2:30–3:00" · label "추출 시간" | SCAA-PO Parameters ("Between 2:30 and 3 minutes") | Shown on the recipe card. The card rows are: 22 g coffee · 400 g water · 93.5 °C temperature · 2:30–3:00 brew time (KO: 원두 · 물 · 물 온도 · 추출 시간). |
| F14 | Brewing finishes **within 3 minutes** | "Ready within 3 minutes." / "3분 안에 완성" | HARIO-WEB Step 5; HARIO-MAN step 3. Consistent with SCAA-PO's 2:30–3. | The film is a time-lapse of a ~3-minute brew. It never claims to run in real time. |
| F15 | Faster pour = smoother, slower pour = richer | "Pour slower for a richer cup." / "천천히 부으면 더 진한 맛이 나요" | HARIO-WEB, "Dripper features" | Last scene only. |
| F16 | Brewing is finished when the water has all dripped through | last drips animation, no text | HARIO-WEB Step 6; SCAA-PO Step 6 | |
| F17 | Nothing on screen names SCAA, Hario or a café, and there are no other numbers | (none) | n/a | The scene numbers "1–4", the "30-second" film length and the step dots are the film's own structure, not recipe facts. |

## Consistency checks (not shown on screen)

- 22 g in 400 g of water (the document says "1 gram = 1 milliliter", so 400 mL) is 55 g per litre. That equals the SCAA-GC recommended ratio "55 g/L ± 10%" exactly, so SCAA-PO and SCAA-GC agree.
- 93.5 °C sits inside SCAA-GC's "200°F ± 5° (93.0°C ± 3°)" band, so the two SCAA documents agree on temperature. I did not put a range on screen, because SCAA-PO prints one figure.
- SCAA-PO's 2:30–3:00 fits inside Hario's "within 3 minutes".
- A cross-check found one difference. Hario's own amounts (bloom = 2× the coffee, then 3 pours of 4× each) do not match SCAA-PO's 50 g + 350 g. Per your note, **all amounts follow SCAA-PO**. Hario is used only for technique.

## Decisions

**D1 — settled by you.** Amounts come from SCAA-PO: 22 g, 400 g, 93.5 °C, 50 g / 30 s bloom, 350 g more, 2:30–3:00. Hario supplies technique only.

**D2 — "three rounds" dropped from copy.** SCAA-PO prints one slow pour of the remaining 350 g, and Hario's "3 parts" comes with a per-pour amount that would contradict it. The spiral is drawn in three visible passes as a purely visual device. No text says "three", and no gram target is attached to any pass.

**D3 — no live gram counter.** The scale only ever shows printed values (0 after tare, 22 g, 50 g, 400 g). Numbers pop in, they do not count up, so a paused frame can never show an unprinted figure. In the pour scene the scale is hidden and the cup level rises, with "350 g more" printed beside it.

**D4 — dropped:** the "≈ 56 g/kg" honesty line and any SCA name on screen.

**D5 — units.** Metric only (g, °C). SCAA-PO prints "200°F / 93.5°C", and I use the °C figure.

**D6 — no café name.** No call-to-action, so `CFG.cta.href = ''` and the last scene draws no link object.

**D7 — terminology.** KO uses 핸드드립 for pour-over, 뜸 들이기 for bloom and 분쇄 for grind.

**D8 — scope note.** SCAA-PO is written for a two-cup pour-over brewer with #2 filters, not specifically for a Hario V60 (the Hario V60 02 is the closest size). I use its amounts as the SCAA pour-over guidance you asked for. The film never claims "the official V60 recipe" and never says how many cups it makes.

**D9 — the strings changed during the build (critique rounds 1–3).** The subline sizes and line breaks changed for phone readability, and the recipe card label "water temperature" became "temperature" (KO unchanged: 물 온도). No number changed, and no number was added. The film-structure strings that are not recipe facts: the five step dots, the "30-second" in the opening subline (the film's own length), and the rolling "." / ".." / "..." on the scale while the water is poured.

**D10 — engine chrome.** The player's poster button reads "30s · tap to play" (KO: "30s · 탭해서 재생"), generated by the engine from the film length. It is not part of the film.
