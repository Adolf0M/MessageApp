import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"messageapp-1c848","appId":"1:592455073476:web:31a2558bee795581461391","storageBucket":"messageapp-1c848.appspot.com","apiKey":"AIzaSyBe62ISyX6RTNtG2j9jtwlxsR5qaiDthbE","authDomain":"messageapp-1c848.firebaseapp.com","messagingSenderId":"592455073476"})), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"messageapp-1c848","appId":"1:592455073476:web:3cc124fa03b1985b461391","storageBucket":"messageapp-1c848.appspot.com","apiKey":"AIzaSyBe62ISyX6RTNtG2j9jtwlxsR5qaiDthbE","authDomain":"messageapp-1c848.firebaseapp.com","messagingSenderId":"592455073476"})), provideAuth(() => getAuth())]
};
