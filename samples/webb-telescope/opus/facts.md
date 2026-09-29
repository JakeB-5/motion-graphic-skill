# facts.md — James Webb Space Telescope explainer

Every fact and number that appears on screen, with its source (F1–F24). All sources are NASA's public Webb pages under https://science.nasa.gov/mission/webb/, fetched 2026-09-29. A plain-text snapshot of each page is in `./sources/`, and the `Lnn` references point into those snapshots.

If a number isn't listed here, it doesn't go on screen.

## On-screen facts

| # | Fact as shown (EN / KO) | Scene | Source (page · snapshot line · quote) |
|---|---|---|---|
| F1 | "the largest telescope ever placed in space" / "우주에 올린 가장 큰 망원경" | open | about-overview · `sources/about-overview.txt` L24 · "Webb is the largest telescope ever placed in space." — https://science.nasa.gov/mission/webb/about-overview/ |
| F2 | Moonlight is **1.3 seconds** old when it reaches us / 달빛은 **1.3초** 전에 출발한 빛 | oldlight | early-universe · `sources/early-universe.txt` L85 · "Between the Earth and the Moon, light takes 1.3 seconds, which means that we see the Moon as it was 1.3 seconds ago." — https://science.nasa.gov/mission/webb/early-universe/ |
| F3 | Webb sees light that left **over 13.5 billion years** ago, from the first galaxies after the Big Bang / **135억 년** 넘게 날아온 빛 | reach | Webb home page · `sources/webb-home.txt` L27 · "peer back in time over 13.5 billion years to see the first galaxies born after the Big Bang" — https://science.nasa.gov/mission/webb/ (same wording: fact-sheet L16, about-overview L14/L23) |
| F4 | The universe is about **13.8 billion years** old (the length of the timeline bar) / 우주 나이 약 **138억 년** | reach, seen | early-universe · L79 · "the universe is approximately 13.8 billion years old" (also faqs-full L278) |
| F5 | **18** gold-coated mirror segments working as one mirror / 금빛 거울 **18**장 | mirror | webbs-mirrors · `sources/webbs-mirrors.txt` L18, L24, L26 · "the iconic 18 segment primary mirror"; "Each mirror segment has a very thin coating of gold applied"; "aligned to a single focal point to become a single unit" — https://science.nasa.gov/mission/webb/webbs-mirrors/ |
| F6 | Primary mirror **6.5 m** across / 지름 **6.5 m** | mirror | webbs-mirrors · L19 · "Webb's primary mirror is 6.5 meters (21 feet 4 inches) across." (fact-sheet L27: "6.5 m (21.3 ft) approximately") |
| F7 | Hubble's mirror **2.4 m** (drawn to the same scale as Webb's) / 허블 **2.4 m** | mirror | webbs-mirrors · L51 · "If the Hubble Space Telescope's 2.4 meter mirror were scaled…" |
| F8 | **About 6×** Hubble's light-collecting area / 빛 모으는 면적 허블의 **약 6배** | mirror | faqs-full · `sources/faqs-full.txt` L98 · "2.7 times larger in diameter, or about 6 times larger in area, giving it more light-gathering power"; L179 repeats "about 6 times larger in area" — https://science.nasa.gov/mission/webb/faqs-full/ |
| F9 | Light from the first galaxies arrives stretched into **infrared** — light we feel as heat / 적외선, 즉 열로 도착 | cold | early-universe · L88 · "the expansion of the universe stretched ultraviolet and visible wavelengths of light to infrared light"; orbit · `sources/orbit.txt` L40 · "Webb primarily observes infrared light, which can sometimes be felt as heat." |
| F10 | Sunshield **5 layers**, about the size of a **tennis court**, each layer thinner than a human hair / **5겹**, **테니스장** 크기 | cold | webbs-sunshield · `sources/webbs-sunshield.txt` L23–24 · "roughly the size of a tennis court"; "5 membrane layers, each thinner than a human hair" — https://science.nasa.gov/mission/webb/webbs-sunshield/ |
| F11 | Hot side **85 °C** (185 °F) · cold side **−233 °C** (−388 °F) | cold | webbs-sunshield · L55 · "Hot side … (185°F / 85°C) and the deep space facing cold side (-388°F / -233°C)"; same values in about-overview L38 and fact-sheet L103 |
| F12 | Stamp **SPF / 1 million** / **SPF / 100만** | cold | Webb home page · L25 · "like having sun protection of SPF 1 million" (orbit L42: "the equivalent of SPF one million sunscreen") |
| F13 | "It folded to fit inside the rocket" / "로켓에 싣기 위해 접었습니다" (kicker: ORIGAMI / 종이접기) | fold | Webb home page key facts · "So big it has to fold origami-style to fit in the rocket and will unfold like a 'Transformer' in space." (about-overview L8, L30); deployment L2 · "far too large to fit into any available rocket so it was designed to fold into a compact launch configuration" |
| F14 | Unfolded in space over **two weeks** / **2주**에 걸쳐 펼침 | fold | deployment · `sources/deployment.txt` L2 · "In the two weeks after launch, the entire observatory underwent a highly choreographed transformation" — https://science.nasa.gov/mission/webb/deployment/ |
| F15 | Label: **50+** deployment steps · **178** release mechanisms (decorative mono label) | fold | deployment · L14 · "over 50 major deployments with 178 release mechanisms that all had to work properly" |
| F16 | Orbits the Sun **1.5 million km** from Earth (1 million miles), at **L2** / 지구에서 **150만 km**. The distance bracket on the map uses the same string as the headline | orbit | Webb home page · L23 · "Webb orbits the Sun 1.5 million kilometers from the Earth"; orbit L4 · "1.5 million kilometers (1 million miles) away from the Earth at … L2" — https://science.nasa.gov/mission/webb/orbit/ |
| F17 | The Moon's orbit is **about a quarter** of the way there / 달 궤도는 **약 4분의 1** 지점 | orbit | orbit · L7 · "it took only 3 days to get as far away as the Moon's orbit, which is about a quarter of the way there" |
| F18 | Launch **Dec 25, 2021** → arrival at L2 **Jan 24, 2022** / 2021년 12월 25일 발사 → 2022년 1월 24일 도착 | orbit | Webb home page · L12–15 · "Launch Dec 25, 2021 · Arrival at L2 Jan 24, 2022" |
| F19 | **July 2022**: first images — the First Deep Field shows **thousands of galaxies** / 2022년 7월 첫 사진, 은하 **수천 개** | seen | webbs-first-images · `sources/webbs-first-images.txt` L2, L4, L13 · "Released July 2022"; "Webb's First Deep Field is galaxy cluster SMACS 0723, and it is teeming with thousands of galaxies" — https://science.nasa.gov/mission/webb/webbs-first-images/ |
| F20 | Farthest confirmed galaxy: "About **280 million years** after the Big Bang" / "빅뱅 후 약 **2억 8천만 년**"; the marker on the timeline is "Webb · MoM-z14" (the number is written once), and the detail line is "Seen by Webb · confirmed 2025" | seen | early-universe · L22–26 · "June of 2025, when MoM-z14 was confirmed … placing the galaxy as existing about 280 million years after the big bang" |
| F21 | Companion marker: Hubble has seen back to about **500 million years** after the Big Bang / 허블 약 **5억 년** | seen | early-universe · L79 · "The Hubble Space Telescope has seen back to about 500 million years after the big bang" |
| F22 | Partners **NASA · ESA · CSA**; built by **thousands** of people from **14 countries** / **14개국** | close | about-overview · L15–17 · "including NASA, the European Space Agency (ESA), and the Canadian Space Agency (CSA)"; "Thousands of scientists, engineers and technicians from 14 countries, 29 U.S. states, and Washington, D.C. contributed" |
| F23 | Link **science.nasa.gov/mission/webb** | close | brief (https://science.nasa.gov/mission/webb/) |
| F24 | Zoomed inset of the timeline ends at **1 billion years** after the Big Bang / **10억 년** (scale label; the markers F20/F21 sit on it) | seen | early-universe · L3 · "'Cosmic Dawn,' a period from approximately 50 million years to one billion years after the big bang" |

## Notation decisions (rounding and phrasing, not conflicts)

- **13.5 billion years (F3):** the home page says "over 13.5 billion years". The FAQ (L278) and early-universe (L86) say "about/nearly 13.6 billion years" for the light-travel time of the first galaxies. These are two phrasings of the same claim, so the home page wording, "over 13.5 billion", is used and "over" stays in the copy. On the timeline bar, the look-back span is drawn at exactly 13.5 of 13.8.
- **Temperatures (F11):** °C in both languages; the English version adds °F on the detail line, as NASA does. The hot-to-cold *difference* is **not** shown (see below).
- **Distances (F16):** EN "1.5 million km" with "(1 million miles)" as a small detail; KO "150만 km".
- **Korean numerals:** 13.5 billion → 135억 · 13.8 billion → 138억 · 1.5 million → 150만 · 280 million → 2억 8천만 · 500 million → 5억 · 1 million → 100만.
- **Dates:** EN in NASA's notation "Dec 25, 2021"; KO "2021년 12월 25일".
- **Mirror comparison (F6–F8):** the drawing uses the exact diameters (6.5 m and 2.4 m) on one scale, with no truncated axes. The area label uses NASA's rounded "about 6×". Neither the diameter ratio (2.7×, FAQ L98; 2.75×, FAQ L179) nor the pure circle-area ratio is shown.
- **Record galaxy (F20):** this is the record as stated on NASA's page at fetch time (June 2025 confirmation). The copy says "farthest confirmed", and the detail line reads "MoM-z14 · confirmed 2025". The record galaxy is **not** placed inside the First Deep Field image (it isn't in that field). It appears only on the timeline.

