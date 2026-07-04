---
format: 1080x1920
message: "Tu balanza te da un número. El VisBody S30 te da los 5 datos que sí importan."
arc: Hook → Problema → Mecanismo/Producto → Reveal de datos → Twist → CTA
audience: Adultos de San Pedro Sula preocupados por su salud/peso que confían en la balanza
music: none (silent build — VO/BGM se añaden después)
language: es
---

## Video direction

Silent / text-forward build: there is no VO audio, so the anti-PowerPoint reveal model paces to each **on-screen text cue and the reading rhythm** — reveal each line/figure on its own beat, never dump the canvas at t=0.

- **Palette (from frame.md, by role):** default ground `ink #080f09` (deep green-black); `green #1a662d` primary brand + `green-lite #2f9e57` for lit scan zones / glow; `pink/pink-deep #c0a77e/#9c7f56` = **champagne gold** for figures, callouts, the twist highlight, the promo strip; `cream #f7f3e9` for display/body ink; `muted #b1aa9c` secondary. **Two surface tones max per frame.**
- **Type by role:** Cormorant Garamond (display, weight 500, negative-tracked) for headlines + the CEMESA wordmark; Karla for body/labels copy; JetBrains Mono for chrome — the persistent topbar label, the `N/5` counter, units, chips.
- **Motion grammar:** long-tail `power3` settles, **smooth over bouncy** (no `back/bounce/elastic` default); one continuous-film feel. Reveals staggered on their text cue across the back ~50%; internal seams (counter flips) are **velocity-matched cuts** (`cut-catalog.md`), never slideshow cuts.
- **Held / breather frames:** F1 lands the payoff then holds; F3 holds on the assembled avatar; F5 is the climax breather (callout lands, then still). F4 is the one busy staccato section — still never front-loaded (each datum on its cue, ~1.5s apart, counter persistent). Aliveness during any hold = **subtle low-amplitude jitter only** (`sine-wave-loop`), plus live scan-line internals; no lazy breathing, no back-half pan/push.
- **Chrome spine:** mono topbar on every frame; the `N/5` counter is persistent chrome through F4 and never leaves screen.
- **Negative list:** no bouncy/overshoot as default; no lazy breathing; no back-half drift/pan; no infinite/`repeat`/`yoyo` (finite jitter only); no `Math.random`/`Date.now`; no photoreal bodies or stock imagery (the avatar is a stylized emerald wireframe/point-cloud); no browser chrome/real cursors except the phone mock; no purple-blue "AI" gradients. Deterministic render only.

## Frame 1 — Hook · "Tu balanza te miente"

- scene: Sobre canvas verde-negro, una balanza de baño con un número frío encendido; el titular gigante TU BALANZA TE MIENTE golpea en el centro.
- voiceover: "Tu balanza te está mintiendo."
- duration: 3.5s
- poster: 2.5s
- transition_in: cut
- status: animated
- type: hook
- persuasion: Pain validation + provocación (negación de una creencia)
- beat: skepticism → intriga
- blueprint: kinetic-type-beats — el titular ES el movimiento; "MIENTE" aterriza con spring-pop
- src: compositions/frames/01-hook.html
- asset_candidates:

Texto en pantalla (mudo): **TU BALANZA TE MIENTE**, con una pesa estilizada mostrando un número (p. ej. "68.4") en verde emerald. Arriba, chrome mono: VISBODY S30 · HOSPITAL CEMESA. Funciona sin sonido: el titular + la pesa lo dicen todo en medio segundo.
narrativeRole: Abrir en frío con una acusación que rompe una certeza cotidiana; crea tensión inmediata.
keyMessage: El número de la balanza no es la verdad.

- blueprint: kinetic-type-beats (Adapt)
- focal: — (tipografía + pesa estilizada, inventada; sin assets capturados)
- roles: —

Adapt: se conserva el "la palabra ES el movimiento" con payoff en spring-pop; se añade la pesa con readout como ancla visual del gancho.
Scene 1 (0.0–0.9s): ground ink; una pesa de baño estilizada abajo-centro, su readout cuenta y se congela en un número frío ("68.4") en dígitos green-lite sobre el vidrio — value-scaled counter (`counting-dynamic-scale`); un glow tenue florece bajo la pesa (`ambient-glow-bloom`). Chrome mono "VISBODY S30 · HOSPITAL CEMESA" aparece en el topbar. Centered, ~45%, layered-depth. Nada más entra aún.
Scene 2 (0.9–2.2s): el titular **TU BALANZA TE** entra por líneas en beat-slam percusivo sobre settle largo `power3` (`kinetic-beat-slam`), Cormorant display cream, upper-center.
Scene 3 (2.2–3.5s): la palabra payoff **MIENTE** aterriza última en gold, una sola entrada spring-pop suave sin overshoot (`spring-pop-entrance`); un subrayado marker barre bajo ella (`css-marker-patterns`). Hold quieto — jitter sutil solo (`sine-wave-loop`, baja amplitud).

