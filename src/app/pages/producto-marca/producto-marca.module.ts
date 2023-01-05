import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoMarcaPageRoutingModule } from './producto-marca-routing.module';

import { ProductoMarcaPage } from './producto-marca.page';
import { PipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoMarcaPageRoutingModule,
    PipeModule,
  ],
  declarations: [ProductoMarcaPage]
})
export class ProductoMarcaPageModule {}
