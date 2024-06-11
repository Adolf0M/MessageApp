import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withHashLocation, withInMemoryScrolling } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withHashLocation(),
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    ),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyBe62ISyX6RTNtG2j9jtwlxsR5qaiDthbE",
        authDomain: "messageapp-1c848.firebaseapp.com",
        projectId: "messageapp-1c848",
        storageBucket: "messageapp-1c848.appspot.com",
        messagingSenderId: "592455073476",
        appId: "1:592455073476:web:3cc124fa03b1985b461391"
      })
    ),
    provideAuth(() => getAuth()),
  ],
};
