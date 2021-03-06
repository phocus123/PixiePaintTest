import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Logging into Firebase, called from the login form component.
  login(email: string, password: string) {
    this.afAuth.auth.setPersistence('session');
    return new Promise((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    });
  }

  // Returning current authentication state.
  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }
}
