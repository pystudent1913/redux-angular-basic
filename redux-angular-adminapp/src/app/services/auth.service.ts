import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) { }

  initAuthListener() {
    this.auth.authState.subscribe( fuser => {
      console.log('fuser', fuser);
    });
  }

  crearUsuario(
    nombre: string,
    email: string,
    password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logearUsuario(correo, password) {
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  logoutUsuario() {
    return this.auth.signOut();
  }
}
