import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Empleado, User } from '../model/models.models';

@Component({
  selector: 'app-listar-personal',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listar-personal.component.html',
  styleUrls: ['./listar-personal.component.css']
})
export class ListarPersonalComponent implements OnInit {
  showModal: boolean = false;
  empleadoSeleccionado: string = '';
  empleados: Empleado[] = [];
  user : User|null=null;
  constructor(
    private authService: ServiceService
    
  ) {}


  ngOnInit(): void {
      this.loadAdvisors();
      this.getUserInfo();
  }


  deleteUser(id: number) {
    if(id !== undefined){
      this.authService.deleteEmpleado(id).subscribe(
        data => {
          alert('Empleado eliminado exitosamente');
          window.location.reload();
        },
        error => console.log(error)
      );
    }
    else{
      console.log('Error al obtener el ID del empleado');
    }
    
  }
  getUserInfo(): void {
  
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.user = data; // Asigna los detalles del usuario
      
      },
      error: (err) => {
        console.error('Error al obtener la información del usuario', err);
      }
    });
  }
  abrirModal(nombreEmpleado: string): void {
    this.empleadoSeleccionado = nombreEmpleado;
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
  }

  aceptarModal(): void {
    
    this.cerrarModal();
  }


  logout(): void {
    this.authService.logout();
  }


  loadAdvisors() {
    this.authService.getEmpleados().subscribe(
      data => {
        this.empleados = data;
    
        // Llamar al estado de solicitud para cada asesor
        this.empleados.forEach(empleado => {
          if (empleado.id !== undefined) { // Cargar el estado de cada solicitud
          } else {
            console.error('El ID del asesor es undefined:', empleado);
          }
        });
      },
      error => console.error(error)
    );
  }
}
