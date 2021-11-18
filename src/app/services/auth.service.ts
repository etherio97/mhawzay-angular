import { Injectable } from '@angular/core';
import {
  getAuth,
  User,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;

  waitUntilAuth(): Promise<User | null> {
    return new Promise((resolve: (user: User | null) => void) =>
      onAuthStateChanged(getAuth(), (user) => {
        this.user = user;
        resolve(user);
      })
    );
  }

  getCurrentUser(): User | null {
    return this.user;
  }

  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  signInWithFacebook() {
    let provider = new FacebookAuthProvider();
    return signInWithPopup(getAuth(), provider);
  }

  signInWithGoogle() {
    let provider = new GoogleAuthProvider();
    return signInWithPopup(getAuth(), provider);
  }

  signOut(): Promise<void> {
    return signOut(getAuth());
  }
}
