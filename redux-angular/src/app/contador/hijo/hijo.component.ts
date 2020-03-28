import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output() cambioContador = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicarContador() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividirContador() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }
}
