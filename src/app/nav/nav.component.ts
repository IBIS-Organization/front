import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
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
