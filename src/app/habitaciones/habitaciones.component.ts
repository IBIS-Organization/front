import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {HotelService} from "../service/hotel.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent implements OnInit{
  filtro = {categoria: '', capacidad:0, fechaInicio:'', fechaFin:''};
  habitaciones: any [] = [];
  constructor(private habitacionservice: HotelService, private route: ActivatedRoute ) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filtro.categoria = params['categoria'];
      this.filtro.capacidad = params['capacidad'];
      this.filtro.fechaInicio = params['fechaInicio'];
      this.filtro.fechaFin = params['fechaFin'];
      this.FiltrarHabitaciones();
    });

  }

  FiltrarHabitaciones():void{

      this.habitacionservice.filtrarHabitaciones(this.filtro).subscribe(
        (data) => {
          this.habitaciones = data;
         
        },
        (error) => {
          console.error('error al obtener habitaciones', error);
        }
      );
  }
}