## Frame 2 — Problema · "Un número no dice qué pasa por dentro"

- scene: El número de la pesa persiste un instante y se "vacía"; a su alrededor caen preguntas en staccato — ¿GRASA? ¿MÚSCULO? ¿AGUA? — sin respuesta.
- voiceover: "Te da un número. Pero no te dice qué es grasa, qué es músculo, ni qué pasa por dentro. En 3 minutos te muestro los 5 datos que sí importan."
- duration: 7s
- poster: 3s
- transition_in: crossfade
- status: animated
- type: pain_point
- persuasion: Pain agitation + contrato con el viewer (promesa de payoff)
- beat: frustración → curiosidad
- blueprint: kinetic-type-beats — 3 preguntas que aterrizan solas, luego la promesa "los 5 que sí importan"
- src: compositions/frames/02-problema.html
- asset_candidates:

Texto en pantalla (mudo): un número "68.4 kg" que se desdibuja; flashes ¿GRASA? · ¿MÚSCULO? · ¿AGUA? en oro champagne; cierra con **LOS 5 DATOS QUE SÍ IMPORTAN** y una placa mono "3 MIN".
narrativeRole: Nombrar el vacío (un número no es información) y firmar el contrato de retención: te voy a mostrar 5 cosas.
keyMessage: La balanza esconde grasa, músculo y lo de adentro.

- blueprint: kinetic-type-beats (Reproduce)
- focal: — (tipografía, inventada)
- roles: —

Scene 1 (0.0–1.2s): el número "68.4 kg" heredado sostiene centro y se dessatura/desenfoca hacia la irrelevancia (`depth-of-field-blur`) — "un número y nada más". Centered ~40%.
Scene 2 (1.2–3.2s): tres preguntas **¿GRASA?** · **¿MÚSCULO?** · **¿AGUA?** entran una por una en flash hard-cut, cada una sola en su beat (`discrete-text-sequence`), en gold, apiladas al centro. Ninguna se responde.
Scene 3 (3.2–5.5s): las preguntas se limpian; **LOS 5 DATOS QUE SÍ IMPORTAN** se ensambla por-palabra (`dynamic-content-sequencing`) en cream/emerald; un chip mono **3 MIN** pop debajo. Hold.

## Frame 3 — Producto/Mecanismo · "Una cámara 3D te lee entero"

- scene: Una silueta se para en la plataforma VisBody; un barrido de escaneo 360° construye un avatar 3D de puntos/wireframe verde. Placa: 3 MIN · 0 RADIACIÓN · SIN AGUJAS.
- voiceover: "Te subís a la plataforma y una cámara 3D te lee el cuerpo entero en 360°. Sin radiación, sin agujas."
- duration: 6s
- poster: 3s
- transition_in: zoom-through
- status: animated
- type: product_intro
- persuasion: Show-don't-tell + reversión de objeción (0 radiación / 0 agujas)
- beat: intriga → confianza
- blueprint: logo-assemble-lockup — el avatar 3D se ensambla de partes con un barrido de escaneo (adaptado a un body-scan)
- src: compositions/frames/03-escaneo.html
- asset_candidates:

Texto en pantalla (mudo): **ESCÁNER 3D · 360°** mientras el avatar se arma; chips mono **3 MIN · 0 RADIACIÓN · SIN AGUJAS** en verde/oro. El avatar queda listo, en reposo, para el reveal siguiente.
narrativeRole: Cambio de sección: del problema al aparato. Presenta el VisBody como el mecanismo, seguro y rápido.
keyMessage: Un escaneo 3D de 3 minutos, sin radiación, te lee entero.

- blueprint: logo-assemble-lockup (Adapt)
- focal: — (avatar 3D inventado; sin assets capturados)
- roles: —

