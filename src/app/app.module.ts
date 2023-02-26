import {inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAnalytics, provideAnalytics} from "@angular/fire/analytics";
import {getAuth, provideAuth, onAuthStateChanged} from "@angular/fire/auth";
import {LoginComponent} from "./login/login.component";
import {Router} from "@angular/router";
import {decorateAuth} from "../environment";
import { PartyLobbyComponent } from './party-lobby/party-lobby.component';
import { PartyComponent } from './party/party.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartyLobbyComponent,
    PartyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyB-hh8fcx8aeTwIgaSW4i-K0Ko57Zlc0s8",
      authDomain: "eurovision-scorecards.firebaseapp.com",
      projectId: "eurovision-scorecards",
      storageBucket: "eurovision-scorecards.appspot.com",
      messagingSenderId: "575750979046",
      appId: "1:575750979046:web:cca0652f42a728b4da6a27",
      measurementId: "G-KG2R9E2R9N"
    })),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => {
      const auth = getAuth();
      decorateAuth(auth);
      const router = inject(Router);
      onAuthStateChanged(auth, (user) => {
        router.navigate(user ? [''] : ['login'])
      });
      return auth;
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
