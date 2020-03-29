import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';

export interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'redux-angular';

  contador : number;

  constructor(
    private _store: Store<AppState>
  ) {

    this._store.select('contador')
      .subscribe( contador => this.contador = contador);



  }

  ngOnInit(): void {

  }

  decrementarContador() {
  this._store.dispatch( actions.decrement() );
  }

  incrementarContador() {
    this._store.dispatch( actions.increment() );
  }

  handleCambioContador(event) {
    this._store.dispatch( actions.decrement() );
  }
}
