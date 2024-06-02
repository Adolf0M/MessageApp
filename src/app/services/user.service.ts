import { Injectable, inject } from "@angular/core";
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private auth: Auth = inject(Auth);
    readonly authState$: Observable<any> = authState(this.auth);
    private isAuthenticated$: Observable<boolean>;

    constructor() {
        this.isAuthenticated$ = this.authState$.pipe(map(user => !!user));
    }

    isUserAuthenticated(): Observable<boolean> {
        return this.isAuthenticated$;
    }

    register({ email, password }: any): Promise<any> {
        return this.isAuthenticated$.pipe(take(1)).toPromise().then(isAuthenticated => {
            if (isAuthenticated) {
                return Promise.reject('User is already logged in');
            } else {
                return createUserWithEmailAndPassword(this.auth, email, password);
            }
        }).catch(error => {
            return Promise.reject(error);
        });
    }

    login({ email, password }: any): Promise<any> {
        return this.isAuthenticated$.pipe(take(1)).toPromise().then(isAuthenticated => {
            if (isAuthenticated) {
                return Promise.reject('User is already logged in');
            } else {
                return signInWithEmailAndPassword(this.auth, email, password);
            }
        }).catch(error => {
            return Promise.reject(error);
        });
    }

    loginWithGoogle(): Promise<any> {
        return this.isAuthenticated$.pipe(take(1)).toPromise().then(isAuthenticated => {
            if (isAuthenticated) {
                return Promise.reject('User is already logged in');
            } else {
                return signInWithPopup(this.auth, new GoogleAuthProvider());
            }
        }).catch(error => {
            return Promise.reject(error);
        });
    }

    logout(): Promise<void> {
        return signOut(this.auth).catch(error => {
            return Promise.reject(error);
        });
    }
}