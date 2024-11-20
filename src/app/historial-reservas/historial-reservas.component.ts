import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Habitacion, Reserva} from "../model/models.models";
import {ReservaServiceService} from "../service/reserva-service.service";
import {ServiceService} from "../service/service.service";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-historial-reservas',
  standalone: true,
  imports: [RouterLink, NgIf, CommonModule, FormsModule],
  templateUrl: './historial-reservas.component.html',
  styleUrl: './historial-reservas.component.css'
})
export class HistorialReservasComponent implements OnInit{
clienteId: number | null = null;
reservas : Reserva[] = [];
habitaciones : Habitacion[] = [];
constructor(private ReservasService : ReservaServiceService , private Service:ServiceService) {

}
  ngOnInit(): void {
    this.obtenerClienteId();
  }


  obtenerClienteId(): void {
    this.Service.getUserInfo().subscribe(
      (user) => {
        console.log('Usuario obtenido:', user);
        this.clienteId = user.id !== undefined?user.id:null;
        if (this.clienteId !== null) {
          this.obtenerHistorialReservas(this.clienteId);
        }
      },
      (error) => {
        console.error('Error al obtener la información del usuario', error);
      }
    );
  }


  obtenerHistorialReservas(clienteId: number): void {
    this.ReservasService.getReservasPorClienteId(clienteId).subscribe(
      (reservas) => {
        this.reservas = reservas;
        reservas.forEach((reserva) => {
          this.ReservasService.getHabitacionPorId(reserva.habitacionId).subscribe(
            (habitacion) => {
              this.habitaciones.push(habitacion);
              console.log(habitacion)
            },
            (error) => {
              console.error('Error al obtener los detalles de la habitación', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error al obtener el historial de reservas', error);
      }
    );
  }

}
