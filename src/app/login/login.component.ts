import { Component } from '@angular/core';
import {Auth, signInWithCredential, GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private readonly auth: Auth) {
  }

  async loginWithGoogle() {
    try {
      const a = await signInWithPopup(this.auth, new GoogleAuthProvider());
      console.log(a);
    } catch (e) {
      console.log(e);
    }
  }
}
