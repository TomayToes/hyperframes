# CEMESA — motion grammar + signature frame patterns

The look is only half the brand; the **motion and the frame patterns** are the other half. All of it
is HyperFrames-native: one paused GSAP timeline per frame, seeked frame-by-frame, deterministic.

## Motion grammar (the house rules)

1. **Smooth over bouncy.** Long-tail `power3` settles (or `expo.out` on a fast arrival). **Never**
   `back/bounce/elastic` as a default — bouncy is the #1 tell of an amateur render.
2. **Reveal on the beat, never front-load.** At `t=0` only the first element enters; each further
   piece reveals on its cue, spread across the back ~50% of the shot. A frame that dumps everything at
   `t=0` then freezes reads as a slideshow.
3. **Held reads beat bad motion.** Once content resolves, hold it still. The only sanctioned aliveness
   during a hold is a **subtle low-amplitude jitter** (`sine-wave-loop`, finite) and live SVG internals
   (a scan line). No lazy breathing, no back-half pan/push.
4. **Velocity-matched internal cuts.** Within a frame (a counter flip, a panel swap), cut at peak
   velocity with matched direction/speed + a blur nudge — not a hard slideshow cut.

### Seek-safety (hard rules — the render is a seeked paused timeline)

- Entrances use `gsap.fromTo` with an explicit from-state.
- **Elements that reveal later must not ghost.** `fromTo` has `immediateRender:true` by default, so it
  paints its from-state at build — an element whose from-opacity is `> 0` (e.g. a `0.15` "incoming"
  cut) shows that value when you seek before its cue. Fix: put `immediateRender:false` in the to-vars
  of any reveal that isn't at `t=0`, **and** give the element a base `opacity:0` (a `.hidden0{opacity:0}`
  class). This was the exact bug that ghosted the 5-data panels — don't repeat it.
- No `repeat`/`yoyo`/infinite; no `Math.random`/`Date.now`; no CSS `transition`/`@keyframes` for motion.
- No exit tween except on the **final** frame — the between-frame transition IS the exit.
- Don't put a CSS `transform` on an element you then GSAP-animate a transform prop on (center via
  `margin`/`inset` or fold into the tween).

### Timing template (the proven ~32s vertical arc)

Six beats, hook → CTA. Reuse the shape, swap the content (see `example/STORYBOARD.cemesa-visbody.md`):

| # | Beat | ~dur | Blueprint | Signature |
| --- | --- | --- | --- | --- |
| 1 | Hook | 3.5s | kinetic-type-beats | big serif line, payoff word in gold + marker underline |
| 2 | Problem | 5.5s | kinetic-type-beats | 3 questions flash one-at-a-time → promise line |
| 3 | Mechanism | 4.5s | logo-assemble-lockup | emerald wireframe **avatar assembles** + 360° ring + mono chips |
| 4 | Data reveal | 9s | dataviz-countup | **persistent `N/5` counter** + zone-by-zone lit avatar (staccato ~1.5s each) |
| 5 | Twist | 5.5s | video-text-pivot | phone report slides aside → **gold hand-drawn callout** on the finding |
| 6 | CTA + promo | 4s | logo-assemble-lockup | **CEMESA wordmark lockup** + gold promo strip + WhatsApp |

Transitions: `crossfade` within a world, `zoom-through` at section boundaries. Frame 4 is the one busy
section — every other frame lands and holds.

---

## Signature frame patterns (drop-in)

All snippets assume the CEMESA vars are in scope. Put this in each frame's `#root` style:
```css
#root{ --canvas:#080f09; --green:#1a662d; --lit:#2f9e57; --gold:#c0a77e; --gold-deep:#9c7f56; --ink:#f7f3e9; --muted:#b1aa9c; }
.hidden0{ opacity:0; }             /* base-hidden: pair with immediateRender:false reveals */
```
Reference implementations (full, working) live in the built project:
`videos/cemesa-visbody/compositions/frames/*.html` — read them when a snippet needs context.

### 1 · Emerald wireframe body avatar (the brand's hero object)

Never a photo. A front-facing figure drawn from SVG strokes; zones are addressable so they can light up.
Base stroke `--green`, lit zones switch to `--lit` with a glow. Compact version (scale via viewBox):

```html
<svg class="avatar" viewBox="0 0 200 560" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#1a662d" stroke-width="2.4" stroke-linecap="round">
    <circle cx="100" cy="54" r="30"/>                 <!-- head -->
    <line x1="100" y1="84" x2="100" y2="100"/>
    <line x1="58" y1="112" x2="142" y2="112"/>        <!-- shoulder line (posture zone) -->
    <ellipse cx="100" cy="165" rx="48" ry="30"/>      <!-- chest -->
    <ellipse cx="100" cy="250" rx="36" ry="24"/>      <!-- abdomen (visceral zone) -->
    <ellipse cx="100" cy="308" rx="44" ry="26"/>      <!-- waist-hip (proportions zone) -->
    <path d="M60,116 Q46,210 66,306"/><path d="M140,116 Q154,210 134,306"/>  <!-- arms -->
    <path d="M84,312 L74,522"/><path d="M116,312 L126,522"/>                  <!-- legs -->
    <path d="M74,522 L56,530"/><path d="M126,522 L144,530"/>                  <!-- feet -->
  </g>
</svg>
```
Assemble it (Beat 3) with `depth-scatter-assemble` (points scatter → reassemble) + an `orbit-3d-entry`
ring sweeping 360°. Light a zone: `tl.fromTo("#z-abdomen",{opacity:0},{opacity:.92,duration:.55,ease:"power2.out"}, t)`
plus a soft `--lit` radial glow behind it, and dim the rest with a `depth-of-field-blur`.

