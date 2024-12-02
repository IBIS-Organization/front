import { Component } from '@angular/core';

@Component({
  selector: 'app-recepcionista',
  standalone: true,
  imports: [],
  templateUrl: './recepcionista.component.html',
  styleUrl: './recepcionista.component.css'
})
export class RecepcionistaComponent {
    // Variables para los campos
    nombre: string = 'Yuliana';
    apellido: string = 'Cacho';
    contrasena: string = '********';
    correo: string = 'Yucacho2004@gmail.com';
  
    // Control de visibilidad de contraseña
    showPassword: boolean = false;
  
    // Variable para controlar el modo edición
    editMode: boolean = false;
  
    // Método para alternar entre edición y vista
    toggleEditMode() {
      this.editMode = !this.editMode;
      if (!this.editMode) {
        console.log('Datos guardados:', {
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.contrasena,
          correo: this.correo
        });
      }
    }
  
    // Método para alternar visibilidad de contraseña
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
}