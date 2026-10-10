---
nombre: Muebles a medida (carpintería)
tipo: cliente
stack: astro
---
# Muebles a medida — sitio con panel de edición

Sitio de una carpintería en Astro + Keystatic: el cliente lo edita desde el panel y se publica solo. Hoy está en muebles-medida-rosario.kusak.workers.dev y es anterior al estándar KUSAK.

## Venta · 15 %
- [ ] Briefing y alcance acordados con el cliente [PENDIENTE: confirmar]
- [ ] Propuesta y acuerdo cerrados [PENDIENTE: confirmar]

## Arranque · 15 %
- [x] Repo creado y sitio base con panel de edición (71530a6)
- [x] Publicación automática en Cloudflare al guardar desde el panel (3d14ce2, 888c4e6)
- [ ] Materiales del cliente recibidos: fotos propias del taller y nombre del negocio

## Desarrollo · 35 %
- [x] Diseño del sitio con catálogo, preguntas frecuentes y animaciones de dibujo técnico (04f8d58, ed5387f)
- [x] Keystatic configurado y el cliente ya editó contenido desde el panel (888c4e6, 837b3d4, 07eb227)
- [x] Vista previa con foto al compartir por WhatsApp (b842732)
- [ ] Reemplazar las fotos de Pinterest marcadas "Muestra" por fotos del cliente (keystatic.config.ts, casos/carpinteria.md)
- [ ] Nombre real del negocio cargado; hoy dice "[Nombre de marca]" (src/content/ajustes/negocio.yaml)
- [ ] Opiniones reales en lugar de las tres de ejemplo (src/content/opiniones/, 8274007)

## Control · 15 %
- [x] Ajustes de la auditoría de diseño aplicados (ed5387f)
- [ ] Auditoría de accesibilidad, rendimiento, SEO y seguridad → anthropic-skills:auditoria-web
- [ ] Aprobación del cliente por escrito [PENDIENTE: confirmar]

## Lanzamiento · 15 %
- [ ] Dominio propio a nombre del cliente apuntando al sitio (hoy en workers.dev)
- [ ] Checklist de lanzamiento verificada en el sitio real → entrega-proyecto

## Traspaso · 5 %
- [x] Guía en PDF para que el cliente edite su página (8ca5e90)
- [ ] Traspaso, tag v1.0.0 y CHANGELOG → entrega-proyecto
- [ ] Caso de estudio publicado: bloqueado hasta cambiar las fotos de Pinterest, también en la captura de la web de KUSAK (borrador en agencia-software/casos/carpinteria.md) → caso-de-estudio

## Continuo · 0 %
- [x] Dependabot y logs de Cloudflare activos (6ee4c35)
- [ ] CI en GitHub Actions con build y pruebas en cada push
- [ ] Preview por PR con Workers Builds
- [ ] Revisar las ediciones del cliente desde Keystatic
