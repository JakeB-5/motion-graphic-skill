# Storyboard — V60 pour-over, 30 s (en default + ko)

**Style: warm café illustration — cream paper with soft grain, espresso-brown ink, caramel/terracotta and leaf-green accents, thick-outline flat drawings of the V60, kettle and scale, rounded type (Nunito + Noto Sans KR), `rise` entrances with a gentle `eBack` pop on objects, a coffee-wave wipe between scenes and a `soft` groove at 124 BPM — because this plays on a small café's in-store screen for complete beginners: it has to feel friendly and inviting, be readable from across the counter, and look like the café's world (paper, ceramic, coffee), not a tech console.**

Concept (one world): the café's brew bar. Every scene is the same counter — scale, glass server, V60, gooseneck kettle — and each step changes one thing on it. The scale's LCD is the recurring "instrument" (grams, then the bloom timer). HUD is minimal: a small cup mark with "V60 POUR-OVER" top-left and step dots top-right.

Length: 64 beats at 124 BPM = 31.0 s · 7 scenes · no call-to-action link (`cta.href = ''`, `endCta = null`).

| # | id | beats | HUD code | one-line message (en) | visual | key motion | sound |
|---|---|---|---|---|---|---|---|
| 1 | title | 8 | HELLO | "Pour-over coffee, step by step" — a beginner's guide to the V60 | Brew bar right of centre (scale, server, V60 with drips), steam curls; kicker top-left, title bottom-left (left-centre empty for the poster's play button) | Objects pop up one by one (eBack), drips fall, title rises | bell, soft blips per object, riser into cut |
| 2 | measure | 10 | STEP 1 | "15 g coffee · 250 g water" — ground medium-fine; detail: SCA reference 55 g per litre | Two cards: beans icon + "15 g", droplet icon + "250 g" | Counters roll up 0→15, 0→250 on consecutive beats; cards pop | roll + stamp per number |
| 3 | heat | 8 | STEP 2 | "Heat water to 92–96 °C" — just off the boil; detail: inside the SCA's 90–96 °C | Gooseneck kettle with steam + arc gauge with the 92–96 band | Gauge fills, needle settles in the band (eO) | blip rise, correct on landing |
| 4 | rinse | 8 | STEP 3 | "Rinse the paper filter" — warms everything, removes the paper taste; pour that water away | Kettle pours into the empty filter; paper darkens; server fills then empties with a "pour away" arrow | Stream grows, drips, level rises then drains | scan (water), whoosh on discard |
| 5 | bloom | 10 | STEP 4 | "Wet the grounds, wait 30 s" — the coffee puffs up: that's the bloom | Bed of grounds in the V60; short pour; dome swells with bubbles; ring timer 0→30 s | Dome breathes on the beat, ring fills, bubbles | tick per beat, correct at 30 s |
| 6 | pour | 10 | STEP 5 | "Pour the rest in slow circles" — stop when the scale reads 250 g | Kettle pours; stream end orbits the bed in circles; server fills; LCD counts to 250 g | Circular orbit of the stream, spiral trace, rising level | scan swell, blip at 250 g |
| 7 | enjoy | 10 | ENJOY | "Ready in about 2½ min — enjoy!" | Cup with steam and a full ring "about 2½ min"; tiny source credit | Cup pops, steam rises, ring completes, title rises | chord + bell (+ one soft impact) |

Copy (ko, natural rather than literal): 1 "핸드드립 커피, 차근차근" · 2 "원두 15 g · 물 250 g" · 3 "물 온도는 92–96 °C" · 4 "종이 필터를 먼저 적셔요" · 5 "원두를 적시고 30초 기다려요" · 6 "나머지 물은 천천히 원을 그리며" · 7 "약 2분 30초면 완성!"

Status: approved (unattended run — defaults applied).
