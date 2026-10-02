---
name: Carpintería · Muebles a medida · Rosario
description: El sitio es un presupuesto de talonario por duplicado que el visitante completa y arranca para mandar por WhatsApp.
colors:
  papel: "#fcfcfa"
  rosa: "#f4c6cf"
  amarillo: "#f6e27a"
  carbonico: "#161b3d"
  tinta: "#1c1c1f"
  tinta-2: "#55555c"
  carbon: "#2b3a8c"
  sello: "#c8322b"
  rayado: "#c3cedc"
  rayado-fuerte: "#8e9cb0"
  tinta-rosa: "#6b2437"
  tinta-amarilla: "#574807"
  tinta-carbonico: "#c9cde6"
  hoja-blanca: "#ffffff"
  tinta-sobre-carbonico: "#eef0fa"
typography:
  display:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.25rem + 4.2vw, 5rem)"
    fontWeight: 820
    lineHeight: 0.92
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 64"
  documento:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2rem + 1.8vw, 2.75rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 64"
  headline:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 3vw, 3.5rem)"
    fontWeight: 780
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 85"
  body:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "1.75rem"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "'Archivo Variable', 'Archivo', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 90"
  mano:
    fontFamily: "'Kalam', 'Segoe Print', cursive"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: "2.5rem"
    letterSpacing: "0"
rounded:
  foco: "2px"
  pulsable: "3px"
spacing:
  renglon: "1.75rem"
  renglon-escritura: "2.5rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  seccion: "clamp(4.5rem, 3rem + 7vw, 8.5rem)"
  ancho: "76rem"
components:
  talon:
    backgroundColor: "{colors.carbon}"
    textColor: "{colors.papel}"
    rounded: "{rounded.pulsable}"
    padding: "0.75rem 1.25rem"
    height: "3.5rem"
  talon-incompleto:
    backgroundColor: "#6b72a3"
    textColor: "{colors.papel}"
    rounded: "{rounded.pulsable}"
  talon-sobre-carbonico:
    backgroundColor: "{colors.tinta-sobre-carbonico}"
    textColor: "{colors.carbonico}"
    rounded: "{rounded.pulsable}"
  boton-linea:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pulsable}"
    padding: "0.75rem 1.25rem"
    height: "3.5rem"
  boton-linea-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.papel}"
  campo-linea:
    backgroundColor: "transparent"
    textColor: "{colors.carbon}"
    typography: "{typography.mano}"
    height: "2.5rem"
  opcion-tipo:
    backgroundColor: "transparent"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pulsable}"
    padding: "0.4rem 0.9rem 0.4rem 0.6rem"
    height: "2.75rem"
  opcion-tipo-elegida:
    backgroundColor: "rgb(43 58 140 / 0.06)"
    textColor: "{colors.tinta}"
  rotulo:
    textColor: "{colors.tinta-2}"
    typography: "{typography.label}"
---

# Design System: Carpintería · Muebles a medida · Rosario

## Overview

**Creative North Star: "El talonario por duplicado"**

Todo el sitio es un solo presupuesto de talonario, como el que un carpintero de Rosario llena con birome sobre el mostrador del taller. Lo impreso va en negro con una grotesca condensada (Archivo sobre su eje de ancho); lo que se completa a mano va en azul de carbónico (Kalam); los números de folio y el sello de goma van en rojo. Las secciones son hojas del mismo block: papel blanco con rayado azul grisáceo, y copias enteras en rosa y amarillo del duplicado y triplicado. Entre hoja y hoja hay una línea de troquel.

La densidad es la de un formulario: rótulos chicos en versalitas espaciadas, renglones con su línea, tablas con filete grueso arriba y abajo. La jerarquía se arma estrechando la letra, no agrandándola sin control. Las fotos no se muestran como banner: se "adjuntan" a la hoja, con marco blanco, sombra de papel y una leve inclinación. El botón principal es siempre un talón con su parte separada por troquel, y la interacción firma es arrancarlo: el formulario se calca en vivo sobre la copia rosa y, al enviar, el talón se desprende.

Rechazo confirmado por el contrato de dirección: la foto de living a pantalla completa con titular serif sobre fondo crema.

**Key Characteristics:**
- Tres tintas con roles fijos: negro impreso, azul carbónico escrito, rojo de numeradora y sello.
- Secciones completas en copia rosa y amarilla; nunca como acento chico.
- Jerarquía tipográfica por eje de ancho de Archivo (64 a 100).
- Botón principal = talón con troquel punteado.
- Fotos como adjuntos de papel inclinados, no como fondos.
- Datos no confirmados marcados a la vista como pendientes, nunca inventados.

