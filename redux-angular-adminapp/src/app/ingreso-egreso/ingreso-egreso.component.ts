import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IngresoEgresoervice } from '../services/ingreso-egreso.service';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss']
})
export class IngresoEgresoComponent implements OnInit {

  ingresoEgresoForm: FormGroup;
  tipo: string = 'ingreso';

  constructor(
    private _formBuiled: FormBuilder,
    private _ingresoEgresoSrv: IngresoEgresoervice
  ) { }

  ngOnInit() {
    this.ingresoEgresoForm = this._formBuiled.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }

  guardar() {
    const { descripcion, monto } = this.ingresoEgresoForm.value;

    const ingresoEgreso = new IngresoEgreso(descripcion, monto, this.tipo);
    console.log("IngresoEgresoComponent -> guardar -> ingresoEgreso", ingresoEgreso)

    this._ingresoEgresoSrv.crearIngresoEgreso( ingresoEgreso )
      .then( res => {
        this.ingresoEgresoForm.reset();
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
