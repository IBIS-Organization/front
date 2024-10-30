import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  email:string='';
  password:string='';
  errorMessage:string|null=null;

  constructor(private service:ServiceService, private router:Router){}

  login(): void {
    if (!this.email || !this.password) {
      console.error('Email y contraseña son requeridos');
      return;
    }
  
    this.service.login(this.email, this.password, (token) => {
      console.log('Token recibido en el callback:', token);
    }).subscribe({
      next: () => this.router.navigate(['/principal']),
      error: (err) => {
        console.error('Login Failed', err);
        this.errorMessage = 'Error de autenticación. Por favor, revisa tus credenciales.';
      }
    });
  }
}
 