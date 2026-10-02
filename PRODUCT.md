# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (elegido por el usuario). Sitio estático, deploy aún no definido.

## Users

- **Principal:** personas de Rosario y alrededores que necesitan un mueble a medida (placard, cocina, mesa, living/rack de TV, bajo mesada) y llegan desde Instagram, Facebook, WhatsApp o Google, casi siempre desde el celular. Quieren saber si el carpintero es confiable, ver trabajos y pedir presupuesto rápido.
- **Secundario:** quien vio un mueble en internet y quiere que se lo adapten a su espacio.

## Product Purpose

Sitio web de un carpintero de Rosario que fabrica muebles a medida. Existe para darle más alcance a partir de las redes y la web, verse profesional y convertir visitas en consultas (WhatsApp, llamada o formulario). Éxito = más pedidos de presupuesto calificados (con foto/idea y medidas).

## Positioning

Idea central (confirmada por el usuario, tomada de la bio de Instagram): "los muebles más top que ves en línea, directamente a tu casa · fabricantes directos". El cliente vio un mueble lindo en internet/Pinterest y ellos lo fabrican a medida en su taller de Rosario, sin intermediarios, y se lo entregan e instalan. Posicionamiento premium ("Rosario - Muebles Premium"). Oficio de carpintero con taller propio, no reventa de catálogo.

## Giro de producto (2026-10-02)

El cliente ahora vende principalmente **muebles con medida propia** (catálogo de piezas con medidas predeterminadas: mesa auxiliar en S, mesas de luz, estante rombo) y sigue ofreciendo **fabricación a medida** como servicio secundario. Fotos de catálogo provistas por el usuario en `public/fotos/catalogo/`. Medidas confirmadas solo para el estante rombo (30 × 27,5 × 8 cm, de la foto); el resto son estimadas y están marcadas `medidasProvisorias: true` en `src/data/piezas.ts`.

## Edición por el cliente (2026-10-02)

El cliente edita fotos, piezas, medidas, textos y datos desde el panel Keystatic (`/keystatic`). El contenido está en `src/content/` (YAML) y las fotos en `src/assets/`; se lee con `src/lib/contenido.ts`. Las fotos de catálogo actuales son de Pinterest y van marcadas como "Muestra". Si una pieza tiene forma nueva, cae en el dibujo "genérica"; las formas propias (`Alzado.astro` + opción en `keystatic.config.ts`) son un servicio pago que arma Lucas. Guía para el cliente: `GUIA-CLIENTE.md`.

## Operating Context

- Proceso real en cuatro pasos: 1) el cliente cuenta su idea (foto, captura o dibujo + medidas), 2) diseño y presupuesto (materiales, colores, terminaciones), 3) fabricación en el taller, 4) entrega y armado en la casa.
- Canal de consulta principal: WhatsApp. También llamada, email y formulario ("¿Qué mueble necesitás?": Placard, Cocina, Mesa, Living / Rack TV, Otro).
- Presupuesto sin compromiso.

## Capabilities and Constraints

- Tipos de trabajo: placares, cocinas completas, bajo mesadas, mesas (comedor, ratona), estanterías, racks de TV / living.
- Preguntas frecuentes confirmadas por la propuesta:
  - ¿Pueden hacer un mueble que vi en internet? Sí, con foto y medidas se adapta.
  - ¿Qué necesito para pedir presupuesto? Foto o idea, medidas aproximadas, colores/materiales preferidos.
  - ¿Hacen la instalación? Sí, entrega y armado en la casa.
  - ¿Cuánto tarda un mueble? Depende del tamaño y complejidad; el plazo se confirma con el presupuesto.
- **Pendiente (usar marcadores claros, nunca inventar):** nombre de marca, teléfono/WhatsApp, email, Instagram, Facebook, dirección del taller, años de oficio, cantidad de trabajos entregados, opiniones de clientes.

## Brand Commitments

- Idioma: castellano rioplatense con voseo ("Contanos tu idea", "¿Tenés un proyecto en mente?").
- Ubicación: Rosario, Santa Fe.
- Nombre y logo: aún no definidos (usar marcador). Instagram: @muebles.pinterest, nombre de perfil "Rosario - Muebles Premium". No usar "Pinterest" como marca en el sitio (marca registrada de terceros).
- Registro buscado por el usuario: sofisticado, estético y elegante; premium sin volverse inaccesible.
- Diseño vigente: fusión "Papel, madera y cota": predomina el primer diseño (crema, Newsreader, madera) con la cota y el plano del diseño "La referencia y la pieza". Talonario sigue archivado en `opciones/talonario/`.

## Evidence on Hand

- El cliente tiene fotos y videos propios (taller y trabajos terminados) que se van a entregar más adelante. El diseño tiene que estar pensado para fotos reales de celular, no de catálogo.
- `Muebles a Medida - Propuesta01.html`: propuesta previa con copy y estructura, provista por el usuario. Su copy es material confirmado, incluido: "Taller propio en Rosario, con maquinaria profesional y terminaciones a mano" y "Coordinamos materiales, entrega y armado". Sus dos fotos (estantería vertical, mesa ratona modular) son de muestra, no trabajos del cliente: usarlas solo como relleno temporal marcado.
- Instagram del cliente (@muebles.pinterest): cuenta nueva, 2 publicaciones (las mismas dos fotos de catálogo de la propuesta), 17 seguidores. No sirve todavía como prueba social; no mostrar cifras de seguidores.
- No hay opiniones, cifras ni clientes reales todavía: no fabricar testimonios, números ni logos.

## Product Principles

1. Consultar tiene que ser trivial desde el celular: WhatsApp a un toque en todo momento.
2. Los trabajos reales son la prueba: el sitio se ordena alrededor de las fotos del taller.
3. Honestidad de oficio: nada de cifras, reseñas o promesas no confirmadas.
4. Fácil de actualizar: sumar un trabajo nuevo o una opinión no debería requerir tocar diseño.
