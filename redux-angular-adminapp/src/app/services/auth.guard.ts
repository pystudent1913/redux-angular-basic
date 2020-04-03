import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private _authSrv: AuthService,
        private _router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('AuthGuard -> this._authSrv.isLogged()', this._authSrv.isLogged());
        return this._authSrv.isLogged()
            .pipe(
                tap( estado => {
                    if (!estado) {
                        this._router.navigate(['/login']);
                    }
                })
            );
    }
}
