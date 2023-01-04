import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  showProducto(id:any){
    return this.http.get<any>(`${environment.urlApi}showProducto/${id}`)
  }

  ShowPromocion(id:any){
    return this.http.get<any>(`${environment.urlApi}showPromocion/${id}`)
  }

  showProductoCategoria(id:any){
    return this.http.get<any>(`${environment.urlApi}showProductoCategoria/${id}`)
  }

  showProductoMarca(id:any)
  {
    return this.http.get<any>(`${environment.urlApi}showProductoMarca/${id}`)
  }


}
