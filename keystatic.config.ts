import { config, collection, singleton, fields } from '@keystatic/core';

// Producción: Keystatic Cloud (el cliente entra con su email). Desarrollo: archivos locales.
// El proyecto de Keystatic Cloud se configura con PUBLIC_KEYSTATIC_PROJECT="equipo/proyecto".
const proyectoCloud = import.meta.env.PUBLIC_KEYSTATIC_PROJECT as string | undefined;

const encuadre = fields.select({
  label: 'Encuadre de la foto',
  description: 'Qué parte de la foto se ve cuando se recorta en cuadrado.',
  options: [
    { label: 'Centro', value: 'centro' },
    { label: 'Arriba', value: 'arriba' },
    { label: 'Abajo', value: 'abajo' },
  ],
  defaultValue: 'centro',
});

const muestra = fields.checkbox({
  label: 'Es una foto de muestra',
  description: 'Marcalo si la foto no es de un mueble hecho por el taller. Aparece la etiqueta "Muestra".',
  defaultValue: true,
});

// Nombre visible y nombre de archivo (el segundo se arma solo)
const nombre = (label: string) =>
  fields.slug({ name: { label }, slug: { label: 'Nombre del archivo', description: 'Se completa solo. No hace falta tocarlo.' } });

const centimetros = (label: string, defaultValue: number) =>
  fields.number({ label: `${label} (cm)`, defaultValue, step: 0.5, validation: { isRequired: true, min: 1, max: 1000 } });

