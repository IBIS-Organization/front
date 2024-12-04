import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-lista-habitaciones',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './lista-habitaciones.component.html',
  styleUrl: './lista-habitaciones.component.css'
})
export class ListaHabitacionesComponent implements OnInit{
  habitaciones: any [] = [];
  showModal: boolean = false;
  constructor(
    private authService: ServiceService,
    private hotel: HotelService
    
  ) {}

  ngOnInit(): void {
    this.MostrarHabitaciones();
  }
  abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }

  aceptarModal(): void {
    this.cerrarModal();
  }

  logout(): void {
    this.authService.logout();
  }


  MostrarHabitaciones():void{
    this.hotel.obtenerHabitaciones().subscribe(
      (data) => {
       
        this.habitaciones = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }
}
