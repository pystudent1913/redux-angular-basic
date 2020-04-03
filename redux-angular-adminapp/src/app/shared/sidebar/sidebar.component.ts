import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private _authSrv: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logoutUsuario() {
    this._authSrv.logoutUsuario()
      .then(res => {
        console.log("SidebarComponent -> logoutUsuario -> res", res)
        this._router.navigate(['/login']);
      }).catch(err => {
        console.log('err -> ', err);
      });
  }

}
