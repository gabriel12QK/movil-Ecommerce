import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertasProductoPageRoutingModule } from './ofertas-producto-routing.module';

import { OfertasProductoPage } from './ofertas-producto.page';
import { PipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertasProductoPageRoutingModule,
    PipeModule
  ],
  declarations: [OfertasProductoPage]
})
export class OfertasProductoPageModule {}
