import { Component, input, output } from '@angular/core';
import { SelectField } from '../interfaces/select.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  public selectField = input.required<SelectField>();
  public sendValue = output<Event>();

  public selectEvent(event: Event): void {
    this.sendValue.emit(event);
  }
}
