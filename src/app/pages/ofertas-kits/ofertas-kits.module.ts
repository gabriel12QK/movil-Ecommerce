import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasKitsPageRoutingModule } from './ofertas-kits-routing.module';

import { OfertasKitsPage } from './ofertas-kits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasKitsPageRoutingModule
  ],
  declarations: [OfertasKitsPage]
})
export class OfertasKitsPageModule {}
