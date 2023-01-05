import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasKitsPageRoutingModule } from './ofertas-kits-routing.module';

import { OfertasKitsPage } from './ofertas-kits.page';
import { OfertasKitsPipe } from 'src/app/pipes/ofertas-kits.pipe';
import { PipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasKitsPageRoutingModule,
    PipeModule,
  ],
  declarations: [OfertasKitsPage]
})
export class OfertasKitsPageModule {}
