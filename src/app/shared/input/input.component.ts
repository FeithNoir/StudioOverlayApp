import { Component, input, output } from '@angular/core';
import { InputField } from '../interfaces/input.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public inputField = input.required<InputField>();
  public sendValue = output<Event>();

  public inputEvent(event: Event): void {
    this.sendValue.emit(event);
  }
}
