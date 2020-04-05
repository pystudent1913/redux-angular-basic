import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import * as ingresoEgresoActions from '../ingreso-egreso/ingreso-egreso.actions';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubs$: Subscription;
  ingresoEgresoSubs$: Subscription;

  constructor(
    private store: Store<AppState>,
    private ingresoEgresoSrv: IngresoEgresoService,
  ) { }

  ngOnInit() {
    this.userSubs$ = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)
      )
      .subscribe( ({user}) => {
        this.ingresoEgresoSubs$ = this.ingresoEgresoSrv.initIngresoEgresoListener( user.uid )
          .subscribe((res: IngresoEgreso[]) => {
            this.store.dispatch(
              ingresoEgresoActions.setItems({ items : res })
            );
          });

      });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.userSubs$?.unsubscribe();
    this.ingresoEgresoSubs$?.unsubscribe();
  }
}
