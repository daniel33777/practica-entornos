import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  imports: [],
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  titulo = 'Práctica de Despliegues';
  bienvenida = 'Bienvenido a la aplicación de gestión de entornos.';
  entorno = 'Entorno de pruebas QA';
  clase = 'qa';
}