import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjetsComponent} from './admin/projets/projets.component';


const routes: Routes = [
  {path: 'projets', component: ProjetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
