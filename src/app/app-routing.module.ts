import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiplomeAdminComponent} from './admin/diplome-admin/diplome-admin.component';
import {ProjetsAdminComponent} from './admin/projets-admin/projets-admin.component';


const routes: Routes = [
  {path: 'projets', component: ProjetsAdminComponent},
  {path: 'diplomes', component: DiplomeAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
