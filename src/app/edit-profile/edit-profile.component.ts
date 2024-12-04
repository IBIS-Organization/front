import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../model/models.models';
import { ServiceService } from '../service/service.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit{
  user: User = { firstName: '', lastName: '', email: '' };  // Información del usuario
  isNameDisabled: boolean = true;
isLastNameDisabled: boolean = true;
isEmailDisabled: boolean = true;
  constructor(private profileService: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener la información actual del usuario usando el servicio
    this.profileService.getUserInfo().subscribe({
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
    this.profileService.updateUserProfile(this.user).subscribe({
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
