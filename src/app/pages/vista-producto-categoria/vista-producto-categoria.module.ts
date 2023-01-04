import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaProductoCategoriaPageRoutingModule } from './vista-producto-categoria-routing.module';

import { VistaProductoCategoriaPage } from './vista-producto-categoria.page';
import { PipeModule } from 'src/app/pipes/pipe.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaProductoCategoriaPageRoutingModule,
    PipeModule,
  ],
  declarations: [VistaProductoCategoriaPage]
})
export class VistaProductoCategoriaPageModule {}
