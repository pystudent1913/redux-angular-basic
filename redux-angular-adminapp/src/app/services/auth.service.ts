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
import * as ingresoEgresoActions from '../ingreso-egreso/ingreso-egreso.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userSubscription$ : Subscription;
  private _user: Usuario;

  constructor(
    private _auth: AngularFireAuth,
    public firestore: AngularFirestore,
    private _store: Store<AppState>
  ) { }


  get user() {
    return {...this._user};
  }

  initAuthListener() {
    this._auth.authState.subscribe( fuser => {

      if ( fuser ) {
        this.userSubscription$ = this.firestore.doc(`${fuser.uid}/usuario`).valueChanges()
          .subscribe( (firestoreUser: any) => {
            const user = Usuario.fromFirebase(firestoreUser);
            this._user = user;
            this._store.dispatch( auth.setUser({ user }) );
          });

      } else {
        this._user = null;
        this.userSubscription$?.unsubscribe();
        this._store.dispatch( auth.unsetUser() );

        // Vamos a borrar la informacion de la persona
        this._store.dispatch( ingresoEgresoActions.unsetItems() );
      }

    });
  }


  crearUsuario(
    nombre: string,
    email: string,
    password: string) {

    return this._auth.createUserWithEmailAndPassword(email, password)
      .then( ({ user }) => {
        const newUser = new Usuario(
          user.uid,
          nombre,
          user.email
        );

        return this.firestore.doc(`${ user.uid }/usuario`)
          .set({ ...newUser })
          .then( () => {
          });

      }).catch( err => {

      });
  }

  logearUsuario(correo, password) {
    return this._auth.signInWithEmailAndPassword(correo, password);
  }

  logoutUsuario() {
    return this._auth.signOut();
  }

  isLogged() {
    return this._auth.authState.pipe(
      map( fUser => fUser !== null )
    );
  }
}
