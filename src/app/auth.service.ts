import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}
  signup(email, password) {
    this.afAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .catch(err => console.log(err));
  }
  login() {

  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
