import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-confirmacion-contrasena',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './confirmacion-contrasena.component.html',
  styleUrl: './confirmacion-contrasena.component.css'
})
export class ConfirmacionContrasenaComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string = '';
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private Service: ServiceService,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordsMatch });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  passwordsMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
        this.Service.resetPassword(this.token, this.resetPasswordForm.value.password).subscribe(
            (response) => {
                if (response.message) {
                    this.message = response.message; // Mostrar el mensaje del backend
                } else {
                    this.message = 'Contraseña restablecida con éxito.'; // Mensaje por defecto
                }

                // Esperar 3 segundos antes de redirigir al login
                setTimeout(() => {
                    this.router.navigate(['/iniciarSesion']);
                }, 3000); // 3000 milisegundos = 3 segundos
            },
            (error) => {
                console.error('Error en la solicitud:', error); // Log del error
                if (error.error && error.error.error) {
                    this.message = error.error.error; // Mostrar mensaje de error del backend
                } else {
                    this.message = 'Hubo un error al restablecer la contraseña. Inténtalo de nuevo.';
                }
            }
        );
    }
}
}
