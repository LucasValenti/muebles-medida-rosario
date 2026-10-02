// Contenido editable desde el panel (/keystatic). Los archivos YAML viven en src/content/
// y las fotos en src/assets/; Astro las optimiza al publicar.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const yaml = (carpeta: string) => glob({ pattern: '*.yaml', base: `./src/content/${carpeta}` });
const orden = z.number().int().default(10);

const catalogo = defineCollection({
  loader: yaml('catalogo'),
  schema: ({ image }) =>
    z.object({
      mueble: z.string(),
      orden,
      foto: image(),
      alt: z.string().default(''),
      encuadre: z.enum(['centro', 'arriba', 'abajo']).default('centro'),
      muestra: z.boolean().default(true),
      ambiente: z.string().default(''),
      terminacion: z.string().default(''),
      ancho: z.number().positive(),
      alto: z.number().positive(),
      prof: z.number().positive(),
      forma: z.enum(['generica', 'ese', 'bicolor', 'rombo', 'nicho']).default('generica'),
    }),
});

const encargos = defineCollection({
  loader: yaml('encargos'),
  schema: ({ image }) =>
    z.object({
      mueble: z.string(),
      orden,
      ambiente: z.string().default(''),
      foto: image(),
      alt: z.string().default(''),
      muestra: z.boolean().default(true),
      ancho: z.number().positive(),
      alto: z.number().positive(),
      forma: z.enum(['generica', 'placard', 'cocina', 'rack', 'biblioteca']).default('generica'),
    }),
});

const preguntas = defineCollection({
  loader: yaml('preguntas'),
  schema: z.object({ pregunta: z.string(), orden, respuesta: z.string() }),
});

const opiniones = defineCollection({
  loader: yaml('opiniones'),
  schema: z.object({
    nombre: z.string(),
    orden,
    texto: z.string(),
    mueble: z.string().default(''),
    pendiente: z.boolean().default(false),
  }),
});

// Ajustes de una sola entrada: negocio, portada y pasos
const ajustes = defineCollection({
  loader: yaml('ajustes'),
  schema: ({ image }) =>
    z.union([
      z.object({
        nombre: z.string(),
        whatsapp: z.string(),
        telefonoVisible: z.string(),
        telefono: z.string(),
        email: z.string(),
        instagram: z.string(),
        facebook: z.string(),
        direccion: z.string(),
        fotoTaller: image(),
        fotoTallerMuestra: z.boolean().default(true),
        videoTaller: z.string().nullish(),
      }),
      z.object({
        titulo: z.string(),
        tituloItalica: z.string().default(''),
        bajada: z.string(),
        destacada: z.string(),
      }),
      z.object({ lista: z.array(z.object({ titulo: z.string(), texto: z.string() })) }),
    ]),
});

export const collections = { catalogo, encargos, preguntas, opiniones, ajustes };
