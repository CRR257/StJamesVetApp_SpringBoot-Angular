import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetsSearchComponent } from './pets-search/pets-search.component';
import { HeaderComponent } from './header/header.component';
import { PetsCreateComponent } from './pets-create/pets-create.component';
import { PetsModifyComponent } from './pets-modify/pets-modify.component';
import { PetsWelcomeComponent } from './pets-welcome/pets-welcome.component';
import { PetsAuthComponent } from './pets-auth/pets-auth.component';
import { FooterComponent } from './footer/footer.component';
import { BasicAuthHtppInterceptorService } from './service/authService/basic-auth-http-interceptor.service';
import { LogoutComponent } from './logout/logout.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PetsContactComponent } from './pets-contact/pets-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetsSearchComponent,
    HeaderComponent,
    PetsCreateComponent,
    PetsModifyComponent,
    PetsWelcomeComponent,
    PetsAuthComponent,
    FooterComponent,
    LogoutComponent,
    PaginationComponent,
    PetsContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true 
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
