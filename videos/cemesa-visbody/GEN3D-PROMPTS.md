# GEN3D-PROMPTS — Real-human video-gen prompt library

**For:** Hospital CEMESA · VisBody S30 promo ("Tu balanza te miente")
**Purpose:** Generate short (2–4s) AI **video** clips of real human characters that match the CEMESA brand and its target audience, to **replace or augment** the emerald wireframe avatars in frames 03 (scan build), 04 (5-data reveal) and 05 (report reaction).
**Format:** vertical 9:16, 1080×1920, silent (VO/BGM added later).
**Tools:** model-agnostic prompts (Runway Gen-3/Gen-4, Kling, Google Veo, Luma Dream Machine, Sora-style). Adaptation notes per model at the end of each scene.

> Brand truth used: `SKILL.md`, `references/brand-identity.md`, `STORYBOARD.md`, `user_script.txt`, and the actual SVG markup of `frames/03-escaneo.html`, `frames/04-cinco-datos.html`, `frames/05-twist.html`. The wireframe body is CEMESA's signature — these real-person clips are **plate footage that lives UNDER the wireframe/graphics overlay**, never a replacement for the brand's stylized-body rule on screen at all times.

---

## Model analysis

The three avatar usages, read from the SVG markup, so the prompts can recreate/replace them faithfully.

### A. Frame 03 — Scan build ("una cámara 3D te lee entero")
- **Source markup:** `viewBox 0 0 440 1120` (tall vertical). A `.platform` disc bottom-center; a `.silhouette` (head circle + trapezoid torso + arms + splayed legs) stands on it, front-facing, feet planted, arms slightly away from the body. A `.scanpath` line `M220,52 → M220,1058` draws **top→bottom** (a vertical scan sweep, ~0.9s) with a glowing `.scanbar` riding down. An 18-point cloud (`depth-scatter-assemble`, golden-angle) resolves into a standing wireframe body (head, spine, shoulder line, arms, hip ellipse, legs). A 360° `.orbitguide` ellipse (`rx 320 · ry 92`) with 3 `.marker` dots sweeps **around** the body (`orbit-3d-entry`).
- **Framing:** full body, standing, centered, feet near bottom third, head near top third. Front-on, eye-level, locked-off camera. Subject occupies the vertical center column.
- **"Camera" move:** the camera itself is essentially static; the motion is (1) a vertical light sweep down the body and (2) a horizontal 360° ring orbiting the subject. A slow subtle orbit/parallax reads as "3D capture."
- **Zones that matter:** whole silhouette; the moment is *capture / assembly*, not any single body part. Posture upright, calm, still.
- **Moment depicted:** a person steps onto the VisBody platform and holds still while a 3D scanner reads them — safe, fast, clothed. Chips read `3 MIN · 0 RADIACIÓN · SIN AGUJAS`.

### B. Frame 04 — Five-data reveal (contador 1/5 → 5/5)
- **Source markup:** `viewBox 0 0 400 1000`. A persistent, centered full-body wireframe (`#body-base`: head circle cy86, filled silhouette path, center-line, 8 horizontal `contour` bands). Five `zone` shapes light **one at a time**: `z-abdomen` (ellipse cy455 — visceral fat), `z-muscle` (arms + torso + legs paths), `z-waist` (ellipse cy548 — cintura-cadera), `z-metab` (circle cy300 — chest/core), `z-shoulder` (curve cy196 + asymmetry scribble — postura). A `1/5…5/5` counter is fixed top chrome and never leaves.
- **Framing:** identical to 03 — full body, front-on, centered, locked-off, feet-to-head fills the frame's central column. Held/steady so overlaid zone-glows and figure panels register.
- **"Camera" move:** none (static). Aliveness = subtle low-amplitude idle only. The energy is in the staccato zone highlights (~1.5s each), not camera motion. Right side of the frame is reserved for figure panels — subject should sit slightly left-of-center or dead-center with clean negative space at frame-right.
- **Zones that matter (each gets its own beat):** 1) abdomen / visceral fat · 2) muscle by segment (brazos·tronco·piernas) · 3) waist–hip proportion · 4) metabolism (core) · 5) shoulder line / posture asymmetry.
- **Moment depicted:** the same standing person being "read" zone by zone — the body is a canvas the data lights up.

