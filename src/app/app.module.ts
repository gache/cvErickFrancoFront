import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importation de la route
import { AppRoutingModule } from './app-routing.module';

// imporation pour travailler avec le formulaire
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importation pour faire petitions Http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Composants
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { DiplomeAdminComponent } from './admin/diplome-admin/diplome-admin.component';
import { ProjetsAdminComponent } from './admin/projets-admin/projets-admin.component';
import { ExperiencesAdminComponent } from './admin/experiences-admin/experiences-admin.component';
import { LangagesAdminComponent } from './admin/langages-admin/langages-admin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatediplomeComponent } from './admin/create/creatediplome/creatediplome.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { TokenInterceptor } from './utilisateur/interceptors/token.interceptor';
import { AuthInterceptor } from './utilisateur/interceptors/auth.interceptor';



@NgModule( {
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    DiplomeAdminComponent,
    ProjetsAdminComponent,
    ExperiencesAdminComponent,
    LangagesAdminComponent,
    FooterComponent,
    HomeAdminComponent,
    PagenotfoundComponent,
    CreatediplomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
} )
export class AppModule { }
