import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProducCategoryService {

  constructor(private http:HttpClient) { }
  showProductoCategoria(id:any){
    return this.http.get<any>(`${environment.urlApi}showProducto/${id}`)
  }
}
