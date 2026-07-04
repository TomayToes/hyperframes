# SCRIPT — "Tu balanza te miente" · VisBody S30 · CEMESA

Locked narration for the voiceover (Spanish, Honduras register). Segmented per frame to the ~41.5s
cut. Pace ≈ calm-confident, ~2.6 words/s. Generate with ElevenLabs (see voice note at bottom), then
`audio.mjs sync-durations` + `transcribe` for word timings.

## Frame 1 — Hook (≈3.5s)
Tu balanza te está mintiendo.

## Frame 2 — Problema (≈7s)
Te da un número. Pero no te dice qué es grasa, qué es músculo, ni qué pasa por dentro.
En tres minutos te muestro los cinco datos que sí importan.

## Frame 3 — Escáner (≈6s)
Te subís a la plataforma y una cámara 3D te lee el cuerpo entero, en trescientos sesenta grados.
Sin radiación, sin agujas.

## Frame 4 — Los 5 datos (≈13.5s)
Uno: tu grasa, hasta la visceral, en 3D.
Dos: tu músculo, zona por zona.
Tres: tus proporciones reales.
Cuatro: tu metabolismo, medible en el tiempo.
Cinco: tu postura… antes de que duela.

## Frame 5 — Twist (≈7s)
Pesabas "normal"… pero mirá lo que tu balanza nunca vio.

## Frame 6 — CTA (≈4.5s)
VisBody, en Hospital CEMESA, San Pedro Sula. Agendá tu escaneo por WhatsApp.

---

## Voice note (ElevenLabs)

**Style target:** warm, premium, trustworthy, confident-but-caring — a medical brand that provokes
("tu balanza te miente") without shaming. Latin-American Spanish, natural for Honduras.

**Recommended:** `eleven_multilingual_v2` model + a warm mid-register **female** voice with gravitas
(fits the primary persona — health-conscious adults / the "meseta" 35–45). Primary pick to audition
first: **Matilda** (`XrExE9yKIg1WjnnlVkGX`) or **Sarah** (`EXAVITQu4vr4xnSDxMaL`); calm authoritative
male alt: **Antoni** (`ErXwobaYiN019PkySvjV`). Voice settings: stability ~0.45–0.55, similarity ~0.8,
a touch of style for the hook line. Final pick to be confirmed on audition once the API key is set.

**Command (once `ELEVENLABS_API_KEY` is exported):**
```bash
"$HF" tts "<line>" --provider elevenlabs --voice XrExE9yKIg1WjnnlVkGX -o audio/voice.wav
# or drive the whole script via the workflow's audio.mjs, then sync-durations to re-time the frames.
```
ElevenLabs returns no word timestamps → run `"$HF" transcribe audio/voice.wav --model small` for the
per-word timing the caption/sync steps expect.
