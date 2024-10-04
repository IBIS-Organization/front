import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router){}

  IniciarSesion(){
    this.router.navigate(['/iniciarSesion']);
  }

  Registrarse(){
    this.router.navigate(['/registro-usuario'])
  }
}
