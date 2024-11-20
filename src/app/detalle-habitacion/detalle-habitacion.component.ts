import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { HotelService } from '../service/hotel.service';
import {CommonModule, DatePipe} from '@angular/common';
import {FormGroup, FormsModule} from "@angular/forms";
import {Habitacion, Reserva} from "../model/models.models";
import {ReservaServiceService} from "../service/reserva-service.service";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-detalle-habitacion',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './detalle-habitacion.component.html',
  styleUrl: './detalle-habitacion.component.css'
})
export class DetalleHabitacionComponent implements OnInit {
  ahora: any;
  deshabilitar: any;
  fingreso: string = '';
  habitacionId: number = 0;
  Habitacion: Habitacion = {} as Habitacion;
  fechaInicio: string = '';
  fechaFin: string = '';
  dniCliente: string = '';
  clienteId: number | null = null;
  showPaymentModal: boolean = false;
  paymentStatus: 'processing' | 'success' | 'error' = 'processing';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private HabitacionService: HotelService,
    private ReservaService: ReservaServiceService,
    private route: ActivatedRoute,
    private Service: ServiceService
  ) {
    this.habitacionId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.ObtenerHabitacion();
    const datepite = new DatePipe('en-Us')
    this.ahora = datepite.transform(new Date(), 'yyyy-MM-dd')
    this.obtenerClienteId();
  }

  obtenerClienteId(): void {
    this.Service.getUserInfo().subscribe(
      (user) => {
        console.log('Usuario obtenido:', user);
        this.clienteId = user.id !== undefined ? user.id : null;
      },
      (error) => {
        console.error('Error al obtener la información del usuario', error);
      }
    );
  }

  CambioFecha() {
    this.deshabilitar = this.fingreso
  }

  ObtenerHabitacion(): void {
    this.HabitacionService.obtenerHabitacionesporId(this.habitacionId).subscribe(
      (data) => this.Habitacion = data,
      (error) => console.error('error al obtener habitación')
    );
  }

  showProcessingPayment(): void {
    this.showPaymentModal = true;
    this.paymentStatus = 'processing';
    this.errorMessage = '';
  }

  closePaymentModal(): void {
    this.showPaymentModal = false;
    if (this.paymentStatus === 'success') {
      this.router.navigate(['/historial-reservas']);
    }
  }

  handleReservationError(error: any): void {
    this.paymentStatus = 'error';
    if (error.status === 500) {
      this.errorMessage = 'Error interno del servidor. La habitación podría no estar disponible para las fechas seleccionadas.';
    } else {
      this.errorMessage = 'Error al procesar la reserva. Por favor, intente nuevamente.';
    }
  }

  RealizarReserva(): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('Por favor inicia sesión para reservar.');
      return;
    }

    if (!this.clienteId) {
      console.error('El clienteId es null o no se pudo obtener del token');
      alert('No se pudo obtener el ID del cliente. Por favor, vuelve a iniciar sesión.');
      return;
    }

    if (!this.habitacionId) {
      console.error('El habitacionId es null o no está definido');
      alert('No se pudo obtener el ID de la habitación.');
      return;
    }

    // Validar fechas
    if (new Date(this.fechaFin) <= new Date(this.fechaInicio)) {
      alert('La fecha de salida debe ser posterior a la fecha de ingreso.');
      return;
    }

    // Mostrar el modal de procesamiento de pago
    this.showProcessingPayment();

    const reserva: Reserva = {
      habitacionId: this.habitacionId,
      clienteId: this.clienteId,
      dniCliente: this.dniCliente,
      nombreCliente: '',
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
    };

    console.log('Datos de la reserva:', reserva);

    // Realizar la solicitud al servicio de reserva después de mostrar el éxito del pago
    setTimeout(() => {
      this.ReservaService.CrearReserva(reserva, token).subscribe({
        next: (data) => {
          console.log('Reserva creada exitosamente:', data);
          this.paymentStatus = 'success';
        },
        error: (error) => {
          console.error('Error al crear la reserva:', error);
          this.handleReservationError(error);
        }
      });
    }, 2000);
  }

  ObtenerCliente(token: string): number {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
      return 0;
    }
  }
}
