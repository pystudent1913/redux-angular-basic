import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authSrv: AuthService,
    private _router: Router
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
    this._authSrv.crearUsuario(nombre, correo, password)
      .then( credenciales => {
        console.log('RegisterComponent -> crearUsuario -> credenciales', credenciales);
        this._router.navigate(['/']);
      }).catch( err => {
        console.log('err', err);
      });
  }
}
