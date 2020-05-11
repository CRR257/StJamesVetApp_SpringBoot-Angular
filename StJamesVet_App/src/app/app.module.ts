import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsSearchComponent } from './pets-search/pets-search.component';
import { HeaderComponent } from './header/header.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { PetsModifyComponent } from './pets-modify/pets-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetsSearchComponent,
    HeaderComponent,
    PetsCreateComponent,
    PetsModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
