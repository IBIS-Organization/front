import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-registro-usuario',
  standalone: true, 
  imports : [RouterLink, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent {
  errorMessage: string | null = null;

  constructor(private http: HttpClient , private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { firstName, lastName, email, password } = form.value;
      const requestBody = {
        firstName,
        lastName,
        email,
        password
      };

      this.http.post(`${environment.apiUrl}api/v1/auth/registerclient`, requestBody)
      .subscribe(
        (response: any) => { 
       
          this.errorMessage = null;
          setTimeout(() => {
            this.router.navigate(['/iniciarSesion']);
             }, 1000);
        },
        (error: HttpErrorResponse) => {
          console.error('Error de registro:', error);
          if (error.error) {
            this.errorMessage = error.error; // Mostrar el mensaje de error del backend
          } else {
            this.errorMessage = 'Hubo un error al registrar el usuario.';
          }
        }
      );
    }
  }
}