### C. Frame 05 — Report reaction / twist ("mirá lo que tu balanza nunca vio")
- **Source markup:** a `.phone` mock rises center (`card-morph-anchor`, scale 0.6→1, y+132→0) holding a `.screen` with a mini front-facing wireframe report (`viewBox 0 0 200 560`: head, shoulder line, torso/waist/hip ellipses, arms, legs, an abdomen highlight circle cy250 with an alert ring). A `scanband` sweeps the report once. The phone then **slides to the left third** (`x -250`) while text assembles at right; a **gold callout** circles `GRASA VISCERAL` with a `Seguro → Zona alta` gauge.
- **Framing:** a real person **holding a phone**, looking at their 3D report — a hand-and-phone or hands-and-face composition, upper-body / medium shot, vertical. The phone screen itself stays a graphic overlay (the wireframe report is composited on top); the **plate footage is the human reaction**.
- **"Camera" move:** slow push-in or a gentle handheld settle on the face/phone; then the *composition* pivots (phone graphic slides left, text enters right) in post — the plate just needs a calm hold with the phone held up and a genuine reaction beat (surprise → empowerment).
- **Zone that matters:** the incómodo finding — visceral fat (abdomen) or posture; the human beat is the **face reacting**, not the body being scanned.
- **Moment depicted:** "pesabas normal… pero mirá lo que tu balanza nunca vio." A believable, non-shamed, slightly surprised-but-empowered reaction to seeing one's own body in data.

---

## Target-audience personas

Derived from the brand + brief: CEMESA is a private hospital in **San Pedro Sula, Honduras**; VisBody is a body-composition scan sold on a price promo (1er L500 · 2º a mitad · los dos L750 · **compartible con alguien**). The hook targets people who **trust the bathroom scale but "look fine."** All personas are **Honduran / Central American (mestizo)** — warm-to-medium and deeper skin tones, dark hair — dressed in clean, form-readable athleisure so the scan/zones make sense, in a premium-clinical setting.

| # | Persona | Age / gender | Body type | Life context / why they book |
| --- | --- | --- | --- | --- |
| **P1** | **La meseta** — health-conscious adult who plateaued | Mujer, 35–45 | Mid-range, "normal weight," soft midsection | Cuida su alimentación pero la balanza no se mueve; sospecha que "algo por dentro" no cuadra. Anchor persona for the visceral-fat message. |
| **P2** | **La pareja que comparte** — a couple splitting the promo | Pareja, 30–40, hombre + mujer | Two average, everyday bodies | "Los dos por L750, compartible" — they book together, compare reports. Drives the shareable-promo hook. |
| **P3** | **El profesional post-30** — desk professional who "looks fine" | Hombre, 32–42 | Lean-ish but skinny-fat, low muscle, hidden visceral | Se ve bien vestido, peso "sano," sedentario; el twist (grasa visceral alta pese a "normal") aterriza en él. |
| **P4** | **El del gym** — gym-goer / recreational athlete | 24–32, hombre o mujer | Athletic, visible muscle tone | Quiere datos reales: músculo por zona, proporciones, simetría — no le sirve un solo número. Sells the "5 datos" precision. |

**Casting notes (all):** real, non-idealized Honduran bodies; natural skin (visible texture, minimal retouch); relaxed, confident, dignified. Wardrobe reads as clean athleisure in **deep green, charcoal, warm off-white/champagne, heather grey** — no logos, no loud color, nothing that fights the emerald+champagne palette. Barefoot or minimal socks on the scanner.

---

## Guardrails (read before generating)

