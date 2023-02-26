import type {Auth} from "@angular/fire/auth";

export function decorateAuth(auth: Auth): Auth {
  return auth;
}