## Values where NASA's pages disagree, so they are kept off screen

We aren't choosing between these values because none of them is shown.

| Topic | Values found | Where |
|---|---|---|
| Hot–cold temperature difference | "approximately 570 °F (299 °C)" vs "almost 600 °F" | webbs-sunshield L18–22 vs fact-sheet L103 |
| Sunshield height | 4.8 m vs 4.5 m | fact-sheet L103 vs https://science.nasa.gov/mission/webb/innovations/ headline |
| Journey to L2 | "29-day" vs "roughly 30 days" | launch L54 vs orbit L7 (we show dates instead) |
| Hubble's altitude | 560 km vs ~600 km | webb-home L23 vs faqs-full L151 |
| Observatory mass | ~6,200 kg (incl. adaptor) vs ~6,500 kg | fact-sheet L25 vs faqs-full L179 |
| Rocket fairing diameter | 5.4 m vs 4.57 m usable | deployment L12 vs launch L39 |
| "100 times more powerful than Hubble" | undefined metric | about-overview L25 (not used) |

## Imagery (pending approval, see storyboard)

- Webb's First Deep Field (SMACS 0723), credit **NASA, ESA, CSA, STScI**. It would be embedded as a data-URI image in the single HTML file, with the credit on screen. Source: https://science.nasa.gov/mission/webb/webbs-first-images/. Everything else (mirror, sunshield, orbit, timeline) is drawn in code.