- **No shaming, no "before/after," no disgust.** Bodies are shown neutrally or with quiet curiosity/empowerment. The finding is *informative*, never a punishment.
- **Realistic, diverse bodies.** Average midsections, real skin, a range of ages and tones. No airbrushed fitness-model idealization, no extreme thinness, no exaggerated "fat = bad" framing.
- **Medical honesty.** Never render invented clinical numbers on the human plate — figures live only in the graphic overlay as dash placeholders (`–– %`, `0.––`) or unlabeled gauges, per brand rule. The plate is a body + a reaction, not a fake readout.
- **Consent & dignity.** Modest, clothed athleisure only; no nudity, no swimwear, no leering camera. Frame the whole person, not fragmented body parts, except the intentional hand-and-phone shot in Scene C.
- **Representation.** Central American / mestizo casting is the default, with skin-tone and age variety across clips; include both genders across the persona set.
- **Brand fidelity.** Deep green-black environment, emerald + champagne accents only, editorial-premium, calm. **No** neon, **no** purple-blue "AI" gradients, **no** pure black/white, no bouncy energy. Two surface tones max in the environment.
- **The wireframe stays king.** These clips sit UNDER the emerald wireframe/graphics. Keep the human lit low-key and desaturated enough that the emerald overlay reads on top; leave clean negative space where panels/counters/callouts land (frame-top for the counter, frame-right for panels, over the abdomen for callouts).
- **Determinism / usage.** Generated clips are pre-rendered assets dropped into the composition — they don't break HyperFrames' deterministic render. Keep every clip loop-safe or long enough to cover its beat with a hold.

---

## Prompt library

Every prompt is copy-pasteable. Structure per prompt: **Subject · Wardrobe · Setting · Camera/Motion · Lighting · Mood · Duration · Negative.** All are 9:16 vertical, 1080×1920. Palette anchor for every prompt: environment `#080f09` green-black, accents emerald `#1a662d`/`#2f9e57` + champagne `#c0a77e`, warm-white key.

---

### Scene A — Stepping onto the VisBody scanner (replaces/augments Frame 03)

> Goal plate: a real person stands centered on a low circular scanner platform, front-on, still, while soft light reads them. Leave headroom (top) and footroom (bottom) for chrome; keep the subject in the central column so the emerald point-cloud/orbit-ring overlay can wrap them.

#### A-P1 · La meseta (mujer 35–45)

```
A Honduran woman in her late 30s, natural mestizo skin, dark hair tied back, stands still and upright, front-facing, barefoot at the center of a low circular scanner platform in a premium-clinical room. Full-body vertical shot, feet in the lower third, head in the upper third, arms relaxed slightly away from her sides in a calm scan pose. She wears clean fitted charcoal-and-deep-green athleisure, no logos. A soft horizontal band of cool emerald light slowly passes down her body from head to feet, like a 3D body scan. Environment is a deep green-black void with one faint champagne-gold rim light. Locked-off eye-level camera, an almost imperceptible slow orbital drift for a 3D feel. Cinematic, editorial-medical, quiet, premium. 9:16 vertical.
Lighting: low-key, cool emerald key from front, warm champagne rim from behind-left, deep shadows.
Mood: calm, composed, a little curious.
Duration: 3s.
Negative: text, logos, watermark, neon, purple or blue gradients, pure white or pure black, nudity, swimwear, exaggerated muscles, retouched plastic skin, bouncy motion, camera shake, fast cuts, extra limbs, distorted hands, background clutter.
```

#### A-P3 · El profesional post-30 (hombre 32–42)

```
A Honduran man in his mid-30s, medium mestizo skin, short dark hair, stands centered and motionless on a low round scanner platform, front-on, arms slightly out from his body, barefoot, in a dark premium-clinical space. Full-body 9:16 vertical framing, head upper third, feet lower third. He wears a fitted heather-grey short-sleeve top and dark shorts, no logos, an ordinary not-athletic build. A thin sheet of emerald scan light glides slowly down his body top to bottom. Deep green-black surroundings, a single champagne-gold accent light. Static eye-level camera with a barely-there slow rotation suggesting a 360-degree capture. Editorial, calm, high-end medical.
Lighting: cool emerald front key, soft champagne back-rim, moody falloff into black-green.
Mood: neutral, patient, trusting.
Duration: 3s.
Negative: text, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, swimwear, idealized physique, plastic skin, shaky cam, fast motion, warped hands, extra fingers, clutter.
```

#### A-P4 · El del gym (24–32, atlético)

