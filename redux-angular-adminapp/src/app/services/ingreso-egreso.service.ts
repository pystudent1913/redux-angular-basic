import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { AngularFirestore } from '@angular/fire/firestore';

import 'firebase/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as auth from '../auth/auth.actions';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class IngresoEgresoervice {

    constructor(
        private _auth: AngularFireAuth,
        public firestore: AngularFirestore,
        private _store: Store<AppState>,
        private _authSrv: AuthService
    ) { }

    crearIngresoEgreso( ingresoEgreso: IngresoEgreso) {
        const uid = this._authSrv.user.uid;
        return this.firestore.doc(`${uid}/ingresos-egresos`)
            .collection('items')
            .add({...ingresoEgreso});

    }


    initIngresoEgresoListener() {
        
    }
}
