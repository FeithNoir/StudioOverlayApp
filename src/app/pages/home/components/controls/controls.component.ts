import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { ImageProperties } from '../../../interfaces/imageProperties.interfaces';
import { SharedModule } from '../../../../shared/shared.module';
import { InputField } from '../../../../shared/interfaces/input.interface';
import { SelectField } from '../../../../shared/interfaces/select.interface';
import { ButtonField } from '../../../../shared/interfaces/button.interface';

@Component({
  selector: 'home-controls',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  protected imageUploaded = output<string>();
  protected isImgSrc: boolean = false;
  protected isChangeImage:  string = 'Subir';

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

  protected textValue: InputField = {
    label: 'Texto',
    type: 'text',
    placeholder: 'Escribe tu texto aquí',
    value: this.imageProperties.overlayText,
  }

  protected opacityValue: InputField = {
    label: 'Opacidad del fondo',
    type: 'range',
    value: this.imageProperties.overlayOpacity,
    min: 0,
    max: 1,
    step: 0.1
  }

  protected colorValue: InputField = {
    label: 'Color del fondo',
    type: 'color',
    value: this.imageProperties.backgroundColor,
  }

  protected fontValue: InputField = {
    label: 'Tamaño de fuente',
    type: 'number',
    value: this.imageProperties.fontSize,
    min: 10,
    max: 100,
  }

  protected textPosition: SelectField = {
    label: 'Posición del texto',
    value: this.imageProperties.fontSize,
    options: [
      { label: 'Izquierda', value: 'start' },
      { label: 'Centro', value: 'center' },
      { label: 'Derecha', value: 'end' },
    ]
  }

  protected buttonsOptions: ButtonField[] = [
    { name: 'Negrita', class: this.imageProperties.bold },
    { name: 'Cursiva', class: this.imageProperties.italic },
    { name: 'Subrayado', class: this.imageProperties.underline },
  ];

  protected paddingValue: InputField = {
    label: 'Padding',
    type: 'range',
    value: this.imageProperties.padding,
    min: 0,
    max: 50,
  }

  protected distanceValue: InputField = {
    label: 'Distancia entre logo y texto',
    type: 'range',
    value: this.imageProperties.gap,
    min: 0,
    max: 50,
  }

  protected verticalValue: InputField = {
    label: 'Ubicación del eje Y',
    type: 'range',
    value: this.imageProperties.overlayY,
    min: 0,
    max: 100,
  }

  public imageOptions = output<ImageProperties>();

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageSrc = e.target?.result as string;
        if (!imageSrc) return;
        this.isImgSrc = true;
        this.isChangeImage = 'Cambiar';
        this.imageUploaded.emit(imageSrc);
      };

      reader.readAsDataURL(file);
    }
  }

  onOverlayTextChange(event: Event): void {
    this.imageProperties.overlayText = (event.target as HTMLInputElement).value;
    this.imageOptions.emit(this.imageProperties);
  }

  onOverlayOpacityChange(event: Event): void {
    this.imageProperties.overlayOpacity = parseFloat(
      (event.target as HTMLInputElement).value
    );
    this.imageOptions.emit(this.imageProperties);
  }

  onBackgroundColorChange(event: Event): void {
    this.imageProperties.backgroundColor = (
      event.target as HTMLInputElement
    ).value;
    this.imageOptions.emit(this.imageProperties);
  }

  onFontSizeChange(event: Event): void {
    this.imageProperties.fontSize = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    this.imageOptions.emit(this.imageProperties);
  }

  onTextPositionChange(event: Event): void {
    this.imageProperties.textPosition = (event.target as HTMLSelectElement)
      .value as 'left' | 'center' | 'right';
    this.imageOptions.emit(this.imageProperties);
  }

  toggleBold(): void {
    this.imageProperties.bold = !this.imageProperties.bold;
    this.imageOptions.emit(this.imageProperties);
  }

  toggleItalic(): void {
    this.imageProperties.italic = !this.imageProperties.italic;
    this.imageOptions.emit(this.imageProperties);
  }

  toggleUnderline(): void {
    this.imageProperties.underline = !this.imageProperties.underline;
    this.imageOptions.emit(this.imageProperties);
  }

  onPaddingChange(event: Event): void {
    this.imageProperties.padding = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    this.imageOptions.emit(this.imageProperties);
  }

  onGapChange(event: Event): void {
    this.imageProperties.gap = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    this.imageOptions.emit(this.imageProperties);
  }

  onOverlayYChange(event: Event): void {
    this.imageProperties.overlayY = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    this.imageOptions.emit(this.imageProperties);
  }

  toggleLogo(): void {
    this.imageProperties.useDarkLogo = !this.imageProperties.useDarkLogo;
    this.imageOptions.emit(this.imageProperties);
  }
}
