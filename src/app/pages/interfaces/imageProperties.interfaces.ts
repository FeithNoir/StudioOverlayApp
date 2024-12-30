export interface ImageProperties {
  overlayText: string; // Texto superpuesto
  overlayOpacity: number; // Opacidad del fondo
  backgroundColor: string; // Color del fondo
  fontSize: number; // Tamaño de la fuente
  textPosition: 'left' | 'center' | 'right'; // Posición del texto
  bold: boolean;
  italic: boolean;
  underline: boolean;
  padding: number; // Espaciado del texto
  gap: number; // Espaciado entre el logo y el texto
  overlayY: number; // Posición del div en el eje Y
  useDarkLogo: boolean;
}
