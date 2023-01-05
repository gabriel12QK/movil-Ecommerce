import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { OfertasKitsPipe } from './ofertas-kits.pipe';




@NgModule({
  declarations: [
    SearchPipe,
    OfertasKitsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipe,
    OfertasKitsPipe,
  ]
})
export class PipeModule { }
