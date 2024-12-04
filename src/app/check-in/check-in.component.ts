import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.css'
})
export class CheckInComponent implements OnInit {
  showModal: boolean = false; // Controla la visibilidad del modal de Check-in
  showModalEdit: boolean = false; // Controla la visibilidad del modal de edición
  clienteSeleccionado: string = ''; // Almacena el cliente seleccionado
  editHora: number = 0; // Almacena la hora a editar
  editMinutos: number = 0; // Almacena los minutos a editar
  reservasPendientes: any[] = [];
  habitacionesMap: { [key: number]: any } = {};
  constructor(
    private authService: ServiceService,
    private hotel: HotelService
    
  ) {}
  // Lista de clientes
 
  ngOnInit(): void {
      this.cargarReservasPendientes();
  }
  // Método para registrar el Check-in
  registrarCheckOut(reservaId: number): void {
    this.hotel.realizarCheckOut(reservaId).subscribe(
      (reservaActualizada) => {
        this.showModal = true;
      },
      (error) => {
        console.error('Error al realizar el check-in', error);
        alert('No se pudo realizar el check-in.');
      }
    );
  }

  logout(): void {
    this.authService.logout();
  }
  // Método para cerrar el modal de Check-in
  closeModal() {
    this.showModal = false;
  }

  // Método para abrir el modal de edición
  openEditModal(cliente: any) {
  
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


  cargarReservasPendientes(): void {
    this.hotel.obtenerReservaporEstado('Check-in').subscribe(
      (reservas) => {
      
        this.reservasPendientes = reservas;
        this.cargarHabitaciones();
      },
      (error) => console.error('Error al cargar reservas pendientes', error)
    );
  }

  cargarHabitaciones(): void {
    this.reservasPendientes.forEach((reserva) => {
      this.ObtenerHabitacion(reserva.habitacionId);
    });
  }


  
  ObtenerHabitacion(id: number): void {
    if (!this.habitacionesMap[id]) { // Solo llama al backend si no está en el mapa
      this.hotel.obtenerHabitacionesporId(id).subscribe(
        (data) => {
          this.habitacionesMap[id] = data;
        },
        (error) => console.error('Error al obtener habitación', error)
      );
    }
  }
  

 
}
