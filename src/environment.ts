import {Auth, connectAuthEmulator} from "@angular/fire/auth";

const HOST = "http://192.168.0.11";

export function decorateAuth(auth: Auth): Auth {
  connectAuthEmulator(auth, `${HOST}:9099`, {disableWarnings: true});
  return auth;
}
