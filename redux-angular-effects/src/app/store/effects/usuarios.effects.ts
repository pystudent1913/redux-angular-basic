import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuariosSuccess } from '../actions/usuarios.actions';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(
        private action$: Actions,
        private usuarioSrv: UsuarioService
    ) {
    }

    cargarUsuarios$ = createEffect(
        () => this.action$.pipe(
            ofType( usuariosActions.cargarUsuarios ),
            mergeMap(
                () => this.usuarioSrv.getUsers()
                    .pipe(
                        map( usuarios => usuariosActions.cargarUsuariosSuccess({ usuarios }) ),
                        catchError( err => of( usuariosActions.cargarUsuariosError({ payload: err }) ) )
                    )
            )
        )
    );

}

