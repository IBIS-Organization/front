import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
habitaciones: any [] = [];
  constructor(private router: Router, private HabitacionService: HotelService){}
ngOnInit(): void {
  this.MostrarHabitaciones;
}
  MostrarHabitaciones(){
    this.HabitacionService.obtenerHabitaciones().subscribe(
      (data) => {
        this.habitaciones = data;
        console.log(data)
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }
  IniciarSesion(){
    this.router.navigate(['/iniciarSesion']);
  }

  Registrarse(){
    this.router.navigate(['/registro-usuario'])
  }
}
