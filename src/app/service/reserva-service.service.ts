import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Habitacion, Reserva} from "../model/models.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservaServiceService {
  private api_url = 'http://localhost:8080/api/v1/hoteles';
  constructor(private  Http: HttpClient) { }

  CrearReserva (reserva : Reserva, token : string):Observable<Reserva>{
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.Http.post<Reserva>(`${this.api_url}`, reserva, { headers });


  }
  getReservasPorClienteId(clienteId: number): Observable<Reserva[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.Http.get<Reserva[]>(`${this.api_url}/usuario/${clienteId}`, { headers });
  }
  getHabitacionPorId(habitacionId: number): Observable<Habitacion> {
    return this.Http.get<Habitacion>(`${this.api_url}/obtenerhabitacion/${habitacionId}`);
  }
}
