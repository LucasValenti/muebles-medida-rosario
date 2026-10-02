// Lectura del contenido editable. Los componentes piden los datos acá, nunca a los YAML directo.
import { getCollection, getEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';

export type FormaCatalogo = 'generica' | 'ese' | 'bicolor' | 'rombo' | 'nicho';
export type FormaEncargo = 'generica' | 'placard' | 'cocina' | 'rack' | 'biblioteca';
export type Forma = FormaCatalogo | FormaEncargo;

export type Medidas = { ancho: number; alto: number; prof: number };

export type Pieza = {
  id: string;
  mueble: string;
  ambiente: string;
  terminacion: string;
  foto: ImageMetadata;
  fotos: ImageMetadata[];
  alt: string;
  encuadre: string;
  muestra: boolean;
  medidas: Medidas;
  forma: FormaCatalogo;
};

export type Encargo = {
  id: string;
  mueble: string;
  ambiente: string;
  foto: ImageMetadata;
  alt: string;
  muestra: boolean;
  ancho: number;
  alto: number;
  forma: FormaEncargo;
};

export type Negocio = {
  nombre: string;
  whatsapp: string;
  telefonoVisible: string;
  telefono: string;
  email: string;
  instagram: string;
  facebook: string;
  direccion: string;
  fotoTaller: ImageMetadata;
  fotoTallerMuestra: boolean;
  videoTaller?: string | null;
  ciudad: string;
  provincia: string;
};

const ENCUADRES: Record<string, string> = { centro: '50% 50%', arriba: '50% 22%', abajo: '50% 66%' };
const porOrden = <T extends { data: { orden: number } }>(a: T, b: T) => a.data.orden - b.data.orden;

export async function catalogo(): Promise<Pieza[]> {
  const items = (await getCollection('catalogo')).sort(porOrden);
  return items.map(({ id, data: d }) => ({
    id,
    mueble: d.mueble,
    ambiente: d.ambiente,
    terminacion: d.terminacion,
    foto: d.foto,
    fotos: [d.foto, ...d.masFotos],
    alt: d.alt || d.mueble,
    encuadre: ENCUADRES[d.encuadre] ?? ENCUADRES.centro,
    muestra: d.muestra,
    medidas: { ancho: d.ancho, alto: d.alto, prof: d.prof },
    forma: d.forma,
  }));
}

export async function encargos(): Promise<Encargo[]> {
  const items = (await getCollection('encargos')).sort(porOrden);
  return items.map(({ id, data: d }) => ({ id, ...d, alt: d.alt || d.mueble }));
}

export async function preguntas() {
  return (await getCollection('preguntas')).sort(porOrden).map((p) => p.data);
}

// Hasta que haya opiniones reales se muestran dos de ejemplo, para que el cliente vea cómo queda
export async function opiniones() {
  const todas = (await getCollection('opiniones')).sort(porOrden).map((o) => o.data);
  const reales = todas.filter((o) => !o.pendiente);
  return reales.length > 0 ? reales : todas.slice(0, 2);
}

export async function pasos(): Promise<{ titulo: string; texto: string }[]> {
  const e = await getEntry('ajustes', 'pasos');
  return (e?.data as { lista: { titulo: string; texto: string }[] } | undefined)?.lista ?? [];
}

export async function negocio(): Promise<Negocio> {
  const e = await getEntry('ajustes', 'negocio');
  if (!e) throw new Error('Falta src/content/ajustes/negocio.yaml');
  const d = e.data as Omit<Negocio, 'ciudad' | 'provincia'>;
  return { ...d, instagram: d.instagram.replace(/^@/, ''), ciudad: 'Rosario', provincia: 'Santa Fe' };
}

export async function portada(): Promise<{ titulo: string; tituloItalica: string; bajada: string; destacada: Pieza | undefined }> {
  const e = await getEntry('ajustes', 'portada');
  const d = e?.data as { titulo: string; tituloItalica: string; bajada: string; destacada: string };
  const piezas = await catalogo();
  const destacada = piezas.find((p) => p.id === d.destacada) ?? piezas[0];
  return { titulo: d.titulo, tituloItalica: d.tituloItalica, bajada: d.bajada, destacada };
}