### 2 · Persistent `N/5` counter with velocity-matched flips (the retention anchor)

Chrome that never leaves screen during an enumerated reveal. All digits base-hidden; only one visible.

```html
<div id="counter" class="clip" data-start="0" data-duration="9" data-track-index="10">
  <div id="cn1" class="cnum hidden0">1<span class="den">/5</span></div>
  <div id="cn2" class="cnum hidden0">2<span class="den">/5</span></div>  <!-- …cn3 cn4 cn5 -->
</div>
```
```js
// velocity-matched zoom-through flip; --b is a blur() var on .cnum
function counterFlip(outSel, inSel, t){
  tl.to(outSel, { scale:1.18, "--b":"10px", duration:.2, ease:"power3.in" }, t);
  tl.to(outSel, { opacity:0, duration:.2, ease:"none" }, t);
  tl.fromTo(inSel, { opacity:.15, scale:.76, "--b":"10px" },
    { opacity:1, scale:1, "--b":"0px", duration:.5, ease:"expo.out", immediateRender:false }, t); // ← no ghost
}
```
Gold numerator, muted denominator, over a 2px gold rule, top of frame. The counter is the reason the
viewer stays for all five — never let it disappear mid-section.

### 3 · Gold hand-drawn callout + gauge (the twist emphasis)

A gold circle "drawn" around a finding on the avatar/report, a dotted leader line, a label, and a
placeholder gauge (no invented number).

```html
<div class="callout clip" data-start="0" data-duration="…" data-track-index="…">
  <div class="glow"></div>                                  <!-- radial gold bloom -->
  <div class="ring"></div>                                  <!-- gold circle, drawn via scale/opacity -->
  <div class="callout-label" data-layout-allow-occlusion>
    <span class="cl cl-eyebrow">Hallazgo — zona abdominal</span>
    <span class="cl cl-title">GRASA VISCERAL</span>
  </div>
  <div class="gauge" data-layout-allow-occlusion>
    <div class="gtrack"><div class="gfill"></div><div class="gneedle"></div></div>
    <div class="gtags"><span class="safe">Seguro</span><span class="alert">Zona alta</span></div>
  </div>
</div>
```
The circle uses `css-marker-patterns` (a slightly irregular hand-drawn ring), the leader is a dashed
SVG path, the glow is `ambient-glow-bloom`. `data-layout-allow-occlusion` silences the inspector's
false occlusion flag when a label sits spatially over a device mock but is visually clear.

### 4 · CEMESA wordmark lockup (the CTA)

```html
<div class="wordmark clip" …>CEMESA</div>                    <!-- Cormorant 600, letter-spaced -->
<svg class="hairline clip" …><line x1="20" y1="6" x2="540" y2="6"/></svg>  <!-- gold rule, self-draws -->
<div class="p-label clip" …>VISBODY S30 · DIRECTORIO MÉDICO</div>          <!-- JetBrains Mono caps -->
<div class="loc-line clip" …>HOSPITAL CEMESA · SAN PEDRO SULA</div>
<div class="promo clip" …>1er estudio L500 · 2º a mitad · los dos L750 · compartibles</div>  <!-- gold pill -->
<div class="cta-line clip" …>AGENDÁ TU ESCANEO — WhatsApp 9458-2959 · link en bio</div>
```
Assemble: letters cascade in (`power3`, 0.08s stagger), the hairline draws via `stroke-dashoffset`,
the mono label reveals per-word, the **gold promo pill** pops via `spring-pop-entrance` (no overshoot),
the CTA line lands last, a soft gold glow blooms behind the wordmark, then hold to the end. **≤ 4s** —
the promo is one gold strip, not a paragraph.

### 5 · Mono chrome — topbar + chips

Every frame carries a mono **topbar**: `VISBODY S30 · HOSPITAL CEMESA` left, a small mark right.
Fact chips (`3 MIN` · `0 RADIACIÓN` · `SIN AGUJAS`) are bordered mono pills that radiate out via
`center-outward-expansion`. Keep chips compact (font ~26px, padding ~11/20, tracking ~0.12em) and
space their centers ≥ ~335px apart so the wide one ("0 RADIACIÓN") doesn't collide with its neighbor.

## Caption band / keep-out

Even on silent builds, keep essential content in the **top ~83%** (above `y ≈ 1600` on a 1920-tall
frame) for cross-frame consistency.
