import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { AppComponent } from './app.component';
import { PetsWelcomeComponent } from './pets-welcome/pets-welcome.component';
import {LogoutComponent} from './logout/logout.component';
import { AuthGaurdService } from './service/authService/auth-gaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: PetsWelcomeComponent },
  { path: 'home', component: PetsComponent, canActivate:[AuthGaurdService] },
  { path: 'create', component: PetsCreateComponent,canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