```
A young Honduran athlete, mid-20s, warm mestizo skin, athletic build, stands still and tall at the center of a circular scanner platform, front-facing, barefoot, arms held a little away from the torso. Full-body vertical 9:16, centered, feet low, head high. Fitted deep-green training top and shorts, no logos. A crisp emerald light band sweeps slowly down the body like a laser body scan; faint champagne-gold rim separates them from a deep green-black void. Locked camera, subtle slow orbital parallax for 3D depth. Sharp, premium, sports-science aesthetic, calm not hype.
Lighting: emerald key light front, champagne rim behind, controlled contrast.
Mood: focused, self-assured, still.
Duration: 3s.
Negative: text, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, oiled skin, over-flexing, plastic retouch, camera shake, jump cuts, extra limbs, malformed hands, busy background.
```

**Model adaptation (Scene A):**
- **Runway Gen-3/4:** lead with the locked-off framing + "slow orbital drift"; use a low motion-brush value so only the light band and micro-orbit move. Great for the clean hold.
- **Kling:** emphasize "static camera, subject holds still, only a light band moves top to bottom" — Kling over-animates; add "minimal motion, no walking" to stop it from making the subject step or turn.
- **Veo / Sora:** responds well to the full cinematic sentence + explicit "eye-level, 3D scan capture" — you can ask for the 360° orbit more literally ("camera slowly arcs 20° around the still subject").
- **Luma:** keep it to the still-subject + light-sweep; add a "loop" hint if you want a seamless hold under the assemble.

---

### Scene B — Standing to be read, zone by zone (replaces/augments Frame 04)

> Goal plate: the SAME standing person, front-on, locked-off, held very still, with clean negative space at **frame-right** for the data panels and **frame-top** for the `N/5` counter. This is the persistent bed the five zone-glows composite onto. Keep it near-motionless (idle breath only) for ~9s or generate a shorter clip you can freeze/loop.

#### B-P1 · La meseta (mujer 35–45) — abdomen / visceral hero

```
A Honduran woman in her late 30s, natural mestizo skin, dark hair back, stands centered and very still, front-facing, in a dark premium-clinical scan space. Full-body 9:16 vertical, positioned slightly left of center leaving clean empty space on the right side of the frame. Fitted charcoal-and-green athleisure, midsection form-readable, ordinary realistic body. She holds a calm neutral pose, only the faintest breathing motion. Deep green-black environment, subtle emerald ambient glow around her, one soft champagne rim. Absolutely static locked-off eye-level camera. Editorial, clinical-premium, patient, respectful. 9:16 vertical.
Lighting: even soft emerald key, gentle champagne rim-left, low contrast so graphics can overlay.
Mood: calm, self-aware, dignified.
Duration: 4s (holdable / loopable).
Negative: text, numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, swimwear, body-shaming framing, plastic skin, camera movement, walking, gesturing, fast motion, extra limbs, distorted hands, right-side clutter.
```

#### B-P4 · El del gym (24–32) — muscle-by-zone / proportions hero

```
A young Honduran athlete, mid-20s, warm mestizo skin, athletic but natural build, stands centered, front-on, dead still, arms relaxed at the sides, in a deep green-black clinical void. Full-body vertical 9:16, subject centered with clean negative space to the right for data panels and space above the head for a counter. Fitted deep-green training kit, no logos, real muscle definition (not oiled or exaggerated). Only micro idle motion. Soft emerald ambient light wraps the body; a single champagne rim light. Locked-off eye-level camera, no move at all. Sports-science, premium, composed.
Lighting: soft emerald key, champagne rim, controlled low-contrast for overlay legibility.
Mood: steady, precise, quietly confident.
Duration: 4s (holdable / loopable).
Negative: text, numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, over-flexing, glistening skin, plastic retouch, camera motion, walking, fast movement, extra limbs, warped hands, cluttered background.
```

#### B-P3 · El profesional post-30 (hombre 32–42) — posture / metabolism hero

```
A Honduran man in his late 30s, medium mestizo skin, short dark hair, stands centered and still, front-facing, natural desk-worker build (lean but soft), in a dark premium-clinical space. Full-body 9:16 vertical, centered with clean empty right-side space and headroom for a counter. Fitted heather-grey top and dark shorts, no logos. Neutral upright stance, faint natural asymmetry in the shoulders, only idle breathing. Deep green-black surroundings, low emerald ambient wash, soft champagne rim. Completely static eye-level locked camera. Calm, editorial, honest.
Lighting: soft emerald key, champagne back-rim, moody low contrast.
Mood: neutral, receptive, unhurried.
Duration: 4s (holdable / loopable).
Negative: text, numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, shaming pose, plastic skin, camera move, gesturing, fast motion, extra limbs, malformed hands, clutter on the right.
```

