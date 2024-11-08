import { HttpClient } from '@angular/common/http';
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
}
