import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agregar-habitacion',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './agregar-habitacion.component.html',
  styleUrl: './agregar-habitacion.component.css'
})
export class AgregarHabitacionComponent {
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
