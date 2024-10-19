import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private api_url = 'http://localhost:8080/api/v1/auth';
  private tokenKey = 'authToken';
  constructor(private http:HttpClient, private router:Router) { }

  login(email: string, password: string, callback: (token: string) => void): Observable<any> {
    // Construimos los parámetros de la URL manualmente
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
    
    return this.http.post<any>(`${this.api_url}/login`, null, { params }).pipe(
      tap(response => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
          callback(response.token);
        }
      })
    );
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
