import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsSearchComponent } from './pets-search/pets-search.component';
import { HeaderComponent } from './header/header.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetsSearchComponent,
    HeaderComponent,
    PetsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
