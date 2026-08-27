# Mon Ami Bistro Bar — spot LED 16:9

Adaptación horizontal del spot aprobado. **1920 × 1080 · 30 fps · sin audio · 8 s.**

Mismo guion, mismos tiempos y mismas fotos que
[`mon-ami-led-4x5-v3`](../mon-ami-led-4x5-v3/README.md). Lo único que cambia es cómo se
encuadra, y ese cambio no fue cosmético.

## El problema: las fotos son 4:5 nativas

Las tres tomas son de 1620 × 2025 px, es decir 4:5 exacto. Estiradas a 16:9 con `cover`
solo se ve **el 45 % de su altura**: el emplatado que el restaurante aprobó se convierte en
un macro sin contexto —desaparecen el brócoli, el borde del plato y la salsa aparte, que
son justamente lo que hace que el plato lea como cocina elaborada y no como comida rápida.

## La solución: panel 4:5 a la derecha, copy en el campo negro

| Elemento             | Tratamiento                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| Beats 1 y 2 (platos) | Panel de 840 px a la derecha, sangrando arriba, abajo y derecha          |
| Beat 3 (la mesa)     | Pantalla completa                                                        |
| Copy                 | Campo negro a la izquierda, 984 px de ancho útil                        |
| Marca                | Esquina superior izquierda, permanente los 8 s                          |

El panel de 840 × 1080 tiene proporción 0.78 contra el 0.80 de la foto: se recorta un 3 %
de ancho y nada de altura. El emplatado llega entero.

La mesa puesta del cierre **sí** va a pantalla completa: es una foto de ambiente, no de
emplatado, así que recortarla no destruye nada y el remate gana peso. El borde del panel se
disuelve en el mismo corte.

Un degradado de 260 px cierra el borde izquierdo del panel contra el negro. Sin él, el corte
es una línea recta y el montaje lee como plantilla en vez de composición.

## Lo que hubo que recalcular

- **Paneo.** Dentro de un panel de 840 px el margen a escala S es de 540(S−1) px en vertical
  y (864S−840)/2 en horizontal: decenas de píxeles, no cientos. Los recorridos de cámara se
  redujeron en consecuencia; pasarse deja ver el borde del panel.
- **Tipografía.** Titular a 104 px (era 98 en vertical) y eyebrow a 36 px: el campo izquierdo
  da más ancho del que había, pero mucha menos altura.
- **Scrims.** Sus paradas son porcentajes de la altura, que bajó de 1350 a 1080 px. Se
  reescribieron para caer sobre los mismos píxeles. El scrim inferior además se aligeró: el
  copy ya no se apoya sobre una foto, se apoya sobre negro.
- **Bloom y viñeta** se corrieron hacia el panel — la luz cálida sale de la comida.
- **Logo** a 460 px y enlace a 42 px, algo mayores que en vertical porque el campo negro les
  deja sitio de sobra.

## Comandos

```bash
npm run check    # lint + validate + inspect
npm run render   # MP4
npx hyperframes snapshot --at 1.8,4.3,7.6
```

El MP4 no se versiona: se regenera con `npm run render`.
