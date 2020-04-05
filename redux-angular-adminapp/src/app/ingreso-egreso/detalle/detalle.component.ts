import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../../services/ingreso-egreso.service';
import { AppStateWithIngreso } from '../ingreso-egreso.reducers';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit, OnDestroy {

  ingresosEgresos: IngresoEgreso[] = [];
  ingresosEgresosSubs$: Subscription;

  constructor(
    private store: Store<AppStateWithIngreso>,
    private ingresoEgresoSrv: IngresoEgresoService
  ) { }

  ngOnInit() {
    this.ingresosEgresosSubs$ = this.store.select('ingresosEgresos')
      .subscribe(({ items }) => {
        this.ingresosEgresos = items;
        console.log('this.ingresosEgresos -> ', this.ingresosEgresos);
      });

  }

  ngOnDestroy() {
    this.ingresosEgresosSubs$.unsubscribe();
  }

  borrar(uidItem: string) {
    console.log('item', uidItem);
    this.ingresoEgresoSrv.borrarIngresoEgreso(uidItem)
      .then(res => {
        console.log('res', res);
      }).catch(err => {
        console.log('err', err);
      });
  }

}