export default config({
  storage: proyectoCloud ? { kind: 'cloud' } : { kind: 'local' },
  ...(proyectoCloud ? { cloud: { project: proyectoCloud } } : {}),
  locale: 'es-ES',
  ui: {
    brand: { name: 'Tu sitio' },
    navigation: {
      'Muebles': ['catalogo', 'encargos'],
      'Textos': ['portada', 'pasos', 'preguntas', 'opiniones'],
      'Tu negocio': ['negocio'],
    },
  },

  singletons: {
    negocio: singleton({
      label: 'Datos del negocio',
      path: 'src/content/ajustes/negocio',
      format: { data: 'yaml' },
      schema: {
        nombre: fields.text({ label: 'Nombre de la marca', defaultValue: '[Nombre de marca]' }),
        whatsapp: fields.text({
          label: 'WhatsApp',
          description: 'Número completo sin + ni espacios. Ejemplo: 5493411234567',
          defaultValue: '549341XXXXXXX',
        }),
        telefonoVisible: fields.text({ label: 'Teléfono como se muestra', description: 'Ejemplo: 341 123-4567', defaultValue: '[341 000-0000]' }),
        telefono: fields.text({ label: 'Teléfono para llamar', description: 'Con código de país. Ejemplo: +543411234567', defaultValue: '+54341XXXXXXX' }),
        email: fields.text({ label: 'Email', defaultValue: 'contacto@ejemplo.com' }),
        instagram: fields.text({ label: 'Usuario de Instagram', description: 'Sin la @', defaultValue: '[tu_instagram]' }),
        facebook: fields.text({ label: 'Usuario de Facebook', defaultValue: '[tu_facebook]' }),
        direccion: fields.text({ label: 'Dirección del taller', defaultValue: '[Dirección del taller]' }),
        fotoTaller: fields.image({
          label: 'Foto del taller',
          directory: 'src/assets/taller',
          publicPath: '../../assets/taller/',
          validation: { isRequired: true },
        }),
        fotoTallerMuestra: fields.checkbox({ label: 'La foto del taller es de muestra', defaultValue: true }),
        videoTaller: fields.url({
          label: 'Video del taller (opcional)',
          description: 'Link directo a un archivo .mp4. Si está vacío se muestra la foto.',
        }),
      },
    }),

    portada: singleton({
      label: 'Portada',
      path: 'src/content/ajustes/portada',
      format: { data: 'yaml' },
      schema: {
        titulo: fields.text({ label: 'Título', defaultValue: 'Los muebles que ves en línea, con su' }),
        tituloItalica: fields.text({ label: 'Final del título (va en itálica)', defaultValue: 'medida justa.' }),
        bajada: fields.text({ label: 'Texto debajo del título', multiline: true }),
        destacada: fields.relationship({
          label: 'Pieza de la foto principal',
          collection: 'catalogo',
          validation: { isRequired: true },
        }),
      },
    }),

    pasos: singleton({
      label: 'Cómo funciona',
      path: 'src/content/ajustes/pasos',
      format: { data: 'yaml' },
      schema: {
        lista: fields.array(
          fields.object({
            titulo: fields.text({ label: 'Paso' }),
            texto: fields.text({ label: 'Explicación', multiline: true }),
          }),
          { label: 'Pasos', itemLabel: (p) => p.fields.titulo.value || 'Paso', validation: { length: { min: 1, max: 6 } } },
        ),
      },
    }),
  },

  collections: {
    catalogo: collection({
      label: 'Catálogo (medida propia)',
      path: 'src/content/catalogo/*',
      slugField: 'mueble',
      format: { data: 'yaml' },
      columns: ['mueble', 'orden'],
      schema: {
        mueble: nombre('Nombre de la pieza'),
        orden: fields.integer({ label: 'Orden', description: 'Las piezas se muestran de menor a mayor.', defaultValue: 10 }),
        foto: fields.image({
          label: 'Foto',
          description: 'Podés subirla directo desde el celular. Se achica sola para la web.',
          directory: 'src/assets/catalogo',
          publicPath: '../../assets/catalogo/',
          validation: { isRequired: true },
        }),
        alt: fields.text({ label: 'Descripción de la foto', description: 'Qué se ve. Sirve para Google y para personas ciegas.' }),
        encuadre,
        muestra,
        ambiente: fields.text({ label: 'Ambiente', description: 'Living, Dormitorio, Pared…', defaultValue: 'Living' }),
        terminacion: fields.text({ label: 'Color o terminación', defaultValue: 'Roble' }),
        ancho: centimetros('Ancho', 50),
        alto: centimetros('Alto', 50),
        prof: centimetros('Profundidad', 35),
        forma: fields.select({
          label: 'Forma del dibujo',
          description: 'El dibujo técnico se arma solo con las medidas. Si tu mueble no se parece a ninguna, elegí "Genérica" y pedí que te armen su forma.',
          options: [
            { label: 'Genérica (caja con medidas)', value: 'generica' },
            { label: 'Mesa en S', value: 'ese' },
            { label: 'Caja con estante (bicolor)', value: 'bicolor' },
            { label: 'Rombo de pared', value: 'rombo' },
            { label: 'Con nicho lateral', value: 'nicho' },
          ],
          defaultValue: 'generica',
        }),
      },
    }),

    encargos: collection({
      label: 'Trabajos a medida',
      path: 'src/content/encargos/*',
      slugField: 'mueble',
      format: { data: 'yaml' },
      columns: ['mueble', 'orden'],
      schema: {
        mueble: nombre('Mueble'),
        orden: fields.integer({ label: 'Orden', defaultValue: 10 }),
        ambiente: fields.text({ label: 'Ambiente', defaultValue: 'Living' }),
        foto: fields.image({
          label: 'Foto del trabajo',
          directory: 'src/assets/encargos',
          publicPath: '../../assets/encargos/',
          validation: { isRequired: true },
        }),
        alt: fields.text({ label: 'Descripción de la foto' }),
        muestra,
        ancho: centimetros('Ancho', 200),
        alto: centimetros('Alto', 200),
        forma: fields.select({
          label: 'Forma del dibujo',
          options: [
            { label: 'Genérica (caja con medidas)', value: 'generica' },
            { label: 'Placard', value: 'placard' },
            { label: 'Cocina', value: 'cocina' },
            { label: 'Rack de TV', value: 'rack' },
            { label: 'Biblioteca', value: 'biblioteca' },
          ],
          defaultValue: 'generica',
        }),
      },
    }),

    preguntas: collection({
      label: 'Preguntas frecuentes',
      path: 'src/content/preguntas/*',
      slugField: 'pregunta',
      format: { data: 'yaml' },
      schema: {
        pregunta: nombre('Pregunta'),
        orden: fields.integer({ label: 'Orden', defaultValue: 10 }),
        respuesta: fields.text({ label: 'Respuesta', multiline: true }),
      },
    }),

    opiniones: collection({
      label: 'Opiniones de clientes',
      path: 'src/content/opiniones/*',
      slugField: 'nombre',
      format: { data: 'yaml' },
      schema: {
        nombre: nombre('Nombre del cliente'),
        orden: fields.integer({ label: 'Orden', defaultValue: 10 }),
        texto: fields.text({ label: 'Opinión', multiline: true }),
        mueble: fields.text({ label: 'Mueble que le hicieron' }),
        pendiente: fields.checkbox({
          label: 'Es un texto de ejemplo',
          description: 'Desmarcalo cuando cargues una opinión real.',
          defaultValue: false,
        }),
      },
    }),
  },
});
