import type { Medidas } from './contenido';

export const cm = (n: number) => n.toLocaleString('es-AR');
export const textoMedidas = (m: Medidas) => `${cm(m.ancho)} × ${cm(m.alto)} × ${cm(m.prof)} cm`;

// Un valor sigue pendiente mientras tenga [corchetes], XXXX o el email de ejemplo
export const pendiente = (valor: string) => /\[|X{4,}|ejemplo\.com/.test(valor);

export const enlaceWhatsApp = (numero: string, mensaje = 'Hola! Quiero consultar por un mueble.') =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
