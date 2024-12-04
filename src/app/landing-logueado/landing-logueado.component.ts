import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HotelService } from '../service/hotel.service';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {User} from "../model/models.models";
import {ServiceService} from "../service/service.service";

@Component({
  selector: 'app-landing-logueado',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule,FormsModule],
  templateUrl: './landing-logueado.component.html',
  styleUrl: './landing-logueado.component.css'
})
export class LandingLogueadoComponent implements OnInit{
  habitaciones: any [] = [];
  habitacion1: any;
  habitacion2: any;
  habitacion3: any;
  habitacion4: any;
  habitacion5: any;
  habitacion6: any;
  filtro = {categoria: '', capacidad:0, fechaInicio:'', fechaFin:''};
  ahora : any;
  deshabilitar: any;
  fingreso: string = '';
  user : User|null=null;

  constructor(private router: Router, private HabitacionService: HotelService, private Service: ServiceService){}
  ngOnInit(): void {
    this.getUserInfo();
    this.MostrarHabitaciones();
    this.MostrarHabitacionesporId1(1);
    this.MostrarHabitacionesporId2(2);
    this.MostrarHabitacionesporId3(3);
    this.MostrarHabitacionesporId4(4);
    this.MostrarHabitacionesporId5(5);
    this.MostrarHabitacionesporId6(6);
    const datepite = new DatePipe('en-Us')
    this.ahora = datepite.transform(new Date(),'yyyy-MM-dd')
  }
  CambioFecha(){
    this.deshabilitar = this.fingreso
  }
  FiltrarHabitaciones():void{
    if(this.filtro.fechaInicio && this.filtro.fechaFin && this.filtro.capacidad && this.filtro.categoria){
      this.router.navigate(['/habitacioneslogueado'], {
        queryParams:{
          categoria : this.filtro.categoria,
          capacidad : this.filtro.capacidad,
          fechaInicio : this.filtro.fechaInicio,
          fechaFin : this.filtro.fechaFin
        }
      });
    }
    else{
      alert('Porfavor complete todos los campos');
    }
  }

  logout(): void {
    this.Service.logout();
  }

  MostrarHabitaciones():void{
    this.HabitacionService.obtenerHabitaciones().subscribe(
      (data) => {
        this.habitaciones = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  MostrarHabitacionesporId1(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion1 = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  MostrarHabitacionesporId2(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion2 = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  MostrarHabitacionesporId3(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion3 = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  MostrarHabitacionesporId4(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion4 = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  MostrarHabitacionesporId5(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion5 = data;
      },
      (error) => {console.error('Error al obtener habitaciones', error)}
    );
  }

  getUserInfo(): void {
  
    this.Service.getUserInfo().subscribe({
      next: (data) => {
        this.user = data; // Asigna los detalles del usuario

      },
      error: (err) => {
        console.error('Error al obtener la información del usuario', err);
      }
    });
  }

  MostrarHabitacionesporId6(id: number):void{
    this.HabitacionService.obtenerHabitacionesporId(id).subscribe(
      (data) => {
        this.habitacion6 = data;
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
