import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

export class RegistroUsuarioComponent {
  selectedDocumentType: string = '';

  documentTypeChange(value: string) {
    this.selectedDocumentType = value;
  }
  
}
