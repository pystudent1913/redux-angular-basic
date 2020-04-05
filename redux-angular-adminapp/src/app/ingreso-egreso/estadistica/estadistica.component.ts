import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {

  totalIngresos: number = 0;
  totalEgresos: number = 0;
  ingresos: number = 0;
  egresos: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('ingresosEgresos')
      .subscribe( ({ items }) => {
        this.generarEstadistica(items);
      });
  }

  generarEstadistica(items: IngresoEgreso[]) {
    items.map(item => {
      if (item.tipo === 'ingreso') {
        this.totalIngresos += +item.monto;
        this.ingresos++;
      } else {
        this.totalEgresos += +item.monto;
        this.egresos++;
      }
    });

  }

}
