# SCRIPT — "Tu balanza te miente" · VisBody S30 · CEMESA

Locked narration, as produced. Voice: **ElevenLabs "Maya — Dynamic Agent & Storyteller"**
(`nbcvT3C2tyOd2OsRAtUf`, español latino), model `eleven_multilingual_v2`, settings
stability 0.52 / similarity 0.8 / style 0.10. Voice-driven timing: each frame's duration was sized to
its line; total **43.8s** (render 43.6s). Segment audio placed at each frame's start + a short lead-in.

| Frame | Dur | Voice line | VO seg | Placed @ |
| --- | --- | --- | --- | --- |
| 1 Hook | 3.5s | Tu balanza te está mintiendo. | 1.8s | 0.9s |
| 2 Problema | 5.8s | Te da un número. Pero no te dice qué es grasa, qué es músculo, ni qué pasa por dentro. | 5.0s | 3.9s |
| 3 Escáner | 8.7s | Una cámara tridimensional te lee el cuerpo entero, en trescientos sesenta grados. Sin radiación, sin agujas. | 8.0s | 9.8s |
| 4 Los 5 datos | 14.8s | Uno: tu grasa, hasta la visceral. Dos: tu músculo, zona por zona. Tres: tus proporciones. Cuatro: tu metabolismo. Cinco: tu postura, antes de que duela. | 14.1s | 18.5s |
| 5 Twist | 4.8s | Pesabas "normal"… pero mirá lo que tu balanza nunca vio. | 4.1s | 33.1s |
| 6 CTA | 6.2s | VisBody, en Hospital CEMESA, San Pedro Sula. Agendá tu escaneo por WhatsApp. | 5.7s | 37.9s |

## Reproduce (needs `ELEVENLABS_API_KEY`)
1. Generate per-frame segments → `audio/f1..f6.mp3` (ElevenLabs TTS, voice above).
2. Voice-driven retiming: size each frame to its segment (see `scripts/slow-frame.mjs` in the
   cemesa-brand-video skill), re-assemble → vendor GSAP → inject transitions, render silent.
3. Mux with ffmpeg — each segment `adelay`'d to its frame start, `amix normalize=0`, then `loudnorm`.

Alt voices auditioned by label: **Ligia Mendez** (`szJ1F5SgxGkjGanyygoW`, calmer/clinical),
male **Martin Alvarez** (`Wl3O9lmFSMgGFTTwuS6f`, confident conversational).