## Colors

Papel blanco de talonario, tres tintas de oficina y dos copias de color que ocupan hojas enteras.

### Primary
- **Azul Carbónico** (carbon): la tinta de lo escrito a mano y de la acción. Fondo del talón, texto de campos completados, fecha, calco, firmas, anillo de foco, selección de texto, opción elegida. Si algo está en azul, lo escribió alguien o se puede tocar.

### Secondary
- **Rojo Numeradora** (sello): folios ("N° 0001-…", "Hoja N", "N° 001" de cada trabajo), el sello de goma, los marcadores de pendiente y los mensajes de error del formulario. Nunca va en titulares ni en fondos.

### Tertiary
- **Copia Rosa** (rosa): el duplicado. Cubre la sección del Taller completa y la copia donde se calca la consulta. Su texto secundario es **Vino de Copia** (tinta-rosa), nunca gris.
- **Copia Amarilla** (amarillo): el triplicado. Cubre la sección del Proceso completa. Su texto secundario es **Ocre de Copia** (tinta-amarilla).

### Neutral
- **Papel de Talonario** (papel): fondo de la página y de la barra.
- **Hoja Blanca** (hoja-blanca): el blanco puro de lo que se apoya sobre el papel (formulario original, marcos de fotos adjuntas, talón de envío). Se distingue del papel justamente por ser más blanco.
- **Tinta Impresa** (tinta): texto principal, filetes gruesos de 2px, recuadros.
- **Tinta Gastada** (tinta-2): rótulos, bajadas y texto secundario sobre papel o blanco.
- **Rayado** (rayado) y **Rayado Fuerte** (rayado-fuerte): renglones de escritura, líneas de campo, puntos de troquel.
- **Carbónico Nocturno** (carbonico): el pie, la única superficie oscura. Sobre él escribe **Tinta sobre Carbónico** (tinta-sobre-carbonico) y los secundarios van en **Lavanda de Carbónico** (tinta-carbonico); el rojo se aclara localmente a `#ef6a5f` para sostener el contraste.

### Named Rules
**La regla de las tres tintas.** Negro para lo impreso, azul carbónico para lo escrito y lo accionable, rojo para numeración, sello y pendientes. Ninguna tinta cambia de rol.

**La regla de la copia entera.** Rosa y amarillo solo existen como hojas completas (secciones a todo el ancho o la copia del formulario). Cada copia tiñe su propio texto secundario (tinta-rosa, tinta-amarilla) y su rayado y troquel; nada de gris neutro encima de una copia.

## Typography

**Display Font:** Archivo Variable (con Archivo, system-ui, sans-serif), eje `wdth`
**Body Font:** Archivo Variable, `wdth` 100
**Mano:** Kalam 400 (con Segoe Print, cursive)

**Character:** Una grotesca de imprenta que se estrecha a medida que sube en jerarquía, como la tipografía de un formulario preimpreso, y una letra de birome que solo aparece donde alguien escribió.

### Hierarchy
- **Display** (820, clamp(2.5rem → 5rem), 0.92, `wdth` 64): el H1 de la portada, máximo 15ch.
- **Documento** (850, clamp(1.75rem → 2.75rem), 0.9, `wdth` 64, mayúsculas): la palabra "PRESUPUESTO" del bloque de folio del membrete. Es el tipo de comprobante, no un titular aparte.
- **Headline** (780, clamp(2rem → 3.5rem), 1, `wdth` 72): H2 de cada hoja, entre 10 y 16ch.
- **Title** (700, 1.3125rem, 1.25, `wdth` 85): H3 de trabajos y pasos; en el Proceso sube a clamp(1.3125rem → 1.875rem) con `wdth` 75.
- **Body** (400, 1.0625rem, renglón 1.75rem, `wdth` 100): texto corrido, máximo 65ch. Las bajadas van a 1.125–1.1875rem en tinta secundaria.
- **Label / rótulo** (650, 0.75rem, 0.08em, mayúsculas, `wdth` 90): el rótulo impreso de cada campo ("Señor/es", "Cant.", "Adjunto", "Teléfono").
- **Mano** (Kalam 400, 1.375rem sobre renglón de 2.5rem): valores completados, placeholders, calco, citas y firmas de opiniones.
- **Numerales**: cifras tabulares en folios, teléfonos y medidas. Los números de paso son display condensado (820, `wdth` 62).

### Named Rules
**La regla del ancho.** Cuanto más importante, más angosta: 64 para display, 72 para H2, 85 para títulos y botones, 90 para rótulos, 100 para lectura. No se sube jerarquía con otra familia.

