import { Component, OnInit, Input} from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-ofertas-producto',
  templateUrl: './ofertas-producto.page.html',
  styleUrls: ['./ofertas-producto.page.scss'],
})
export class OfertasProductoPage implements OnInit {
  producto:any
  url:any
  contenidoProducto:any

  constructor(
   private ProductoService:ProductoService,
   private modalCtrl:ModalController
 ) { }

  ngOnInit() {
    this.showProducto();
  }
  showProducto(){
    this.ProductoService.promocionProducto(this.producto).subscribe({
      next:(res)=>{
        this.producto=res;
        this.contenidoProducto=res.contenidoKit
        console.log(this.contenidoProducto);
       // debugger
        }
    })

}


}
