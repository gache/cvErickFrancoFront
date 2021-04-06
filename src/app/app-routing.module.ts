import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiplomeAdminComponent} from './admin/diplome-admin/diplome-admin.component';
import {ProjetsAdminComponent} from './admin/projets-admin/projets-admin.component';
import {ExperiencesAdminComponent} from './admin/experiences-admin/experiences-admin.component';
import {LangagesAdminComponent} from './admin/langages-admin/langages-admin.component';


const routes: Routes = [
  {path: 'projets', component: ProjetsAdminComponent},
  {path: 'diplomes', component: DiplomeAdminComponent},
  {path: 'experiences', component: ExperiencesAdminComponent},
  {path: 'langages', component: LangagesAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