**Model adaptation (Scene B):**
- **Runway:** this is a "near-still portrait" — set motion very low; if the model insists on movement, prompt "subject stands perfectly still, breathing only." Consider generating 4s and freezing/looping to cover the full 9s reveal.
- **Kling:** explicitly forbid walking/turning ("no steps, no turn, no gesture; static full-body scan pose"). Kling holds stills poorly — a slightly longer generation with a slow zoom disabled works best.
- **Veo / Sora:** happy to render a locked-off held full-body shot; add "clean empty space on the right of the frame" so it composes for the panels.
- **Luma:** request a loop for a seamless bed under the staccato zone reveals.

---

### Scene C — Reacting to the 3D report on the phone (replaces/augments Frame 05)

> Goal plate: a real person holds a phone and reacts to their body-composition report — surprise turning to empowerment. The phone SCREEN stays a graphic overlay (the wireframe report + gold callout composite on top), so the phone can be blank/dim in the plate. The human face + hands are the footage. Medium / upper-body vertical shot. Compose so the phone sits toward the left third (matching the pivot), face slightly right.

#### C-P1 · La meseta (mujer 35–45)

```
A Honduran woman in her late 30s, natural mestizo skin, dark hair loose, holds up a smartphone in one hand and looks at its screen, in a warm premium-clinical space. Vertical 9:16 upper-body medium shot; the phone is held toward the left of the frame, her face toward the right, both in view. She wears a clean deep-green top, no logos. Her expression shifts subtly from mild surprise to quiet, empowered understanding as she studies the screen — a genuine, non-dramatic reaction. The phone screen itself reads dark/dim (graphics added later). Deep green-black background with soft champagne-gold ambient. Slow gentle push-in, natural handheld settle. Cinematic, intimate, editorial. 9:16 vertical.
Lighting: soft warm-white key on the face, faint emerald glow from the phone, champagne rim, dark green-black surroundings.
Mood: surprised then empowered, calm, real.
Duration: 4s.
Negative: text on screen, fake numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, exaggerated shock, mugging, plastic skin, violent camera shake, fast cuts, extra fingers, distorted hands, bright cluttered background.
```

#### C-P2 · La pareja que comparte (pareja 30–40)

```
A Honduran couple in their 30s, natural mestizo skin, stand close together in a premium-clinical space, both looking at one smartphone the woman holds between them, comparing their 3D body reports. Vertical 9:16 medium two-shot; phone toward the lower-left, their faces upper-right, warm connection between them. Clean everyday athleisure in deep green and warm off-white, no logos. Their expressions move from curiosity to a shared, slightly surprised smile of understanding. Phone screen dark/dim in the plate (graphics added later). Deep green-black backdrop, soft champagne-gold ambient. Slow subtle push-in, gentle handheld. Warm, editorial, relatable.
Lighting: soft warm key across both faces, faint emerald phone glow, champagne rim, dark surroundings.
Mood: shared discovery, warm, real, empowered.
Duration: 4s.
Negative: text on screen, fake numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, over-acted shock, plastic skin, shaky cam, fast motion, extra limbs, warped hands, busy background.
```

#### C-P3 · El profesional post-30 (hombre 32–42) — the twist hero

```
A Honduran man in his late 30s, medium mestizo skin, short dark hair, holds a smartphone up and studies his 3D body-composition report, in a dark premium-clinical room. Vertical 9:16 upper-body medium shot; phone held toward the left, his face toward the right. Clean fitted charcoal top, no logos, ordinary healthy-looking build. His expression turns from confident-neutral to a beat of genuine surprise, then thoughtful acceptance — the 'I looked fine but...' moment, never distressed. Phone screen dark/dim in the plate (graphics added later). Deep green-black background, soft champagne-gold ambient. Slow push-in with a natural handheld settle. Cinematic, honest, intimate.
Lighting: soft warm-white key on the face, faint emerald phone glow, champagne rim, deep green-black falloff.
Mood: quiet surprise into empowerment, believable, calm.
Duration: 4s.
Negative: text on screen, fake numbers, logos, watermark, neon, blue/purple gradients, pure white/black, nudity, exaggerated panic, mugging, plastic skin, camera shake, fast cuts, extra fingers, distorted hands, cluttered bright background.
```

