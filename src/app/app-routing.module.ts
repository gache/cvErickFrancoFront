import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomeAdminComponent } from './admin/diplome-admin/diplome-admin.component';
import { ProjetsAdminComponent } from './admin/projets-admin/projets-admin.component';
import { ExperiencesAdminComponent } from './admin/experiences-admin/experiences-admin.component';
import { LangagesAdminComponent } from './admin/langages-admin/langages-admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreatediplomeComponent } from './admin/create/creatediplome/creatediplome.component';
import { LoginComponent } from './utilisateur/login/login.component';
import { AuthGuard } from './utilisateur/guards/auth.guard';
import { RoleGuard } from './utilisateur/guards/role.guard';


const routes: Routes = [
  { path: 'homeAdmin', component: HomeAdminComponent },
  { path: 'projetsAdmin', component: ProjetsAdminComponent },
  { path: 'diplomesAdmin', component: DiplomeAdminComponent },
  { path: 'experiencesAdmin', component: ExperiencesAdminComponent },
  { path: 'langagesAdmin', component: LangagesAdminComponent },
  { path: 'createDiplome/form', component: CreatediplomeComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'createDiplome/form/:id', component: CreatediplomeComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'ADMIN' } },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'homeAdmin' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
