import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../contador.actions';
import { AppState } from 'src/app/app.reducers';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {
  contador : number;

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
  }
}
