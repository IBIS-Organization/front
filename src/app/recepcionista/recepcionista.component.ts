import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { User } from '../model/models.models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recepcionista',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './recepcionista.component.html',
  styleUrl: './recepcionista.component.css'
})
export class RecepcionistaComponent {
  user: User = { firstName: '', lastName: '', email: '' };  // Información del usuario
  isNameDisabled: boolean = true;
isLastNameDisabled: boolean = true;
isEmailDisabled: boolean = true;

  
    // Control de visibilidad de contraseña
    showPassword: boolean = false;
  
    // Variable para controlar el modo edición
    editMode: boolean = false;
    constructor(
      private authService: ServiceService
    ) {}

    logout(): void {
      this.authService.logout();
    }
    


    ngOnInit(): void {
      // Obtener la información actual del usuario usando el servicio
      this.authService.getUserInfo().subscribe({
        next: (data) => {
          this.user = data;
         
        },
        error: (err) => {
          console.error('Error al obtener la información del usuario', err);
        }
      });
    }
  
  
    toggleField(field: string): void {
      if (field === 'name') {
        this.isNameDisabled = !this.isNameDisabled; // Alterna el estado de habilitado/deshabilitado
      } else if (field === 'lastName') {
        this.isLastNameDisabled = !this.isLastNameDisabled; // Alterna el estado de habilitado/deshabilitado
      } else if(field === 'email') {
        this.isEmailDisabled = !this.isEmailDisabled;
      }
    }
  
    onSubmit(): void {
      
      this.updateUserProfile();
      
    }
    updateUserProfile(): void {
      this.authService.updateUserProfile(this.user).subscribe({
        next: (updatedUser) => {
          alert('Perfil actualizado exitosamente');
          window.location.reload();
        },
        error: (err) => {
          console.error('Error al actualizar el perfil', err);
          alert(err.error.message || 'Hubo un error al actualizar el perfil');
        }
      });
    }
}