import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-block',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-block.component.html',
  styleUrl: './contact-block.component.css'
})
export class ContactBlockComponent {
  formulario: FormGroup = this.fb.group({}); ;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulario enviado:', this.formulario.value);
    }
  }
}
