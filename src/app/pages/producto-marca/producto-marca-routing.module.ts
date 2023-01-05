import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoMarcaPage } from './producto-marca.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoMarcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoMarcaPageRoutingModule {}
