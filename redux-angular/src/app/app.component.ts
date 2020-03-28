import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-angular';

  contador : number;

  constructor() {
    this.contador = 10;
  }

  decrementarContador() {
    this.contador -= 1;
  }

  incrementarContador() {
    this.contador += 1;
  }

  handleCambioContador(event) {
  console.log("AppComponent -> handleCambioContador -> event", event)
    this.contador = event;
  }
}
