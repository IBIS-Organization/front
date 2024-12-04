import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import {Empleado, User} from "../model/models.models";
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api_url = `${environment.apiUrl}api/v1/auth`;
  private api_urlempleado = `${environment.apiUrl}api/v1/empleados`;
  private tokenKey = 'authToken';
  constructor(private http:HttpClient, private router:Router) { }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${this.api_urlempleado}/delete/${id}`);
  }


  changePassword(email: string, newPassword: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('newPassword', newPassword);
  
    return this.http.post<any>(`${this.api_url}/change-password-empleado`, null, { params });
  }

  getEmailFromToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.email || null;  // Aquí obtenemos el email del payload
    }
    return null;
  }
  changePasswordAdmin(email: string, newPassword: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('newPassword', newPassword);
  
    return this.http.post<any>(`${this.api_url}/change-password-admin`, null, { params });
  }


  registerEmpleado(requestBody: any): Observable<any> {
    return this.http.post(`${this.api_url}/registerempleado`, requestBody).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      console.error(`Error del backend: ${error.status}, ` + `mensaje: ${error.error}`);
    }
    return throwError('Hubo un problema con el registro; por favor intenta nuevamente.');
  }



  getEmpleados(): Observable<any[]> {
    const token = localStorage.getItem(this.tokenKey); // Obtener el token del localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.api_urlempleado}/listarempleados`, { headers });
}

updateUserProfile(userData: any): Observable<User> {
  const token = this.getToken(); 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.put<User>(`${this.api_url}/update`, userData, { headers });
}

  login(email: string, password: string, callback: (token: string) => void):  Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
  
    return this.http.post<any>(`${this.api_url}/login`, null, { params }).pipe(
      tap(response => {
      
        if (response.token) {
          this.setToken(response.token);
  
          // Obtener el rol del usuario desde el token
          const userRole = this.getRoleFromToken();
        
          if (userRole === 'EMPLEADO') {
           
            if (response.requiresPasswordChange) {
             
              this.router.navigate(['/change-password']);
            } else {
              this.router.navigate(['/recepcionista']);
            }
          } else if (userRole === 'ADMIN') {
            if (response.requiresPasswordChange ) {
              this.router.navigate(['/change-password-firstlogin']);
            } else {
              
              this.router.navigate(['/listar-personal']);
            }
          }
           else if (userRole === 'CLIENTE') {
            
            this.router.navigate(['/landing-logueado']);
          } else {
            console.error('Rol de usuario no reconocido');
          }
        }
      })
    );
  }


  getUserInfo(): Observable<User> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(`${this.api_url}/me`, { headers });
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/iniciarSesion']);
  }


  getRoleFromToken(): string | null {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.role || null;
    }
    return null;
  }

  private setToken(token:string):void{
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null{
    if(typeof window!== 'undefined'){
      return localStorage.getItem(this.tokenKey);
    }else{
      return null;
    }
  }


  isAuthenticated(): boolean{
    const token = this.getToken();
    if(!token){
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  forgotPassword(email: string) {
    const body = new HttpParams().set('email', email);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(`${this.api_url}/forgot-password`, body.toString(), { headers })
        .pipe(
            map((response: any) => {

                return response;
            }),
            catchError((error: any) => {

                console.error('Error en forgotPassword:', error);
                return throwError(() => new Error(error.error?.error || 'Hubo un error al enviar el correo. Verifique el correo que sea válido'));
            })
        );
}

resetPassword(token: string, newPassword: string) {
  const body = new HttpParams()
      .set('token', token)
      .set('newPassword', newPassword);

  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  return this.http.post(`${this.api_url}/reset-password`, body.toString(), { headers })
      .pipe(map((response: any) => response));
}
}
