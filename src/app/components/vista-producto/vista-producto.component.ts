import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
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
    private modalCtrl: ModalController
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
    this.articulo = [
      { articulo_id:_producto.id ,imagen:_producto.imagen   ,articulo_nombre: _producto.nombre, precio_publico: _producto.precio, peso: _producto.peso, tipo_peso: _producto.tipo_peso, categoria: _producto.categoria, cantidad_compra: _venta, precio_compre: Total }
    ]
    if (JSON.parse(localStorage.getItem("Articulo")||'{}') == null) {
      localStorage.setItem('Articulo', JSON.stringify(this.articulo))
    }
    else 
    {
      var myJsonArrayObject = []
      var carrito = []
      carrito = JSON.parse(localStorage.getItem("Articulo") || '{}')
      if (carrito.length >= 2) {
        carrito.map((option: any) =>
          myJsonArrayObject.push(option))
      }
      else {
        myJsonArrayObject.push(JSON.parse(localStorage.getItem("Articulo") || '{}'))
      }
      myJsonArrayObject.push(this.articulo)
      myJsonArrayObject = myJsonArrayObject.filter(e => e != null)
      localStorage.removeItem("Articulo")
      localStorage.setItem("Articulo", JSON.stringify(myJsonArrayObject))
    }
    //console.log('hola');
    this.aux = JSON.parse(localStorage.getItem("Articulo") || '{}')
    console.log(this.aux);
    this.venta = 0


  }
}
