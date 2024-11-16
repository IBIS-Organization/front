import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-datos-personal',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './editar-datos-personal.component.html',
  styleUrl: './editar-datos-personal.component.css'
})
export class EditarDatosPersonalComponent {
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
