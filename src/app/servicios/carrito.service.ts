import { Injectable } from '@angular/core';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }


  agregarCarrito(articulo:any){
  
    if (JSON.parse(localStorage.getItem("Articulo")||'{}') == null) {
      localStorage.setItem('Articulo', JSON.stringify(articulo))
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
      myJsonArrayObject.push(articulo)
      myJsonArrayObject = myJsonArrayObject.filter(e => e != null)
      localStorage.removeItem("Articulo")
      localStorage.setItem("Articulo", JSON.stringify(myJsonArrayObject))
    }
    return console.log("agregador correctamente");
    
  }


  showCarrito(){
    var aux=JSON.parse(localStorage.getItem("Articulo")||'{}')
    return aux
  }
}
