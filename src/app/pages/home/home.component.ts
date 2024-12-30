import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlsComponent } from './components/controls/controls.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ImageProperties } from '../interfaces/imageProperties.interfaces';

@Component({
  selector: 'pages-home',
  standalone: true,
  imports: [CommonModule, ControlsComponent, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected uploadedImageSrc: string = '';

  protected imageProperties: ImageProperties = {
    overlayText: 'Texto de ejemplo', // Texto vacío por defecto
    overlayOpacity: 1, // Opacidad máxima por defecto
    backgroundColor: '#000000', // Fondo negro por defecto
    fontSize: 20, // Tamaño de fuente por defecto
    textPosition: 'center', // Posición centrada por defecto
    bold: false,
    italic: false,
    underline: false,
    padding: 10, // Padding por defecto
    gap: 10, // Distancia entre logo y texto por defecto
    overlayY: 50, // Ubicación inicial del overlay en el eje Y
    useDarkLogo: false, // Valor inicial
  };

  // Maneja el evento del componente hijo
  handleImageUpload(imageSrc: string): void {
    this.uploadedImageSrc = imageSrc;
  }

  public handleImageOptions(imageProperties: ImageProperties) {
    if (!imageProperties) return;
    this.imageProperties = imageProperties;
  }
}
