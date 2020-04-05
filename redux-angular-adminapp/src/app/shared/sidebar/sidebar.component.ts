import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;

  constructor(
    private _authSrv: AuthService,
    private _router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(
  ) {
    this.store.select('auth')
      .pipe(
        filter( ({user}) => user != null)
      )
      .subscribe( ({ user }) => {
        this.user = user;
      });
  }

  logoutUsuario() {
    this._authSrv.logoutUsuario()
      .then(res => {
        this._router.navigate(['/login']);
      }).catch(err => {
      });
  }

}
