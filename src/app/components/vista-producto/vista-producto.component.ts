import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.scss'],
})
export class VistaProductoComponent implements OnInit {
  @Input() productoId: any
  url: any
  producto: any
  articulo: any
  aux: any
  venta: number = 0
  constructor(
    private productoService: ProductoService,
    private modalCtrl: ModalController,
    private carrito:CarritoService
  ) {
    this.url = environment.urlProducto
  }

  ngOnInit() {
    this.ShowProducto()
  }

  ShowProducto() {
    this.productoService.showProducto(this.productoId).subscribe({
      next: (res) => {
        this.producto = res[0];
        console.log(this.producto);
        debugger
      }
    })
  }
  cancel() {
    this.modalCtrl.dismiss()
  }
  add(letra: any) {

    switch (letra) {
      case 'A':
        this.venta++
        break;
      case 'B':
        if (this.venta > 0) {
          this.venta--
        }
        break;
      default:
        break;
    }
  }

  agregar(_producto: any, _venta: any) {
    let Total = _venta * _producto.precio
    this.articulo = 
      { articulo_id:_producto.id ,imagen:_producto.imagen   ,articulo_nombre: _producto.nombre, precio_publico: _producto.precio, peso: _producto.peso, tipo_peso: _producto.tipo_peso, categoria: _producto.categoria, cantidad_compra: _venta, precio_compra: Total }
    
    this.carrito.agregarCarrito(this.articulo)

  }
}
