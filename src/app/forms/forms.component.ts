import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._formBuilder.group({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required])
    });
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value); // Log the form values if the form is valid
    } else {
      console.log('Form is invalid');
      this.form.markAllAsTouched(); // Mark all controls as touched to show validation messages
    }
  }
}
