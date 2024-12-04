export interface Habitacion{
    id: number;
    capacidad:number;
    categoria:string;
    descripcion:string;
    disponible:boolean;
    img:string;
    precio:number;
}

export interface Reserva {
  id?: number;
  habitacionId: number;
  clienteId: number;
  dniCliente: string;
  nombreCliente: string;
  fechaInicio: string;
  fechaFin: string;

}


export interface Empleado {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}
export interface User{
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}
