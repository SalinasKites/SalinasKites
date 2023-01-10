import { Component } from '@angular/core';
import { LetrasTarjeta } from './interfaces/letras.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salinasKites';
  public letrasTarjeta: LetrasTarjeta[] = [{
    link: "",
    texto: "Quiero ser un kiter"
  },
  {
    link: "",
    texto: "Ya soy un kiter"
  },
  {
    link: "",
    texto: "Otros deportes"
  }
  ];



















}
