import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  getAuth,
  User,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  signInWithRedirect,
  FacebookAuthProvider,
  GoogleAuthProvider,
  Unsubscribe,
} from "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private unsubscribe?: Unsubscribe;
  private user: User | null = null;
  private user$ = new BehaviorSubject<User | null>(null);

  waitUntilAuth(): Promise<Unsubscribe> {
    return new Promise((resolve: (user: Unsubscribe) => void) => {
      if (this.unsubscribe) return resolve(this.unsubscribe);
      let unsubscribe = onAuthStateChanged(getAuth(), (user) => {
        this.user = user;
        this.user$.next(this.user);
        this.unsubscribe = unsubscribe;
        resolve(this.unsubscribe);
      });
    });
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
    return signInWithRedirect(getAuth(), provider);
  }

  signInWithGoogle() {
    let provider = new GoogleAuthProvider();
    return signInWithRedirect(getAuth(), provider);
  }

  signOut(): Promise<void> {
    return signOut(getAuth());
  }
}
