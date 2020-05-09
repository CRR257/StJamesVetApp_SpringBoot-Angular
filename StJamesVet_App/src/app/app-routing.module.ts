import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: '', component: PetsComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PetsComponent },
  { path: 'create', component: PetsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