Adapt: se conserva la firma "el mark se construye de partes", pero el "lockup" es el avatar 3D del cuerpo que se ensambla; termina en reposo, no en un logo.
Scene 1 (0.0–1.2s): ground ink, un disco de plataforma tenue abajo-centro; una silueta simple se para en él; una línea de escaneo green-lite barre en vertical (`svg-path-draw`). Centered, layered-depth.
Scene 2 (1.2–3.0s): el avatar se ensambla desde una nube de puntos/wireframe dispersa hacia un cuerpo de pie (`depth-scatter-assemble`), wireframe emerald, mientras un anillo 360° gira alrededor (`orbit-3d-entry`) — el signature assemble.
Scene 3 (3.0–4.5s): el avatar resuelve y sostiene al centro; tres chips mono **3 MIN · 0 RADIACIÓN · SIN AGUJAS** se revelan en secuencia (`center-outward-expansion`); label **ESCÁNER 3D · 360°** arriba. Hold; jitter sutil + línea de escaneo viva como única aliveness.

## Frame 4 — Reveal · "Los 5 datos" (contador 1/5 → 5/5)

- scene: El avatar 3D queda fijo al centro; un contador "1/5 … 5/5" vive arriba y NUNCA desaparece. Cada dato enciende una zona del cuerpo (glow emerald) y muestra su cifra, en cortes secos de ~1.5s.
- voiceover: "Uno: tu grasa, hasta la visceral, en 3D. Dos: tu músculo, zona por zona. Tres: tus proporciones reales. Cuatro: tu metabolismo, medible en el tiempo. Cinco: tu postura, antes de que duela."
- duration: 13.5s
- poster: 5s
- transition_in: crossfade
- status: animated
- type: feature_showcase
- persuasion: Value stacking + Rule of five (el contador fuerza a quedarse por los 5)
- beat: curiosidad → claridad (tensión de "necesito ver los 5")
- blueprint: dataviz-countup — cada zona es una cifra-héroe; secuencia interna de 5 sub-reveals sobre avatar + contador persistentes
- src: compositions/frames/04-cinco-datos.html
- asset_candidates:

Texto en pantalla (mudo), secuencia interna (cada uno ~1.5s, contador arriba persistente):
1/5 — **GRASA CORPORAL** · incl. visceral · abdomen encendido · "— %"
2/5 — **MÚSCULO** · por zona (brazos·tronco·piernas) · "— kg"
3/5 — **PROPORCIONES** · cintura–cadera · "0.— "
4/5 — **METABOLISMO** · medible en el tiempo · mini-tendencia
5/5 — **POSTURA** · línea de hombros · asimetría marcada
narrativeRole: El corazón del video — el mecanismo de retención. Enumera los 5 datos con ritmo staccato sobre un cuerpo que se ilumina.
keyMessage: Grasa (visceral), músculo por zona, proporciones, metabolismo y postura — lo que la balanza nunca mide.

- blueprint: dataviz-countup (Adapt)
- focal: — (avatar 3D + cifras, inventado)
- roles: —

Adapt: se conserva la firma "la cifra es héroe / la cámara empuja a la métrica", instanciada 5 veces sobre UN avatar persistente + contador persistente; cada dato es su propia ventana ~1.5s, jamás front-load. El contador `N/5` es chrome fijo arriba y nunca sale de pantalla.
Scene 1 (0.0–0.8s): el avatar entra desde F3 ya centrado; el chip contador **1/5** se asienta arriba en mono gold sobre una regla 2px. La lectura queda montada.
Scene 2 (0.8–2.3s): 1/5 — la zona abdomen se enciende en glow emerald sobre el avatar; **GRASA CORPORAL** (incl. visceral) + cifra "— %" cuenta hacia arriba al costado (`counting-dynamic-scale`); el resto del cuerpo se atenúa (`depth-of-field-blur`).
Scene 3 (2.3–3.8s): el contador voltea a **2/5** (seam velocity-matched, `cut-catalog.md`); brazos·tronco·piernas se iluminan; **MÚSCULO · POR ZONA** + "— kg" con mini-barras por zona (`stat-bars-and-fills`).
Scene 4 (3.8–5.3s): contador **3/5**; el contorno cintura–cadera se resalta; **PROPORCIONES** "0.—" con un anillo de ratio que se dibuja (`svg-path-draw`).
Scene 5 (5.3–6.8s): contador **4/5**; **METABOLISMO** — una mini línea de tendencia se traza en el tiempo (`svg-path-draw`), "medible en el tiempo".
Scene 6 (6.8–9.0s): contador **5/5**; la línea de hombros + marca de asimetría sobre el avatar (`css-marker-patterns`, círculo/scribble); **POSTURA · ANTES DE QUE DUELA**; los cinco puntos de zona quedan encendidos. Hold del cuerpo completo leyendo; jitter sutil.

## Frame 5 — Twist · "Lo que tu balanza nunca vio"

