import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuariosSuccess } from '../actions/usuarios.actions';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {

    constructor(
        private action$: Actions,
        private usuarioSrv: UsuarioService
    ) {
    }

    cargarUsuario$ = createEffect(
        () => this.action$.pipe(
            ofType( usuariosActions.cargarUsuario ),
            mergeMap(
                ( action ) => this.usuarioSrv.getUserById( action.id )
                    .pipe(
                        map( usuario => usuariosActions.cargarUsuarioSuccess({ usuario }) ),
                        catchError( err => of( usuariosActions.cargarUsuarioError({ payload: err }) ) )
                    )
            )
        )
    );

}

