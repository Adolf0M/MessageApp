import { Injectable, NgZone } from "@angular/core";
import { GoogleAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from "@angular/router";
import { user, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any;

    constructor(
        private firebaseAuthenticationService: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.firebaseAuthenticationService.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));   
            } else {
                localStorage.setItem('user', 'null');
            }
        });
    }

    logInWithEmailAndPassword(email: string, password: string) {
        return this.firebaseAuthenticationService.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            this.userData = userCredential.user;
            this.observeUserState()
            // Aquí puedes añadir la lógica que necesites para observar el estado del usuario
            console.log('Usuario autenticado:', this.userData);
        })
        .catch((error) => {
            alert(error.message);
        });
    }

    // Login with google
    logInWithGoogleProvider() {
        return this.firebaseAuthenticationService.signInWithPopup( new GoogleAuthProvider())
        .then(() => this.observeUserState())
        .catch((error: Error) => {
            alert(error.message);
        })
    }
    //sign-up with email and password
    signUpWithEmailAndPassword(email: string, password: string) {
        return this.firebaseAuthenticationService.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            this.userData = userCredential.user
            this.observeUserState()
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    observeUserState() {
        this.firebaseAuthenticationService.authState.subscribe((userState) => {
            userState && this.ngZone.run(() => this.router.navigate(['home']))
        })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user !== null;
    }
    //logOut
    logOut() {
        return this.firebaseAuthenticationService.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        })
    }

}
