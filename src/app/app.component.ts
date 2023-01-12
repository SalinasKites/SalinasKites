import { Component } from '@angular/core';
import { LetrasTarjeta } from './interfaces/letras.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salinasKites';
  panelOpenState = false;
  public letrasTarjeta: LetrasTarjeta[] = [{
    link: "",
    titulo: "Quiero ser un kiter",
    descripcion: "descripción",
    texto: "Curso basico de 10 horas",
    literales: ['¿Que aprendes?', 'Conceptos basicos ventana de viento/Teoria/Control de cometa/Seguridad', 'Bodydrag', 'wartestard']
  },
  {
    link: "",
    titulo: "Ya soy un kiter",
    descripcion: "descripción",
    literales: ['Asistencia', 'Downwind', 'Renta de equipos']
  },
  {
    link: "",
    titulo: "Otros deportes",
    descripcion: "descripción",
    literales: ['Paddle Board', 'Pesca deportiva']
  }
  ];



















}
