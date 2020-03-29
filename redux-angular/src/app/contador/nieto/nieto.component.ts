import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  @Input() contador;
  @Output() cambioContador = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
