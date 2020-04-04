import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss']
})
export class IngresoEgresoComponent implements OnInit {

  ingresoEgresoForm: FormGroup;
  tipo: string = 'ingreso';

  constructor(
    private _formBuiled: FormBuilder
  ) { }

  ngOnInit() {
    this.ingresoEgresoForm = this._formBuiled.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required]
    });
  }

  guardar() {
    const form = this.ingresoEgresoForm.value;


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
