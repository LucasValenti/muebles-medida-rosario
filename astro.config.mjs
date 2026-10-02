import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// En desarrollo el panel guarda en archivos locales y necesita Node; Cloudflare se usa solo al compilar
const enDesarrollo = process.argv.includes('dev');

export default defineConfig({
  // Cambiar por el dominio real cuando se publique
  site: 'https://ejemplo.com.ar',
  // Las páginas se generan estáticas; solo el panel /keystatic corre en el servidor
  output: 'static',
  adapter: enDesarrollo ? undefined : cloudflare({ imageService: 'compile' }),
  integrations: [react(), keystatic()],
});