**Model adaptation (Scene C):**
- **Runway:** best for the subtle facial-performance beat — describe the emotional arc explicitly ("neutral → mild surprise → empowered"); keep camera to a slow push. Use a mid motion value so the face performs but the frame stays stable.
- **Kling:** strong at expressive faces; anchor the phone position ("phone held in left of frame, screen off") and forbid it from panning away. Add "no walking, seated or standing still."
- **Veo / Sora:** handles the two-shot (C-P2) and emotional nuance well; you can specify "phone screen is off / dark" so it doesn't hallucinate a UI you'll overlay yourself.
- **Luma:** keep the motion minimal; good for a clean 4s hold on the reaction.

---

## Integration notes (how these slot back into HyperFrames)

**Aspect & files.** Export every clip 1080×1920, H.264 MP4, no audio. Drop them in `videos/cemesa-visbody/assets/video/` (create it). Name by scene+persona, e.g. `scanA-p1.mp4`, `readB-p4.mp4`, `twistC-p3.mp4`.

**Framework-owned playback (deterministic).** Videos are placed as `class="clip" muted` and the framework seeks them by frame — do not autoplay. Pattern:

```html
<!-- real-person plate under the emerald overlay -->
<video class="clip" muted playsinline
       data-start="0" data-duration="4.5" data-track-index="0"
       src="assets/video/scanA-p1.mp4"
       style="position:absolute; inset:0; width:1080px; height:1920px; object-fit:cover;"></video>
```

- `muted` is required; audio (VO/BGM) is a separate `<audio>`/track added in the mix per the project's playbook.
- Give the plate the **lowest `data-track-index`** in its frame so it renders **beneath** the ground tint, wireframe, chips, counter and panels. In frame 03 the existing overlays start at track-index 1–33 — put the plate at 0.
- Keep `data-start`/`data-duration` matched to the frame's beat (03 = 4.5s, 04 = 9s, 05 = 5.5s). For the 9s frame-04 bed, either generate a longer clip or freeze the last frame / loop a seamless 4s Luma clip.

**Keep the wireframe on top (brand rule).** The emerald wireframe/point-cloud, the `N/5` counter, the gold callout and the chips **stay as-is over the video**. The real-person clip is a *bed / augmentation*, not a swap of the brand's stylized body. Two options:
- **Augment (recommended):** dim the plate (a `#080f09` overlay at ~55–70% + `mix-blend` or a low-opacity video) so it reads as a ghosted human presence behind the emerald wireframe — brand-safe, keeps the "always wireframe" fingerprint.
- **Replace:** if a frame should show the real person clearly (e.g. the twist reaction in 05), let the plate read at full strength but keep the gold callout/gauge and counter overlaid; the wireframe report can live on the phone screen as an overlaid graphic.

**Composition hygiene.** Because the plates were prompted with reserved negative space (frame-top for the counter, frame-right for panels, over-abdomen for the callout), the existing overlay coordinates in the frame HTML should still land cleanly. Nudge panel `left/top` only if a subject's silhouette collides.

**Color match.** Grade every clip toward the CEMESA palette before import: crush toward green-black in the shadows, hold emerald in the scan light, keep one champagne-gold rim. No neon, no blue/purple. This makes the live plate sit under the emerald overlay without a palette clash.

**Validate after wiring.** Run `npm run check` (lint + validate + inspect) — the validator catches a missing `muted`, a wrong track-index, or a missing asset. Confirm the wireframe still reads on top before rendering.

---

### Quick index

| Scene | Frame | Prompts |
| --- | --- | --- |
| A · Scan build | 03-escaneo | A-P1 (meseta), A-P3 (profesional), A-P4 (gym) |
| B · 5-data reveal | 04-cinco-datos | B-P1 (abdomen), B-P4 (músculo/proporciones), B-P3 (postura/metab) |
| C · Report reaction | 05-twist | C-P1 (meseta), C-P2 (pareja), C-P3 (twist hero) |

**9 production-ready prompts across 4 personas, grouped by the 3 avatar scenes.**
