import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-habitaciones',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './lista-habitaciones.component.html',
  styleUrl: './lista-habitaciones.component.css'
})
export class ListaHabitacionesComponent {
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
