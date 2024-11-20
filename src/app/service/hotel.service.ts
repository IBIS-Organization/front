import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../model/models.models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
private apiUrl = 'http://localhost:8080/api/v1/hoteles'
  constructor(private http:HttpClient) { }
  obtenerHabitaciones(): Observable < Habitacion[] >{
    return this.http.get < Habitacion[] > (`${this.apiUrl}/obtenerhabitaciones`)
  }
  obtenerHabitacionesporId(id:number): Observable < Habitacion >{
    return this.http.get < Habitacion > (`${this.apiUrl}/obtenerhabitacion/${id}`)
  }
  filtrarHabitaciones(filtro : {categoria: string, capacidad: number, fechaInicio:string, fechaFin:string}): Observable < any[] >{
    const params = new HttpParams()
      .set('categoria', filtro.categoria)
      .set('capacidad', filtro.capacidad)
      .set('fechaInicio', filtro.fechaInicio)
      .set('fechaFin', filtro.fechaFin);
    return this.http.get < any[]>(`${this.apiUrl}/filtrarhabitaciones`,{params});
  }
}
