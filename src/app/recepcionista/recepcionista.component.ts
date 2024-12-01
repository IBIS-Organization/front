import { Component } from '@angular/core';

@Component({
  selector: 'app-recepcionista',
  standalone: true,
  imports: [],
  templateUrl: './recepcionista.component.html',
  styleUrl: './recepcionista.component.css'
})
export class RecepcionistaComponent {
  showPassword: boolean = false; // Control para alternar la visibilidad de la contraseña

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Cambia entre true/false
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = this.showPassword ? 'text' : 'password';
}
}
