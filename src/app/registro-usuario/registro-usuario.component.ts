import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true, 
  imports : [RouterLink, CommonModule],
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent {
  selectedDocumentType: string = '';

  documentTypeChange(value: string) {
    this.selectedDocumentType = value;
  }
  
}
