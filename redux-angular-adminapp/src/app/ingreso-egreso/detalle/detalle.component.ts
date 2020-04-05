import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from '../../models/ingreso-egreso.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  ingresosEgresos2: any[] = [{
    descripcion: 'dasdsa',
    monto: 222,
    tipo: 'dsd'
  }];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('ingresosEgresos')
      .subscribe(({ items }) => {
        // this.ingresosEgresos2 = items;
        // console.log('this.ingresosEgresos -> ', this.ingresosEgresos2);
      });

    console.log("DetalleComponent -> this.ingresosEgresos2", this.ingresosEgresos2)
  }

}
