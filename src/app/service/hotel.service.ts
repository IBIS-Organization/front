import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion, Reserva } from '../model/models.models';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HotelService {
private apiUrl = `${environment.apiUrl}api/v1/hoteles`;
  constructor(private http:HttpClient) { }
  obtenerHabitaciones(): Observable < Habitacion[] >{
    return this.http.get < Habitacion[] > (`${this.apiUrl}/obtenerhabitaciones`)
  }

  obtenerReservaporEstado(estado:string): Observable <any[]>{
    return this.http.get <any[]> (`${this.apiUrl}/reservas/${estado}`)
  }


  realizarCheckIn(reservaId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${reservaId}/check-in`, {});
  }

  realizarCheckOut(reservaId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${reservaId}/check-out`, {});
  }

  imprimirBoletaReserva(id: number): Observable <Blob>{
    return this.http.get(`${this.apiUrl}/habitacion/${id}`, {responseType: 'blob'})
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
