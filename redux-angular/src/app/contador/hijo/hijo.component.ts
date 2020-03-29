import { Component, OnInit } from '@angular/core';
import { Store, props } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { multiply, divider } from './../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
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

  multiplicarContador() {
    const props = {
      numero : 3
    };

    this._store.dispatch( multiply(props) );
  }

  dividirContador() {
    const props = {
      numero : 2
    };
    this._store.dispatch( divider(props) );
  }

}
