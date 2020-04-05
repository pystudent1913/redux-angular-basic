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
export class IngresoEgresoService {

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


    initIngresoEgresoListener(uid: string) {
        return this.firestore.collection(`${ uid }/ingresos-egresos/items`)
            .snapshotChanges() // Nos sirve para obtener info mas detallada de lo que trae firebase
            .pipe(
                map(snapshot => {
                    return snapshot.map( ( { payload: { doc } } ) => {
                        return {
                            uid: doc.id,
                            ...doc.data() as any
                        };
                    });
                })
            );
    }

    borrarIngresoEgreso( uidItem: string) {
        const uid = this._authSrv.user.uid;
        return this.firestore.doc(`${uid}/ingresos-egresos/items/${uidItem}`).delete();
    }
}
