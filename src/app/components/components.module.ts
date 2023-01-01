import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import { VistaKitComponent } from './vista-kit/vista-kit.component';
import { VistaPromocionProductoComponent } from './vista-promocion-producto/vista-promocion-producto.component';
import { VistaProductCategoryComponent } from './vista-product-category/vista-product-category.component';


@NgModule({
  declarations: [VistaProductoComponent,VistaKitComponent,VistaPromocionProductoComponent,  VistaProductCategoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    VistaProductoComponent,
    VistaKitComponent,
    VistaPromocionProductoComponent,
    VistaProductCategoryComponent,
  ]
})
export class ComponentsModule { }
