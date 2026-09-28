# facts.md — webb-telescope

Every fact and number that appears on screen, with its source. All sources are NASA's public Webb pages under https://science.nasa.gov/mission/webb/ (fetched 2026-09-28). Quotes are verbatim from the page.

| On screen (en / ko) | Value | Source (URL · quoted text) |
|---|---|---|
| "James Webb Space Telescope" / "제임스 웹 우주망원경" | — | https://science.nasa.gov/mission/webb/ · page title "James Webb Space Telescope" |
| "Looks back over 13.5 billion years" / "135억 년 이상 과거" | over 13.5 billion years | https://science.nasa.gov/mission/webb/about-overview/ · "With unprecedented infrared sensitivity, it will peer back in time over 13.5 billion years to see the first galaxies born after the Big Bang." (same line in Key Facts on https://science.nasa.gov/mission/webb/) |
| "…to the first galaxies born after the Big Bang" / "빅뱅 뒤 처음 태어난 은하들" | — | same as above |
| "Their light stretched into infrared on the way" / "오는 동안 늘어나 적외선이 된 빛" | — | https://science.nasa.gov/mission/webb/early-universe/ · "As ancient light from the first galaxies traveled through space, the expansion of the universe stretched ultraviolet and visible wavelengths of light to infrared light" |
| "Infrared — light beyond red that our eyes can't see" / "눈에 보이지 않는 빛" | — | https://science.nasa.gov/mission/webb/early-universe/ · "The James Webb Space Telescope detects near- and mid-infrared wavelengths, the light beyond the red end of the visible spectrum." |
| Primary mirror "6.5 m" across | 6.5 m | https://science.nasa.gov/mission/webb/webbs-mirrors/ · "Webb's primary mirror is 6.5 meters (21 feet 4 inches) across." ; https://science.nasa.gov/mission/webb/fact-sheet/ · "Diameter of Primary Mirror 6.5 m (21.3 ft) approximately" |
| "18" mirror segments, hexagonal | 18 | https://science.nasa.gov/mission/webb/webbs-mirrors/ · "Each of the primary mirror's 18 hexagonal-shaped mirror segments is 1.32 meters (4.3 feet) in diameter, flat to flat." |
| Segments "coated in gold" / "금 코팅" | — | https://science.nasa.gov/mission/webb/webbs-mirrors/ · "Each mirror segment has a very thin coating of gold applied." |
| "Hubble 2.4 m" (mirror comparison, drawn to the same scale) | 2.4 m | https://science.nasa.gov/mission/webb/webbs-mirrors/ · "If the Hubble Space Telescope's 2.4 meter mirror were scaled to be large enough for Webb…" |
| "About 6× Hubble's light-collecting area" / "빛을 모으는 면적은 허블의 약 6배" | about 6× (area) | https://science.nasa.gov/mission/webb/faqs-full/ · "Webb has a much larger primary mirror than Hubble (2.7 times larger in diameter, or about 6 times larger in area), giving it more light-gathering power." |
| "Folds to fit in the rocket" (wings fold in the title/mirror art) | — | https://science.nasa.gov/mission/webb/ · "So big it has to fold origami-style to fit in the rocket"; https://science.nasa.gov/mission/webb/webbs-mirrors/ · "Each wing holds three of its primary mirror segments." |
| "A sunshield the size of a tennis court" / "테니스장만 한 햇빛 가리개" | — | https://science.nasa.gov/mission/webb/webbs-sunshield/ · "The sunshield is roughly the size of a tennis court." |
| "5 layers" / "다섯 겹" | 5 | https://science.nasa.gov/mission/webb/ · "Webb has a 5-layer sunshield…" |
| "like sunscreen with SPF 1 million" / "SPF 100만" | SPF 1 million | https://science.nasa.gov/mission/webb/ · "…like having sun protection of SPF 1 million." |
| Hot side "85°C (185°F)" | 85 °C / 185 °F | https://science.nasa.gov/mission/webb/about-overview/ · "Temperatures on the hot side can be as high as 185F (85C)"; https://science.nasa.gov/mission/webb/fact-sheet/ · "from approximately 185F (85C) on the hot side" |
| Cold side "−233°C (−388°F)" | −233 °C / −388 °F | https://science.nasa.gov/mission/webb/about-overview/ · "while the cold side is approximately -388F ( -233C)"; fact-sheet · "to approximately -388F (-233C) on the cold side" |
| "1.5 million km from Earth" / "지구에서 150만 km" | 1.5 million km (1 million miles) | https://science.nasa.gov/mission/webb/orbit/ · "it actually orbits the Sun, 1.5 million kilometers (1 million miles) away from the Earth at what is called the second Lagrange point or L2." |
| "L2" label | — | same as above |
| "The Moon's orbit is only about a quarter of the way" (Moon ring drawn at ¼ of the Earth→L2 line) | ≈ ¼ | https://science.nasa.gov/mission/webb/orbit/ · "it took only 3 days to get as far away as the Moon's orbit, which is about a quarter of the way there." |
| "Hubble orbits 560 km above Earth" / "허블은 지구 위 560 km" | 560 km | https://science.nasa.gov/mission/webb/ · "(Hubble orbits 560 kilometers above the Earth.)" |
| "Launched Dec 25, 2021" / "2021년 12월 25일 발사" | 2021-12-25 | https://science.nasa.gov/mission/webb/ · "Launch Dec 25, 2021"; https://science.nasa.gov/mission/webb/launch/ |
| "Arrived Jan 24, 2022" / "2022년 1월 24일 도착" | 2022-01-24 | https://science.nasa.gov/mission/webb/ · "Arrival at L2 Jan 24, 2022" |
| "Built by thousands of people from 14 countries" / "14개국 수천 명" | 14 countries | https://science.nasa.gov/mission/webb/ · "Thousands of skilled scientists, engineers and technicians from 14 countries (and more than 29 U.S. states, and Washington, D.C.) contributed…" |
| "A joint mission of NASA, ESA and CSA" | — | https://science.nasa.gov/mission/webb/ · "It is a joint NASA/ESA/CSA mission." |
| End link `science.nasa.gov/mission/webb` | — | user prompt (samples/webb-telescope/PROMPT.md) |

## Decisions

- **Sunshield temperature difference:** NASA pages word it differently — fact-sheet "almost 600 degrees Fahrenheit", webbs-sunshield "approximately 570° Fahrenheit (299° Celsius)". To avoid showing a disputed delta, the screen shows only the two endpoints, which the fact sheet and the overview page state identically: 85 °C (185 °F) hot side, −233 °C (−388 °F) cold side. No difference value is printed.
- **Hubble ratio:** the FAQ says both "2.7 times" and "2.75 times" larger in diameter; the screen uses only "about 6×" for area (FAQ wording) and the two diameters 6.5 m and 2.4 m. The mirror comparison art is drawn to one scale (6.5 m vs 2.4 m); the Webb outline is the 18-hexagon shape, so the drawn area ratio is not claimed as a number.
- **Distance notation:** "1.5 million km" (NASA's own notation), not "1,500,000 km". Korean: "150만 km". The Moon ring in the orbit diagram is placed at ¼ of the Earth→L2 distance per the orbit page; the Sun is off-frame (not to scale, labelled only as a direction).
- **13.5 billion:** Korean "135억 년" (same value, Korean numeral grouping). "over" is kept in both languages ("over 13.5 billion years" / "135억 년 이상").
- **Units:** °C large with °F small beside it in both languages (NASA gives both).
- No numbers appear that are not in the table above. The piece's tempo (90 BPM) is a style choice, not a claim.
