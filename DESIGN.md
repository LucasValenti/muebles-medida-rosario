---
name: "Carpintería — Papel, madera y cota"
description: "Muebles de diseño con medida propia, fabricados en Rosario; y a medida cuando el espacio lo pide."
colors:
  crema: "#f4efe7"
  crema-2: "#ebe3d6"
  papel: "#fbf8f3"
  tinta: "#231d17"
  tinta-2: "#5a4d40"
  tinta-3: "#6b5d4f"
  linea: "#e2d8ca"
  linea-2: "#cdbfab"
  madera: "#8a5a33"
  nogal: "#231d17"
  nogal-2: "#2e2720"
  texto-nogal: "#f4efe7"
  texto-nogal-2: "#cfc3b2"
  linea-nogal: "#3d342b"
  oro: "#c9a46a"
  pie: "#1a1611"
  texto-pie: "#a89a87"
  cota: "#8c7d6b"
  cota-nogal: "#b9ab97"
typography:
  display:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(2.875rem, 1.6rem + 4.3vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(2.375rem, 1.5rem + 3vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Newsreader Variable', Georgia, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.55vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "'Hanken Grotesk Variable', system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
  label:
    fontFamily: "'Geist Mono Variable', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 450
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  medida:
    fontFamily: "'Geist Mono Variable', ui-monospace, monospace"
    fontSize: "0.6875rem–0.8125rem"
    letterSpacing: "0.02em"
rounded:
  pastilla: "999px"
  foto: "4px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  seccion: "clamp(4.5rem, 2.5rem + 7vw, 8.5rem)"
  ancho: "82.5rem"
---

# Design System: Papel, madera y cota

> Fusión pedida por el cliente: predomina el primer diseño (crema, Newsreader con itálicas en madera, Hanken Grotesk, secciones nogal) y se incorpora del segundo el lenguaje de la cota (dibujos con medidas en Geist Mono) y el plano interactivo. Los diseños anteriores están archivados en `opciones/`.

## Overview

El sitio se lee como una hoja de papel crema con fotos de muebles reales y, al lado de cada pieza, su dibujo técnico con cotas. La jerarquía la hace la serif Newsreader en tamaño grande con una palabra en itálica color madera; el cuerpo va en Hanken Grotesk; las medidas, y solo ellas, en Geist Mono. Dos secciones en nogal oscuro (¿Entra?, Taller, Contacto) marcan el ritmo; el pie cierra en un nogal más profundo.

Mensaje: piezas con **medida propia** (catálogo) como producto principal, y **a medida** como servicio. Sinónimos para "medida estándar": medida propia, medidas resueltas, medida justa, medidas pensadas de antemano, medidas definidas.

## Colors
- **Crema** fondo general; **crema-2** para la sección "A medida"; **papel** reservado.
- **Tinta** texto y filetes fuertes que abren cada pie de pieza; **tinta-2** bajadas; **tinta-3** rótulos.
- **Madera** solo para la itálica de los títulos, numerales de pasos y hovers. Nunca como fondo.
- **Nogal** fondo de las secciones oscuras; sobre él la itálica pasa a **oro** y las cotas a **cota-nogal**.
- Selección invertida por fase (tinta/crema; oro/nogal).

## Typography
- Titulares Newsreader 400, una sola palabra o frase final en itálica madera. Sin antetítulos.
- Geist Mono solo para medidas, rótulos de campo y estados ("Muestra", "Pared").
- Medidas siempre como `span` HTML sobre los SVG, en rem.

## Layout
Contenedor de 82.5rem. Cabeceras de sección en grilla 7fr/5fr (título / bajada abajo). Grillas estrictas, sin columnas desplazadas: el catálogo usa `subgrid` para que foto, nombre, ficha y enlace queden alineados entre columnas (4 → 2 → 1 columnas en 1180/600px). Los dípticos "A medida" van 2 × 2 hasta 640px. Cortes: 1180, 1000, 960 (se oculta la navegación), 900, 760, 640 (botón fijo de WhatsApp), 600, 480.

## Components
- **Ficha de pieza (firma):** foto cuadrada (radio 4px) → filete tinta con nombre y ambiente → alzado con cotas + lista Ancho/Alto/Prof./Color → "Consultar por esta pieza".
- **Ficha flotante de portada:** panel crema pegado al borde derecho de la foto, nombre en itálica, medidas en mono y una cota de ancho.
- **Plano "¿Entra en tu espacio?":** planta desde arriba con pared rayada, espacio punteado, pieza con veta y cotas. Pastillas para elegir pieza, riel para el ancho; si no entra, la pieza se dibuja punteada en oro y aparece "Pedila a tu medida" (WhatsApp con el ancho).
- **Alzado:** trazo 1.15 sin escala, segundo material relleno al 14%, cotas 0.8 con flechas abiertas.
- **Botones:** pastilla, 3.5rem, peso 600; tinta sobre crema (hover madera), el gap ícono-texto se abre al hover.
- **Formulario:** hoja crema sobre nogal, campos de línea inferior; las medidas aparecen solo al elegir "Otro mueble, a medida".

## Do's and Don'ts
- **Do** mostrar las medidas de cada pieza en su ficha y en mono.
- **Do** marcar "Muestra" en toda foto que no sea del cliente.
- **Don't** usar antetítulos, cifras inventadas ni opiniones falsas.
- **Don't** desalinear grillas ni desplazar columnas.
- **Don't** repetir "medida estándar" en todos lados: usar los sinónimos de arriba.
