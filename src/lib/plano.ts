// Planta: una pieza de medida propia apoyada contra la pared, dentro del espacio que tenés.
// Unidades del viewBox 360 × 260; medidas en centímetros.
export const VISTA = { ancho: 360, alto: 260 };
export const ESPACIO = { min: 20, max: 140, inicial: 80, prof: 70 };
const K = 2.2;
const PARED = 34;

export function geometria(espacio: number, pieza: { ancho: number; prof: number }) {
  const ew = espacio * K;
  const eh = ESPACIO.prof * K;
  const ex = (VISTA.ancho - ew) / 2;
  const w = pieza.ancho * K;
  const h = pieza.prof * K;
  const x = (VISTA.ancho - w) / 2;
  const y = PARED;
  const entra = pieza.ancho <= espacio;
  const libre = Math.max(0, (espacio - pieza.ancho) / 2);
  const yCotaPieza = y + h + 20;
  const yCotaEspacio = PARED + eh + 22;
  return {
    espacio: { x: ex, y: PARED, width: ew, height: eh },
    pieza: { x, y, width: w, height: h },
    piezaExtA: { x1: x, y1: y + h + 4, x2: x, y2: yCotaPieza + 5 },
    piezaExtB: { x1: x + w, y1: y + h + 4, x2: x + w, y2: yCotaPieza + 5 },
    piezaCota: { x1: x, y1: yCotaPieza, x2: x + w, y2: yCotaPieza },
    piezaTexto: { x: VISTA.ancho / 2, y: yCotaPieza + 13 },
    libreCota: { x1: ex, y1: y + h / 2, x2: x, y2: y + h / 2 },
    libreTexto: { x: ex + (x - ex) / 2, y: y + h / 2 - 11 },
    espacioCota: { x1: ex, y1: yCotaEspacio, x2: ex + ew, y2: yCotaEspacio },
    espacioTexto: { x: VISTA.ancho / 2, y: yCotaEspacio + 14 },
    entra,
    libre: Math.round(libre * 10) / 10,
    // La cota de lo libre solo se dibuja si hay lugar para leerla
    muestraLibre: entra && libre * K >= 14,
  };
}
