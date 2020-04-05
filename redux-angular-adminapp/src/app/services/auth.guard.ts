import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanLoad
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private _authSrv: AuthService,
        private _router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this._authSrv.isLogged()
            .pipe(
                tap( estado => {
                    if (!estado) {
                        this._router.navigate(['/login']);
                    }
                })
            );
    }

    canLoad(): Observable<boolean> {
        return this._authSrv.isLogged()
            .pipe(
                tap( estado => {
                    if (!estado) {
                        this._router.navigate(['/login']);
                    }
                }),
                take(1)
            );
    }

}
