import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as ui from '../shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss']
})
export class IngresoEgresoComponent implements OnInit, OnDestroy {

  ingresoEgresoForm: FormGroup;
  tipo: string = 'ingreso';
  loading: boolean = false;
  loadingSubs$: Subscription;

  constructor(
    private _formBuiled: FormBuilder,
    private _ingresoEgresoSrv: IngresoEgresoService,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loadingSubs$ = this._store.select('ui').subscribe(ui => {
      console.log("IngresoEgresoComponent -> ngOnInit -> ui", ui)
      this.loading = ui.isLoading;
    });

    this.ingresoEgresoForm = this._formBuiled.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    this.loadingSubs$.unsubscribe();
  }

  guardar() {

    this._store.dispatch( ui.isLoading() );

    const { descripcion, monto } = this.ingresoEgresoForm.value;

    const ingresoEgreso = new IngresoEgreso(descripcion, monto, this.tipo);

    this._ingresoEgresoSrv.crearIngresoEgreso( ingresoEgreso )
      .then( res => {
        this.ingresoEgresoForm.reset();
        this._store.dispatch( ui.stopLoading() );
      }).catch( err => {

      });

  }

  changeTipoIngresoEgreso() {
    console.log('tipo', this.tipo);
    if (this.tipo === 'egreso') {
      this.tipo = 'ingreso';
    } else {
      this.tipo = 'egreso';
    }
  }
}
