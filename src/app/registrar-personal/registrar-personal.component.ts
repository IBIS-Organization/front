import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registrar-personal',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './registrar-personal.component.html',
  styleUrl: './registrar-personal.component.css'
})
export class RegistrarPersonalComponent {
  showModal: boolean = false;

  abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }

  aceptarModal(): void {
    this.cerrarModal();
  }
}
