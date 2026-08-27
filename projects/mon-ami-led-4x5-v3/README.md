# Mon Ami Bistro Bar — spot LED 4:5, versión "razones para venir" (v3)

Spot publicitario de 8 s para pantallas LED verticales. **1080 × 1350 · 30 fps · sin audio.**

Tercera versión. Hereda el ritmo pausado de la v2 (3 tomas, 2 cortes, texto quieto ~1.8 s)
y cambia lo que dice: **ya no nombra platos, da razones para venir**, hablando en segunda
persona.

## El copy

| Beat | Entra | Sale | Toma         | Copy                                        |
| ---- | ----- | ---- | ------------ | ------------------------------------------- |
| 1    | 0.00  | 2.65 | Mar y tierra | «No toda cena es solo una cena.»            |
| 2    | 2.65  | 5.50 | Costillas    | «Vení por la comida. Quedate por la noche.» |
| 3    | 5.50  | 8.00 | La mesa      | «Vení. Tu mesa está lista.» + dirección     |

El cierre ya no lleva teléfono. En una LED nadie memoriza ocho dígitos de paso; el enlace
ocupa esa línea y cierra el círculo con la esquina superior izquierda, que lleva los ocho
segundos mostrándolo.

**La regla que gobierna este copy: aludir a la ocasión sin nombrarla.** No aparece
«romántica», ni «aniversario», ni «primera cita», ni «celebración». En su lugar:

- «No toda cena es solo una cena» — deja que quien mira ponga su propia ocasión. Funciona
  igual para el que va a celebrar algo que para el que quiere impresionar a alguien.
- «Vení por la comida. Quedate por la noche.» — llamado directo en voseo, estructura de
  dos tiempos. La segunda mitad es la que vende el ambiente: promete que uno se va a
  querer quedar, sin describir por qué.
- «Vení. Tu mesa está lista.» — imperativo + posesivo. Habla a una persona, no a un
  público, y la foto detrás es literalmente una mesa puesta.

Los eyebrows sostienen el registro sin explicarlo: «San Pedro Sula» ancla el lugar y «Sin
prisa» nombra el ritmo. La marca ya no necesita eyebrow: el logo vive arriba a la izquierda
desde el segundo 0.

## La marca es permanente, no un remate

El logotipo (430 px de ancho) y el enlace **visitanos.monami.com** (40 px) ocupan la esquina
superior izquierda los 8 s completos, sobre el scrim superior. En pantalla LED el espectador
entra a mitad del loop: un logo que solo aparece al final se pierde para la mayoría de
quienes pasan.

La ubicación no es una corazonada. Se midieron 9 muestras de los 8 s en celdas de 180 × 150 px,
puntuando cada celda por luminancia pico y detalle local —lo que un overlay permanente tiene
que sobrevivir es el instante más ocupado, no el promedio:

| Zona                             | Riesgo (0 = fondo negro y liso) |
| -------------------------------- | ------------------------------- |
| x 0–180, y 0–150 (esquina sup. izq.) | **0.19** — la celda más limpia del spot |
| columna x 0–180, resto de la altura  | 0.21 – 0.42 — el eje más limpio del frame |
| banda y 0–150, de lado a lado        | 0.19 – 0.42 — la franja más limpia |
| x 360–900, y 300–600 (el plato)      | 0.55 – 0.71 — zona prohibida |

La comida vive en el centro y centro-alto del frame en las tres tomas. Por eso la marca crece
hacia la derecha y hacia abajo desde la esquina superior izquierda: es el único cuadrante que
ninguna toma ocupa, y el scrim superior se densificó justo sobre la banda que la medición dio
por vacía, así que gana legibilidad sin robarle luz a ningún plato.

Las marcas de registro superiores se retiraron: el logo ya ocupa esa esquina y competían con
él. Las inferiores siguen cerrando el frame contra el copy.

Esto se aparta de `visual-specs.md` §4D, que reserva el logo para el último tercio. La regla
fue escrita para un spot donde el cierre era el único punto de marca; con marca permanente
el remate ya no la necesita, así que el cierre perdió su lockup grande y ese hueco se
convirtió en tiempo de lectura para la dirección.

## Las fotos también cambiaron

La v2 abría con hamburguesa y costillas. Para un registro de cocina elaborada y sobremesa,
la hamburguesa pelea con el mensaje. La v3 abre con **mar y tierra** —emplatado con
microvegetales, salsa aparte, mesa veteada en oro— y cierra sobre **la mesa puesta con dos
copas**, que es la imagen que dice «acompañado» sin decirlo.

Se probó la pasta cremosa en el beat 2 y se descartó: es la foto más clara del set (el
dorado encima roza la combinación prohibida del manual, 1.2:1) y el «mon ami» impreso del
individual asomaba detrás de la tipografía, cuando el manual reserva el logo para el
último tramo.

## Jerarquía de color

Las dos declaraciones van en **crema**, no en dorado. El dorado queda reservado para una
sola línea de copy en todo el spot —la invitación del cierre— más los filetes y el
logotipo. Así el oro sigue funcionando como remate y se mantiene bien por debajo del 15 %
del área que fija el manual.

## Cumplimiento del manual de marca

- Fondo dominante negro / fotografía oscura.
- Ningún texto dorado sobre fondo claro. Todo texto sobre foto lleva scrim (§4.2).
- Dos familias: Cormorant Garamond (display) + Jost (texto), servidas desde `assets/fonts/`.
- Borgoña solo como bloque de color en el cierre, nunca como tipografía.
- Logo permanente en superior izquierda (excepción deliberada a `visual-specs.md` §4D).
- Voseo hondureño, una idea por beat, cierre con llamado directo.

## Comandos

```bash
npm run check    # lint + validate + inspect
npm run render   # MP4
npx hyperframes snapshot --at 1.8,4.3,7.6
```

El MP4 no se versiona: se regenera con `npm run render`.
