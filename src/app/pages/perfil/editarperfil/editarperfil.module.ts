import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarperfilPageRoutingModule } from './editarperfil-routing.module';

import { EditarperfilPage } from './editarperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    EditarperfilPageRoutingModule
  ],
  declarations: [EditarperfilPage]
})
export class EditarperfilPageModule {}
