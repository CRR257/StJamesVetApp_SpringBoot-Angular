import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { PetsWelcomeComponent } from './pets-welcome/pets-welcome.component';
import {LogoutComponent} from './logout/logout.component';
import { AuthGaurdService } from './service/authService/auth-gaurd.service';
import { PetsAuthComponent } from './pets-auth/pets-auth.component';
import { PetsContactComponent } from './pets-contact/pets-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: PetsWelcomeComponent },
  { path: 'login', component: PetsAuthComponent },
  { path: 'home', component: PetsComponent, canActivate:[AuthGaurdService] },
  { path: 'create', component: PetsCreateComponent,canActivate:[AuthGaurdService] },
  { path: 'contact', component: PetsContactComponent },
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
