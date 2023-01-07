import { Component, OnInit, Input} from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';;

@Component({
  selector: 'app-ofertas-producto',
  templateUrl: './ofertas-producto.page.html',
  styleUrls: ['./ofertas-producto.page.scss'],
})
export class OfertasProductoPage implements OnInit {
  producto:any
  url:any
  contenidoProducto:any
  text:string = '';
  desc:any
  precioPromo:any
  valid=false
  constructor(
   private ProductoService:ProductoService,
   private modalCtrl:ModalController
 ) {
  this.url=environment.urlProducto
  }

  ngOnInit() {
    this.showProducto();
  }
  showProducto(){
   this.ProductoService.promocionProducto(this.producto).subscribe({
      next:(res)=>{
        this.producto=res;
        /* this.contenidoProducto=res.contenidoProducto
        console.log(this.contenidoProducto);
        this.desc=(this.producto.descuento/100)
        this.precioPromo=(this.producto.precio-(this.producto.precio*this.desc)).toFixed(2) */
        }
    })

  }
buscar(event:any){
  this.text= event.detail.value;
}

}
