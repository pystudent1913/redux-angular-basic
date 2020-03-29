import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../contador.actions';
import { AppState } from '../../app.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter();
  contador: number;
  cambioContador: any;

  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.select('contador')
      .subscribe(contador => {
        this.contador = contador;
      });
  }

  multiplicarContador() {
    this._store.dispatch( actions.multiply() );

    /** Antiguo operador
     this.contador *= 2;
     this.cambioContador.emit(this.contador);
   */
  }

  dividirContador() {
    this._store.dispatch( actions.divider() );

    /** Antiguo operador
     this.contador /= 2;
     this.cambioContador.emit(this.contador);
   */
  }

  // handleCambioContador(event) {
  //   this.contador = event;
  //   this.cambioContador.emit(this.contador);
  // }
}
