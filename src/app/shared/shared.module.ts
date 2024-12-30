import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    SelectComponent,
  ],
  exports: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    InputComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