**La regla de la birome.** Kalam solo para lo que una persona escribió o escribiría en el papel. Nunca en titulares, rótulos, botones ni navegación.

## Layout

Contenedor central de 76rem con gutter fluido (clamp 1rem → 3rem). Cada sección respira con el mismo relleno vertical (seccion: clamp 4.5rem → 8.5rem). Las grillas son asimétricas en proporciones de 12: 7/5 en portada y cabecera de trabajos, 5/7 en taller y consulta (con la columna de texto pegajosa a 6.5rem del borde), 4/8 en preguntas. Los trabajos van en una grilla de 12 con un ritmo que se repite (7+5, tres de 4, dos de 6) y el último completa la fila.

Hay dos renglones: el de lectura (renglon, 1.75rem) que fija el interlineado del cuerpo y el rayado de las hojas rayadas, y el de escritura (2.5rem) que usan los campos, el textarea y las opiniones. El rayado de fondo siempre coincide con el renglón del texto que lo pisa.

Responsive: a 900px las grillas de dos columnas pasan a una; a 860px se oculta la navegación; a 640px la grilla de trabajos se vuelve un carrusel con snap, el membrete pierde el bloque "X" y los datos, y aparece el talón fijo al pie de la pantalla (se esconde cuando las acciones de la portada o el formulario están a la vista); a 520px la barra muestra solo el acceso a WhatsApp.

**La regla de la hoja.** Cada sección después de la portada es una hoja del mismo block: troquel punteado en su borde superior y, en el margen derecho, el folio de hoja (tipo de copia en tinta de la hoja + "Hoja N" en rojo, numeración correlativa). El folio es decorativo (aria-hidden), no nombra el tema de la sección y nunca se pone como introducción encima del H2.

## Elevation & Depth

El mundo es plano como un block de papel; la profundidad aparece solo cuando una hoja física se apoya sobre otra. Las sombras son ambientales y suaves, teñidas con el color de la superficie de abajo (sobre la copia rosa, la sombra es vino). La otra fuente de profundidad es la inclinación: adjuntos y copias rotan entre 0.6° y 2.2°.

### Shadow Vocabulary
- **Adjunto** (`box-shadow: 0 1px 2px rgb(28 28 31 / 0.12), 0 18px 40px -22px rgb(28 28 31 / 0.45)`): foto sujeta a la hoja sobre papel.
- **Original** (`box-shadow: 0 1px 2px rgb(28 28 31 / 0.12), 0 24px 50px -30px rgb(28 28 31 / 0.5)`): el formulario blanco encima de su copia.
- **Adjunto sobre rosa** (`box-shadow: 0 1px 2px rgb(107 36 55 / 0.18), 0 22px 40px -24px rgb(107 36 55 / 0.55)`): fotos del taller.
- **Copia** (`box-shadow: 0 1px 2px rgb(107 36 55 / 0.2)`): la copia rosa asomando debajo del original.
- **Talón** (`box-shadow: 0 1px 0 rgb(22 27 61 / 0.25), 0 10px 22px -12px rgb(22 27 61 / 0.55)`), en hover `0 16px 28px -14px` con 0.6 y sube 2px.

### Named Rules
**La regla del papel sobre papel.** Solo lleva sombra lo que es un papel apoyado (adjunto, original, copia) o el talón que se va a arrancar. Secciones, tablas y listas son planas y se separan con filetes y troquel.

## Shapes

Las hojas son rectas: papel, adjuntos, copias y tablas tienen esquinas vivas. El único redondeo es de 3px en lo que se toca (talón, botón de línea, opciones, acciones de la barra) y 2px en el anillo de foco. Los bordes hablan el idioma del formulario: filete de 2px en tinta para abrir y cerrar documentos (membrete, tablas, listas), línea de 1px en rayado fuerte para cada renglón, 1.5px en botones y opciones. El troquel es una fila de puntos radiales (9px de paso en líneas, 11px entre hojas). Lo pendiente se marca con rayado diagonal rojo al 9% y contorno punteado.

## Components

### Buttons
Talones de talonario: se ven como papel que se puede arrancar.
- **Shape:** apenas redondeado (3px), alto mínimo 3.5rem.
- **Talón (primario):** fondo azul carbónico, texto papel, 700 `wdth` 85. A la izquierda, la parte del talonario con el ícono, separada por una línea de 2px punteada. Es la única forma de la acción principal (WhatsApp) en portada, formulario, pie y talón fijo móvil.
- **Hover / Active:** sube 2px con la sombra más larga (0.35s, ease-salida `cubic-bezier(0.16, 1, 0.3, 1)`); vuelve a 0 al presionar.
- **Incompleto:** mientras faltan datos obligatorios, el talón del formulario se apaga a `#6b72a3` sin sombra.
- **Sobre carbónico:** en el pie se invierte a fondo tinta-sobre-carbonico y texto carbonico.
- **Botón de línea (secundario):** contorno de 1.5px en color del texto, 650. Hover rellena en tinta con texto papel (0.2s). Sus variantes chicas (acción de la barra, acción del primer paso) repiten el mismo gesto con 0.55–0.6rem de relleno.

