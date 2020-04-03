import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-angular-adminapp';

  constructor(
    private _authSrv: AuthService
  ) {

    this._authSrv.initAuthListener();
  }
}
