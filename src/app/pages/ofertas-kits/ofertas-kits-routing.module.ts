import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertasKitsPage } from './ofertas-kits.page';

const routes: Routes = [
  {
    path: '',
    component: OfertasKitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasKitsPageRoutingModule {}
