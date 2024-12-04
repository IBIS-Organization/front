import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ReservaServiceService } from '../service/reserva-service.service';
import { Habitacion, Reserva } from '../model/models.models';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterLink],
  templateUrl: './pendientes.component.html',
  styleUrl: './pendientes.component.css'
})
export class PendientesComponent implements OnInit{
  habitacionId: number = 0;
  Habitacion: Habitacion = {} as Habitacion;
  showModal: boolean = false; // Controla la visibilidad del modal de Check-in
  showModalEdit: boolean = false; // Controla la visibilidad del modal de edición
  clienteSeleccionado: string = ''; // Almacena el cliente seleccionado
  editHora: number = 0; // Almacena la hora a editar
  editMinutos: number = 0; // Almacena los minutos a editar
  reservasPendientes: any[] = [];
  habitacionesMap: { [key: number]: any } = {};

  constructor(
    private authService: ServiceService,
    private hotel : HotelService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.cargarReservasPendientes();
  }


  // Método para registrar el Check-in
  registrarCheckIn(reservaId: number): void {
    this.hotel.realizarCheckIn(reservaId).subscribe(
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
    this.router.navigate(['/ckeck-in']);
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
  

  
  
  cargarReservasPendientes(): void {
    this.hotel.obtenerReservaporEstado('Pendiente').subscribe(
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
  
}
