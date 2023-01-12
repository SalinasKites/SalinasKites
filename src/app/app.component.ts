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
  numeroTelefonico = 'https://wa.me/573002156944';

  public letrasTarjeta: LetrasTarjeta[] = [{
    tagA: {
      href: this.linkWhatsApp('Buenas, estoy interesado en ser un kiter'),
      text: 'Contactanos',
      titulo: 'Quiero Aprender'
    },
    titulo: "Quiero ser un kiter",
    descripcion: "descripción",
    texto: "Curso basico de 10 horas",
    literales: ['¿Que aprendes?', 'Conceptos basicos ventana de viento/Teoria/Control de cometa/Seguridad', 'Bodydrag', 'wartestard']
  },
  {
    tagA: {
      href: this.linkWhatsApp("Ya soy un kiter, me gustaría saber un poco más de tus servicios"),
      text: 'Contactanos',
      titulo: 'ya soy kiter'
    },
    titulo: "Ya soy un kiter",
    descripcion: "descripción",
    literales: ['Asistencia', 'Downwind', 'Renta de equipos']
  },
  {
    tagA: {
      href: this.linkWhatsApp("Buenas, Me gustaría saber un poco más sobre los otros deportes"),
      text: 'Contactanos',
      titulo: 'más deportes'
    },
    titulo: "Otros deportes",
    descripcion: "descripción",
    literales: ['Paddle Board', 'Pesca deportiva']
  }
  ];

  public linkWhatsApp(text: string): string {
    return `${this.numeroTelefonico}?text=${this.stringLinkTransform(text)}`;
  }

  public stringLinkTransform(text: string): string {
    return text;
    return text.replace(/\s/g, "%");
  }

















}