### Chips
- **Opción de mueble:** caja de 1.5px rayado fuerte con un casillero cuadrado de 1.25rem; hover oscurece el borde a tinta; elegida pasa a borde azul carbónico, fondo carbónico al 6% y tilde azul.

### Cards / Containers
- **Adjunto de foto:** marco hoja-blanca de 0.65–0.75rem, epígrafe con rótulo "Adjunto", sombra de adjunto, rotación leve. En la portada lleva el sello rojo encima con `mix-blend-mode: multiply`.
- **Trabajo:** foto sin marco con su talón abajo: troquel, H3 y folio rojo "N° 001" a la derecha.
- **Conformidad (opinión):** filete superior de 2px, fondo rayado de escritura, cita en Kalam y firma sobre línea con rótulo "Firma y aclaración".

### Inputs / Fields
- **Style:** sin caja. Rótulo impreso a la izquierda y valor en Kalam azul sobre una línea de 1px rayado fuerte; placeholder también en Kalam (`#6b6b73`). El textarea trae su propio rayado de 2.5rem.
- **Focus:** la línea pasa a azul carbónico y se engrosa con una sombra de 1px.
- **Error:** el mensaje aparece en rojo sello bajo el talón y el foco va al primer dato faltante.

### Navigation
Barra pegajosa en papel al 94% con desenfoque y línea inferior de rayado. Marca en 800 `wdth` 75 a la izquierda, enlaces 550 `wdth` 90 en tinta secundaria (hover a tinta y subrayado), y un botón de línea "Pedir presupuesto". Debajo de 520px se reemplaza por un cuadrado azul carbónico con el ícono de WhatsApp.

### Membrete
Cabecera de comprobante en tres columnas sobre filete de 2px: marca, rubro y datos a la izquierda; el recuadro "X / Documento no válido como factura" al centro; tipo "PRESUPUESTO" (Documento), número con folio rojo y campo Fecha a la derecha. Es propio de la portada.

### Pila original y copia
El formulario blanco apoyado sobre la copia rosa inclinada 0.6°. Lo que se escribe en el original se calca en vivo en la copia, en Kalam azul (`#27337a`) con un halo de tinta. Al enviar, el talón inferior se arranca por el troquel (0.65s, gira y cae) antes de abrir WhatsApp; con movimiento reducido se abre directo.

### Sello
Sello de goma circular en SVG, rojo, con textura de tinta irregular por turbulencia, texto en Archivo 800 condensado sobre el arco. Entra con un golpe (escala 1.5 → 1, 0.5s) una sola vez. Máximo uno por vista.

## Do's and Don'ts

### Do:
- **Do** usar el talón (carbon, 3px, troquel punteado) para toda acción que lleve a WhatsApp.
- **Do** dar a cada sección nueva su troquel superior y su folio "Hoja N" correlativo en el margen derecho.
- **Do** cubrir hojas enteras con rosa o amarillo y teñir con su propia tinta el texto secundario, el rayado y el troquel.
- **Do** escribir en Kalam azul solo lo completado a mano, sobre un renglón que coincida con su interlineado.
- **Do** mostrar fotos como adjuntos con marco blanco, sombra de papel y 0.6°–2.2° de inclinación.
- **Do** marcar todo dato no confirmado con el rayado rojo de pendiente.
- **Do** respetar `prefers-reduced-motion`: la escritura, el sello y el arranque del talón se omiten.

### Don't:
- **Don't** abrir con una foto de living a pantalla completa y titular serif sobre crema.
- **Don't** usar rosa, amarillo o rojo como acento chico (chips, badges, fondos de tarjeta).
- **Don't** poner Kalam en titulares, rótulos, botones o navegación.
- **Don't** usar rojo en titulares ni el azul carbónico como color decorativo.
- **Don't** redondear más de 3px ni redondear hojas, adjuntos o tablas.
- **Don't** usar sombras duras desplazadas ni sombras en secciones planas.
- **Don't** poner un rótulo de tema encima del H2; el folio de hoja no es un encabezado.
- **Don't** inventar cifras, opiniones ni datos del negocio para llenar un hueco.
