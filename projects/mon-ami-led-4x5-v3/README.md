# Mon Ami Bistro Bar — spot LED 4:5, versión "razones para venir" (v3)

Spot publicitario de 10 s para pantallas LED verticales. **1080 × 1350 · 30 fps · sin audio.**

Tercera versión. Hereda el ritmo pausado de la v2 (3 tomas, 2 cortes, texto quieto ~1.8 s)
y cambia lo que dice: **ya no nombra platos, da razones para venir**, hablando en segunda
persona.

## El copy

| Beat | Entra | Sale  | Toma         | Copy                                           |
| ---- | ----- | ----- | ------------ | ---------------------------------------------- |
| 1    | 0.00  | 3.10  | Mar y tierra | «No toda cena es solo una cena.»               |
| 2    | 3.10  | 6.50  | Costillas    | «Vení por la comida. Quedate por la noche.»    |
| 3    | 6.50  | 10.00 | La mesa      | Logo + «Vení. Tu mesa está lista.» + dirección |

**La regla que gobierna este copy: aludir a la ocasión sin nombrarla.** No aparece
«romántica», ni «aniversario», ni «primera cita», ni «celebración». En su lugar:

- «No toda cena es solo una cena» — deja que quien mira ponga su propia ocasión. Funciona
  igual para el que va a celebrar algo que para el que quiere impresionar a alguien.
- «Vení por la comida. Quedate por la noche.» — llamado directo en voseo, estructura de
  dos tiempos. La segunda mitad es la que vende el ambiente: promete que uno se va a
  querer quedar, sin describir por qué.
- «Vení. Tu mesa está lista.» — imperativo + posesivo. Habla a una persona, no a un
  público, y la foto detrás es literalmente una mesa puesta.

Los eyebrows sostienen el registro sin explicarlo: «Mon Ami · Bistro Bar» ancla la marca
temprano (el logo no aparece hasta el cierre) y «Sin prisa» nombra el ritmo del lugar.

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
- Logo únicamente en el último tercio (`visual-specs.md` §4D).
- Voseo hondureño, una idea por beat, cierre con llamado directo.

## Comandos

```bash
npm run check    # lint + validate + inspect
npm run render   # MP4
npx hyperframes snapshot --at 2.6,5.0,6.2,9.6
```

El MP4 no se versiona: se regenera con `npm run render`.
