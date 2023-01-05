import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasProductoPage } from './ofertas-producto.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasProductoPageRoutingModule {}
