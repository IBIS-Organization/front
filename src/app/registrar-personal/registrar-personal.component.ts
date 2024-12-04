import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar-personal',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule],
  templateUrl: './registrar-personal.component.html',
  styleUrl: './registrar-personal.component.css'
})
export class RegistrarPersonalComponent {
  showModal: boolean = false;
  errorMessage: string = '';


  @ViewChild('registerForm') registerForm!: NgForm;
  constructor(
    private authService: ServiceService,
    private router: Router
  ) {}
  abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
    this.router.navigate(['/listarPersonal']);
  }

  aceptarModal(): void {
    this.cerrarModal();
  }


  logout(): void {
    this.authService.logout();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { firstName, lastName, email, password} = form.value;     
      this.authService.registerEmpleado({ firstName, lastName, email, password }).subscribe(
        (response: any) => {
          this.abrirModal();
        },
        (error: string) => {
          console.error('Error de registro:', error);
          this.errorMessage = error;
        }
      );
    }
  }
}
