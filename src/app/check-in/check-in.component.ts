import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent {
  showModal: boolean = false; // Controla la visibilidad del modal de Check-in
  showModalEdit: boolean = false; // Controla la visibilidad del modal de edición
  clienteSeleccionado: string = ''; // Almacena el cliente seleccionado
  editHora: number = 0; // Almacena la hora a editar
  editMinutos: number = 0; // Almacena los minutos a editar

  // Lista de clientes
  clientes = [
    { nombre: 'Yamir Vargas Alvitres', habitacion: 'Estándar con 1 cama', hora: '3:00 pm' },
    { nombre: 'Franco León Rojas', habitacion: 'Habitación deluxe', hora: '4:00 pm' },
  ];

  // Método para registrar el Check-in
  registrarCheckIn(nombre: string) {
    this.clienteSeleccionado = nombre;
    this.showModal = true;
  }

  // Método para cerrar el modal de Check-in
  closeModal() {
    this.showModal = false;
  }

  // Método para abrir el modal de edición
  openEditModal(cliente: any) {
    console.log('Cliente seleccionado:', cliente); // Depuración
    this.clienteSeleccionado = cliente.nombre; // Guarda el nombre del cliente seleccionado
    const [hora, minutos] = cliente.hora
      .replace('pm', '') // Elimina "pm" si está presente
      .split(':') // Divide en hora y minutos
      .map((x: string) => parseInt(x.trim())); // Convierte a número
    this.editHora = hora || 0; // Asigna la hora
    this.editMinutos = minutos || 0; // Asigna los minutos
    this.showModalEdit = true; // Muestra el modal de edición
  }
  
  // Método para cerrar el modal de edición
  closeEditModal() {
    this.showModalEdit = false;
  }

  // Método para guardar la edición
  guardarEdicion() {
    const cliente = this.clientes.find((c) => c.nombre === this.clienteSeleccionado);
    if (cliente) {
      cliente.hora = `${this.editHora.toString().padStart(2, '0')} : ${this.editMinutos
        .toString()
        .padStart(2, '0')} pm`; // Actualiza la hora en formato
    }
    this.closeEditModal(); // Cierra el modal de edición
}
}
