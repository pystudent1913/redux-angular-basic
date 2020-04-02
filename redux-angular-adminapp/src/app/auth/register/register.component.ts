import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
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
    const form = this.registroForm.value;
    console.log('form', form);
  }
}