- scene: El informe 3D aparece en un celular en mano; una zona incómoda se resalta en oro (grasa visceral alta / postura desviada). Golpe: aun en "peso sano", el escaneo encuentra lo que importa.
- voiceover: "Pesabas 'normal'… pero mirá lo que tu balanza nunca vio."
- duration: 7s
- poster: 3.5s
- transition_in: zoom-through
- status: animated
- type: benefit_highlight
- persuasion: Negative contrast + Reveal (rompe la falsa seguridad del "peso normal")
- beat: sorpresa → empoderamiento
- blueprint: video-text-pivot — el informe cede el cuadro a un dato-héroe resaltado
- src: compositions/frames/05-twist.html
- asset_candidates:

Texto en pantalla (mudo): sobre el mock del celular con el avatar-informe, **"PESABAS NORMAL."** → **"MIRÁ LO QUE TU BALANZA NUNCA VIO."**; un callout en oro señala GRASA VISCERAL (o POSTURA) con un valor en zona de alerta.
narrativeRole: Elevar el gancho: no es solo "la pesa miente", es "aun sano, tenés algo que no viste". Cierra el arco emocional.
keyMessage: El peso puede decir "normal" mientras el escaneo revela el riesgo real.

- blueprint: video-text-pivot (Adapt)
- focal: — (mock de celular con informe, inventado)
- roles: —

Adapt: se conserva la firma "el visual se desliza a un costado y cede el cuadro a la métrica" (se desliza, nunca corta); el "video" es el informe 3D en el celular.
Scene 1 (0.0–1.4s): el avatar full-screen previo se transforma/encoge dentro de un mock de celular que sube al centro (`card-morph-anchor`); **PESABAS 'NORMAL.'** se revela arriba.
Scene 2 (1.4–3.2s): el celular se desliza al tercio izquierdo (firma pivot — desliza); **MIRÁ LO QUE TU BALANZA NUNCA VIO** se ensambla por-palabra a la derecha (`dynamic-content-sequencing`).
Scene 3 (3.2–5.5s): un callout gold rodea **GRASA VISCERAL** (o **POSTURA**) en el informe con un valor en zona de alerta (círculo dibujado a mano `css-marker-patterns` + `ambient-glow-bloom` gold). Hold quieto — el breather del clímax; jitter sutil.

## Frame 6 — CTA + Promo · CEMESA

- scene: Placa final CEMESA: wordmark "CEMESA" en serif Cormorant con hairline + DIRECTORIO/VISBODY, datos de contacto, y una franja de promo en oro. Rápida y skimmeable.
- voiceover: "VisBody, en Hospital CEMESA, San Pedro Sula. Agendá tu escaneo por WhatsApp."
- duration: 4.5s
- poster: 2.5s
- transition_in: crossfade
- status: animated
- type: cta
- persuasion: Scarcity/value stacking (promo) + Risk reversal (agendá fácil por WhatsApp)
- beat: motivación → urgencia de actuar
- blueprint: logo-assemble-lockup — el wordmark CEMESA se arma y aterriza el CTA + WhatsApp
- src: compositions/frames/06-cta.html
- asset_candidates:

Texto en pantalla (mudo):
**VISBODY S30 · HOSPITAL CEMESA · SAN PEDRO SULA**
Franja promo (oro champagne): **1er estudio L500 · 2º a mitad · los dos L750 · compartibles**
**AGENDÁ TU ESCANEO — WhatsApp 9458-2959 · link en bio**
narrativeRole: La desviación deliberada: convertir la revelación en acción, sin alargar (máx ~4s) para no matar el loop.
keyMessage: Agendá tu VisBody en CEMESA — promo 2x L750, por WhatsApp.

- blueprint: logo-assemble-lockup (Reproduce)
- focal: — (wordmark CEMESA tipográfico, inventado)
- roles: —

Scene 1 (0.0–1.3s): ground ink; el wordmark **CEMESA** se dibuja/ensambla al centro en Cormorant serif con la regla hairline (`svg-path-draw`) + label **VISBODY S30 · DIRECTORIO MÉDICO** debajo (per-word). Firma logo-assemble.
Scene 2 (1.3–2.6s): la franja promo se revela debajo en champagne gold — **1er estudio L500 · 2º a mitad · los dos L750 · compartibles** — como un strip/pill que hace pop suave (`spring-pop-entrance`).
Scene 3 (2.6–4.0s): la línea CTA **AGENDÁ TU ESCANEO — WhatsApp 9458-2959 · link en bio** aterriza debajo (per-word); un glow gold tenue florece tras el wordmark (`ambient-glow-bloom`). Hold hasta el final (frame final: su salida es el fin del video).
