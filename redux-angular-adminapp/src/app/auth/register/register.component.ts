import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authSrv: AuthService
  ) {
  }

  ngOnInit() {
    this.registroForm = this._formBuilder.group({
      nombre   : ['', Validators.required],
      correo   : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  crearUsuario() {

    if ( this.registroForm.invalid ) {
      return ;
    }

    const { nombre, correo, password } = this.registroForm.value;
    this._authSrv.crearUsuario(nombre, correo, password);
  }
}
