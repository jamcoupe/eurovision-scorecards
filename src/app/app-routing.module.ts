import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";
import {PartyLobbyComponent} from "./party-lobby/party-lobby.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: '', component: PartyLobbyComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'party/:code', component: PartyLobbyComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
