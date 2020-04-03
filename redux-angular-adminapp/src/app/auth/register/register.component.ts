import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/ui.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registroForm: FormGroup;
  storeSubscription$: Subscription;

  loading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authSrv: AuthService,
    private _router: Router,
    private _store: Store<AppState>
  ) {
    this.storeSubscription$ = this._store.select('ui').subscribe(ui => {
      this.loading = ui.isLoading;
    })
  }

  ngOnInit() {
    this.registroForm = this._formBuilder.group({
      nombre   : ['', Validators.required],
      correo   : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this.storeSubscription$.unsubscribe();
  }

  crearUsuario() {

    if ( this.registroForm.invalid ) {
      return ;
    }

    const { nombre, correo, password } = this.registroForm.value;
    this._authSrv.crearUsuario(nombre, correo, password)
      .then( credenciales => {
        this._router.navigate(['/']);
      }).catch( err => {
      }).finally( () => {
        this._store.dispatch( ui.isLoading() );
      });
  }
}
