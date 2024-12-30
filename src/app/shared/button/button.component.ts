import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { ButtonField } from '../interfaces/button.interface';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  public buttonField = input.required<ButtonField>();

  public sendValue = output<void>();

  public inputEvent(): void {
    this.buttonField().class = !this.buttonField().class;
    this.sendValue.emit();
  }
}
