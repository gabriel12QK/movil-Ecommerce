import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vista-promocion-producto',
  templateUrl: './vista-promocion-producto.component.html',
  styleUrls: ['./vista-promocion-producto.component.scss'],
})
export class VistaPromocionProductoComponent implements OnInit {
  @Input() promocionId:any
  venta:any
  producto:any
  url:any
  desc:any
  precioPromo:any
  constructor(
    private productoService:ProductoService,
    private modalCtrl:ModalController
  ) { 
    this.url=environment.urlProducto
  }

  ngOnInit() {
    this.showPromocion()
  }

    showPromocion(){
      this.productoService.ShowPromocion(this.promocionId).subscribe({
        next:(res)=>{
          this.producto=res[0];
          this.desc=(this.producto.descuento/100)
          this.precioPromo=(this.producto.precio-(this.producto.precio*this.desc)).toFixed(2)
          // console.log(this.precioPromo);
          // debugger
          }
      })
    }
  add(letra:any){

    switch (letra) {
      case 'A':
                 this.venta++
        break;
        case 'B':
                  if (this.venta>0) {
                    this.venta--
                  }
          break;
      default:
        break;
    }
   }
   cancel(){
    this.modalCtrl.dismiss()
  }
}
