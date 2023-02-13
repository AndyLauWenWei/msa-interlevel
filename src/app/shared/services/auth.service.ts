import { Injectable } from '@angular/core';
import firebase from 'firebase';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( ) { }

  observeAuthState(func) { //tracks user signed in or out
    return firebase.auth().onAuthStateChanged(func); // looks for changes in authentication state of user
  }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password); // allow user to sign in to firebase app using email/password 
    // returns promise with authentication info
  }
}
