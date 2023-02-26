import { Component } from '@angular/core';
import {Auth, onAuthStateChanged, signOut} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evsc-web';

  protected loading = true;
  protected isSignedIn = false;

  constructor(private readonly auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.loading = false;
      this.isSignedIn = !!user;
    });
  }

  signout() {
    signOut(this.auth);
  }

}
