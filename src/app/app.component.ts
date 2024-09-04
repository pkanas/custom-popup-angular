
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomPopUpComponent } from './custom-pop-up/custom-pop-up.component';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomPopUpComponent,FormsModule,CommonModule,FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'cutom-pop-up';
  isPopupVisible = false;
  name = '';
  age!: number;

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  onSubmit() {
    console.log('Form Submitted:', { name: this.name, age: this.age });
    alert(`Name: ${this.name}, Age: ${this.age}`);
    this.closePopup(); // Optionally close the popup after submission
  }
}
