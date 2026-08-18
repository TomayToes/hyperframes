# Mon Ami Bistro Bar — spot LED 4:5, versión de lectura pausada (v2)

Spot publicitario de 10 s para pantallas LED verticales. **1080 × 1350 · 30 fps · sin audio.**

Segunda versión de `../mon-ami-led-4x5`. Misma marca y mismo lenguaje visual; cambia el
ritmo y cambia el cierre.

## Qué cambió respecto de la v1

|                                  | v1                                      | v2                                            |
| -------------------------------- | --------------------------------------- | --------------------------------------------- |
| Fotos                            | 6                                       | 3                                             |
| Cortes en 10 s                   | 5                                       | 2                                             |
| Duración por toma                | 1.5 – 2.0 s                             | 3.1 – 3.4 s                                   |
| Texto quieto (tiempo de lectura) | ~1.0 – 1.3 s                            | ~1.7 – 1.9 s                                  |
| CTA                              | «Reservá antes que se llene» + teléfono | «Vení esta noche» + dirección en primer plano |

El ritmo ya no lo lleva el corte sino la cámara dentro de cada toma: recorridos largos de
3.4 s en sentidos opuestos, un barrido de luz cálida al abrir cada toma, y un revelado en
banda horizontal en lugar de la disolvencia simple. Se ve movimiento constante con la
mitad de cambios de imagen.

## Guion visual

| Beat | Entra | Sale  | Toma        | Copy                                  | Lectura |
| ---- | ----- | ----- | ----------- | ------------------------------------- | ------- |
| 1    | 0.00  | 3.10  | Hamburguesa | «Se está sirviendo ahora.»            | 1.7 s   |
| 2    | 3.10  | 6.50  | Costillas   | «A fuego lento» / «Costillas BBQ»     | 1.9 s   |
| 3    | 6.50  | 10.00 | La mesa     | Logo + «Vení esta noche.» + dirección | 1.6 s   |

«Lectura» = tiempo con el texto ya asentado e inmóvil, sin contar entrada ni salida.

## El cierre

El objetivo del CTA es que la gente camine hasta el local, así que la jerarquía se invirtió
respecto de la v1: **Plaza Paseo Próceres** es ahora el elemento de información más grande
(46 px, versalitas), el teléfono baja a segundo plano (38 px) y la línea de marca es una
invitación a venir, no a llamar. El fondo del cierre es la mesa puesta, oscurecida al 80 %
pero todavía legible: se ve el lugar al que se está invitando.

## Límite honesto de los 10 s

Con dos beats de plato y un cierre de 3.1 s, el techo de texto quieto es ~1.9 s por beat.
Es un 60 % más que la v1, pero si se busca lectura verdaderamente cómoda (~3 s por línea)
el spot debería durar **15 s**. Es un retiming de la misma composición: se alargan las
tomas y los reposos, sin tocar assets ni diseño.

## Cumplimiento del manual de marca

- Fondo dominante negro / fotografía oscura; el oro muy por debajo del 15 % del área.
- Ningún texto dorado sobre fondo claro. Todo texto sobre foto lleva scrim (§4.2).
- Dos familias: Cormorant Garamond (display) + Jost (texto), servidas desde `assets/fonts/`.
- Borgoña solo como bloque de color en el cierre, nunca como tipografía.
- Logo únicamente en el último tercio (`visual-specs.md` §4D).
- Copy en voseo hondureño, una idea sensorial por beat, cierre con CTA.

## Comandos

```bash
npm run check    # lint + validate + inspect
npm run render   # MP4
npx hyperframes snapshot --at 0.6,2.0,3.3,5.0,6.6,9.6
```

El MP4 no se versiona: se regenera con `npm run render`.
