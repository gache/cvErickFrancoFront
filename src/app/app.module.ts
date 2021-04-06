import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { DiplomeAdminComponent } from './admin/diplome-admin/diplome-admin.component';
import { ProjetsAdminComponent } from './admin/projets-admin/projets-admin.component';
import { ExperiencesAdminComponent } from './admin/experiences-admin/experiences-admin.component';
import { LangagesAdminComponent } from './admin/langages-admin/langages-admin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarAdminComponent,
    DiplomeAdminComponent,
    ProjetsAdminComponent,
    ExperiencesAdminComponent,
    LangagesAdminComponent,
    FooterComponent,
    HomeAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
