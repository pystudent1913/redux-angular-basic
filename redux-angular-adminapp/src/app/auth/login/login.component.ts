import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/ui.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loading: boolean = false;

  storSubscription$: Subscription;

  constructor(
    private _authSrv: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _store: Store<AppState>
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.storSubscription$ = this._store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading;
      console.log('cargando subs');
    });


  }

  ngOnDestroy(): void {
    this.storSubscription$.unsubscribe();
  }

  login() {

    this._store.dispatch( ui.isLoading() );

    // Swal.fire({
    //   title: 'Espere por favor',
    //   timerProgressBar: true,
    //   onBeforeOpen: () => {
    //     Swal.showLoading();
    //   }
    // });


    const { email, password } = this.loginForm.value;

    this._authSrv.logearUsuario(email, password)
      .then(res => {
        // Swal.close();

        // this._store.dispatch( ui.stopLoading() );
        this._router.navigate(['/']);
      }).catch(err => {

        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: err.message,
        // });

      }).finally( () => {
        this._store.dispatch( ui.stopLoading() );
        console.log('se dispacheo');
      });
  }

}
