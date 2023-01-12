import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  articulos:any
  url:any
  total:number=0
  constructor(
    private carritoService:CarritoService
  ) { 
  this.url=environment.urlProducto
  }

  ngOnInit() {
    this.showCarrito()
  }
  showCarrito(){
   this.articulos = this.carritoService.showCarrito()
    this.articulos.shift()
    this.articulos.forEach((element: any) => {
      this.total+= parseFloat(element.precio_compre) 
      console.log(this.total);
      
    });
  }

}
