import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';


@NgModule({
  declarations: [VistaProductoComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    VistaProductoComponent,
  ]
})
export class ComponentsModule { }
