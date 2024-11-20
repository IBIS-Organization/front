import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-habitacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-habitacion.component.html',
  styleUrl: './editar-habitacion.component.css'
})
export class EditarHabitacionComponent {
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
