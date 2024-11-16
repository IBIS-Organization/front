import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-personal',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css']
})
export class ListarPersonalComponent {
  showModal: boolean = false;
  empleadoSeleccionado: string = '';

  abrirModal(nombreEmpleado: string): void {
    this.empleadoSeleccionado = nombreEmpleado;
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }

  aceptarModal(): void {
    console.log(`Empleado deshabilitado: ${this.empleadoSeleccionado}`);
    this.cerrarModal();
  }
}
