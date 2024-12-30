import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { ImageProperties } from '../../../interfaces/imageProperties.interfaces';
import html2canvas from 'html2canvas';

@Component({
  selector: 'home-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  public imageSrc = input.required<string>();
  public imageProperties = input.required<ImageProperties>();

  protected isBold(value: boolean | undefined): string {
    if (value == undefined) return 'normal';
    return value ? 'bold' : 'normal';
  }

  protected isItalic(value: boolean | undefined): string {
    if (value == undefined) return 'normal';
    return value ? 'italic' : 'normal';
  }

  protected isUnderline(value: boolean | undefined): string {
    if (value == undefined) return 'none';
    return value ? 'underline' : 'none';
  }

  private async convertSvgToBase64(svgUrl: string): Promise<string> {
    const response = await fetch(svgUrl);
    const svgText = await response.text();
    const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(svgBlob);
    });
  }

  public async downloadImage(): Promise<void> {
    const previewElement = document.querySelector('.preview-image') as HTMLElement;

    if (!previewElement) {
      console.error('No se encontró el elemento de vista previa.');
      return;
    }

    // Obtener el elemento <img> del logo
    const logoImg = previewElement.querySelector('.logo') as HTMLImageElement;
    if (logoImg) {
      const svgUrl = logoImg.src;
      try {
        // Convertir el SVG a base64
        const base64Img = await this.convertSvgToBase64(svgUrl);
        // Reemplazar temporalmente la fuente del logo con el base64
        logoImg.src = base64Img;
      } catch (error) {
        console.error('Error al convertir el SVG:', error);
      }
    }

    // Renderizar el canvas
    html2canvas(previewElement).then((canvas) => {
      // Convertir el canvas a una URL de imagen
      const imgData = canvas.toDataURL('image/png');

      // Crear un enlace dinámico para descargar la imagen
      const link = document.createElement('a');
      link.href = imgData;
      link.download = this.imageProperties().overlayText; // Nombre del archivo descargado
      link.click();
    }).catch((error) => {
      console.error('Error al generar la imagen:', error);
    });
  }

}
