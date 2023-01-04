import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaProductoCategoriaPage } from './vista-producto-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: VistaProductoCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaProductoCategoriaPageRoutingModule {}
