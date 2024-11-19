import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MainService } from '../../../services/main/main.service';
import { ContactsService } from '../../../services/contacts/contacts.service';
@Component({
  selector: 'app-contact-block',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, ToastModule, ButtonModule, RippleModule],
  templateUrl: './contact-block.component.html',
  styleUrl: './contact-block.component.css',
  providers: [MessageService]
})
export class ContactBlockComponent {
  @Input() showImage: boolean = false;
  @Input() showForm: boolean = false;
  @Input() costumHeigh: string = "408px";
  formulario: FormGroup = this.fb.group({});;

  dataService = inject(MainService);
  contactService = inject(ContactsService);
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
    });
  }

  showBottomRight() {
    // this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', key: 'br', life: 3000 });
    this.messageService.add({ key: 'confirm', severity: 'success', summary: 'Uploading your files.', life: 200000, });
  }
  enviarFormulario() {
    console.log('Envio prueba', this.formulario)
    if (this.formulario.valid){
      let dataForm=this.formulario.value;
      dataForm.mensaje = [{texto:String(dataForm.mensaje), dateText: new Date(), status:'pending'}]
      console.log('Data a giardar ',dataForm.mensaje)
      this.contactService.agregarOModificarMensaje(dataForm)
      console.log('Formulario enviado:', this.formulario.value);
      this.formulario.reset();
      this.messageService.add({ key: 'confirm', severity: 'custom', summary: 'Mensaje enviado', life: 2000, styleClass:'success-message'});


    } else {
      // this.messageService.add({ key: 'confirm', severity: 'custom', summary: 'Uploading your files.', life: 2000});

      console.log('Formulario no válido');
      const camposInvalidos = this.obtenerCamposInvalidos(this.formulario);
      console.log('Campos con error:', camposInvalidos);
      camposInvalidos.forEach(element=>{
        this.messageService.add({ key: 'confirm', severity: 'custom', summary: 'Campo invalido:'+' '+ element.toUpperCase(), life: 2000, styleClass:'error-message'});
      })
    }
  }

  obtenerCamposInvalidos(formGroup: FormGroup): string[] {
    const camposConErrores: string[] = [];

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control && control.invalid) {
        camposConErrores.push(key);
      }
    });

    return camposConErrores;
  }
}
