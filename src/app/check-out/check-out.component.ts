import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
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

  

  logout(): void {
    this.authService.logout();
  }
 




cargarReservasPendientes(): void {
  this.hotel.obtenerReservaporEstado('Check-out').subscribe(
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
