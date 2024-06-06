import { Injectable, inject } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, UserCredential, sendPasswordResetEmail, sendEmailVerification, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private auth: Auth = inject(Auth);
    readonly authState$: Observable<any> = authState(this.auth);
    private isAuthenticated$: Observable<boolean>;

    constructor(private snackBar: MatSnackBar) {
        this.isAuthenticated$ = this.authState$.pipe(map(user => !!user));
    }

    isUserAuthenticated(): Observable<boolean> {
        return this.isAuthenticated$;
    }

    async register({ email, password }: any): Promise<UserCredential> {
        const isAuthenticated = await this.isAuthenticated$.pipe(take(1)).toPromise();
        if (isAuthenticated) {
            return Promise.reject('User is already logged in');
        } else {
            try {
                console.log('Entering register');
                const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
                const user = userCredential.user;

                if (user.emailVerified) {
                    this.openSnackBar('User registered successfully. Email is already verified.');
                } else {
                    await sendEmailVerification(user);
                    this.openSnackBar('Verification email sent. Please check your inbox.');
                }
                
                return userCredential;
            } catch (error) {
                this.handleError(error);
                return Promise.reject(error);
            }
        }
    }

    async login({ email, password }: any): Promise<UserCredential> {
        const isAuthenticated = await this.isAuthenticated$.pipe(take(1)).toPromise();
        if (isAuthenticated) {
            return Promise.reject('User is already logged in');
        } else {
            try {
                const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
                const user = userCredential.user;
    
                if (user && user.emailVerified) {
                    console.log('Usuario exitente');
                    return userCredential;
                } else {
                    // Si el usuario no está verificado, no se envía un nuevo correo de verificación
                    return Promise.reject('Email not verified. Please check your email for the verification link.');
                }
            } catch (error) {
                this.handleError(error);
                return Promise.reject(error);
            }
        }
    }
    

    async loginWithGoogle(): Promise<any> {
        const isAuthenticated = await this.isAuthenticated$.pipe(take(1)).toPromise();
        if (isAuthenticated) {
            return Promise.reject('User is already logged in');
        } else {
            try {
                const userCredential = await signInWithPopup(this.auth, new GoogleAuthProvider());
                return userCredential;
            } catch (error) {
                this.handleError(error);
                return Promise.reject(error);
            }
        }
    }

    async logout(): Promise<void> {
        try {
            await signOut(this.auth);
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    async resetPassword(email: string): Promise<void> {
        try {
            await sendPasswordResetEmail(this.auth, email);
            this.openSnackBar('Password reset email sent successfully.');
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    openSnackBar(message: string): void {
        this.snackBar.open(message, 'Close', {
            duration: 2500,
            verticalPosition: 'top',
            horizontalPosition: 'end'
        });
    }

    private handleError(error: any): void {
        const errorMessage = error.message ? error.message : 'An unexpected error occurred';
        this.openSnackBar(errorMessage);
    }
}
function FirebaseUser(value: UserCredential): UserCredential | PromiseLike<UserCredential> {
    throw new Error('Function not implemented.');
}

