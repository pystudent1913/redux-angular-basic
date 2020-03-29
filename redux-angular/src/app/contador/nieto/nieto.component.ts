import { AppState } from '../../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  // @Input() contador;
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

  reset() {

    this._store.dispatch( actions.reset() );

    /** Antiguo operador
     this.contador = 0;
     this.cambioContador.emit(this.contador);
     */
  }
}
