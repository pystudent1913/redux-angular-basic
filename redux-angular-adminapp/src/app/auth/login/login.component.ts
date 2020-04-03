import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _authSrv: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {

    const { email, password } = this.loginForm.value;

    this._authSrv.logearUsuario(email, password)
      .then(res => {
        console.log('LoginComponent -> login -> res', res);
        // res.user.uid
        console.log("LoginComponent -> login -> res.user.uid", res.user.uid)
        this._router.navigate(['/']);
      }).catch(err => {
        console.log('LoginComponent -> login -> err', err);
      });
  }

}
