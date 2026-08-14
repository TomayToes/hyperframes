# Mon Ami Bistro Bar — spot LED 4:5 (vertical)

Spot publicitario de 10 s para pantallas LED verticales. **1080 × 1350 · 30 fps · sin audio**
(las pantallas van mudas). Formato 4:5 pedido por el cliente.

## Idea

Una mesa que se va llenando, plato por plato, hasta que ya no queda espacio.
El cierre convierte el antojo en urgencia: _"Reservá antes que se llene."_

Dos palancas trabajando juntas:

- **Atracción visual** — el gancho es el plato de mayor carga apetitiva (hamburguesa,
  rojos y ámbar cálidos) en empuje de cámara desde el frame 0. Cortes cada ~1.5 s: cada
  corte reinicia la atención, que es lo único que se puede sostener en una pantalla que
  la gente mira de paso.
- **FOMO** — el arco va de presente continuo ("Se está sirviendo ahora") a escasez
  ("Y la mesa se llena" → "Reservá antes que se llene"). El remate emocional cae en el
  penúltimo beat y el CTA en el último, para que lo que quede en memoria sea el momento,
  no el anuncio.

## Guion visual

| Beat | Entra | Sale  | Toma         | Copy                                             | Coreografía          |
| ---- | ----- | ----- | ------------ | ------------------------------------------------ | -------------------- |
| 1    | 0.00  | 2.00  | Hamburguesa  | «Se está sirviendo ahora.»                       | Máscara hacia arriba |
| 2    | 2.00  | 3.50  | Tacos        | «Tacos de arrachera»                             | Empuje lateral       |
| 3    | 3.50  | 5.00  | Costillas    | «Costillas BBQ»                                  | Máscara hacia abajo  |
| 4    | 5.00  | 6.50  | Mar y tierra | «Mar y tierra»                                   | Asentado de escala   |
| 5    | 6.50  | 8.10  | La mesa      | «Y la mesa se llena.»                            | Máscara escalonada   |
| 6    | 8.10  | 10.00 | Cierre       | Logo + «Reservá antes que se llene.» + 9466 2727 | Logo que asienta     |

Disolvencia de 0.24 s entre tomas; el Ken Burns arranca antes de cada disolvencia y
alterna sentido para que dos cortes seguidos nunca se muevan igual.

## Cumplimiento del manual de marca

- Fondo dominante negro / fotografía oscura; el oro se queda muy por debajo del 15 % del área.
- Ningún texto dorado sobre fondo claro. Todo texto sobre foto lleva scrim (§4.2).
- Dos familias: Cormorant Garamond (display) + Jost (texto) — servidas desde
  `assets/fonts/` para que el render sea offline y determinista.
- Borgoña solo como bloque de color en el cierre, nunca como tipografía.
- Logo únicamente en el último segundo (regla de Reel, `visual-specs.md` §4D).
- Copy en voseo hondureño, una idea sensorial por beat, cierre con CTA.

> **Nota de marca:** el manual marca las tipografías como _sustitutas pendientes de
> confirmar_ (Canva no expone los nombres por API). Si se confirman las originales,
> se cambian los dos `@font-face` y los `font-family` del `<style>` — nada más.

## Assets

Recortados desde las fotos originales del cliente a 1620 × 2025 (1.5× del frame, para que
el Ken Burns no pierda nitidez). El encuadre deja el plato en el tercio superior y el
tercio inferior libre para tipografía.

`assets/img/grain.png` es una textura de grano generada con semilla fija en tiempo de
autoría — no hay aleatoriedad en tiempo de render.

## Comandos

```bash
npm run check    # lint + validate + inspect
npm run render   # MP4
npx hyperframes snapshot --at 0.9,2.9,4.4,5.9,7.4,9.6   # frames de revisión
```

El MP4 no se versiona: se regenera con `npm run render`.
