import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  userSubs$: Subscription;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.userSubs$ = this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)
      )
      .subscribe( user => {
        console.log('user', user);
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.userSubs$.unsubscribe()
  }
}
