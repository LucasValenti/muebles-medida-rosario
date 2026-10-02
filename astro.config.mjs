import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// En desarrollo el panel guarda en archivos locales y necesita Node; Cloudflare se usa solo al compilar
const enDesarrollo = process.argv.includes('dev');

export default defineConfig({
  // Cambiar por el dominio propio cuando lo tengan; se usa en la vista previa al compartir el link
  site: 'https://muebles-medida-rosario.kusak.workers.dev',
  // Las páginas se generan estáticas; solo el panel /keystatic corre en el servidor
  output: 'static',
  adapter: enDesarrollo ? undefined : cloudflare({ imageService: 'compile' }),
  integrations: [react(), keystatic()],
});
