import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NavParams } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }


  getUsuarios(){
    return this.http.get<any>(`${environment.urlApi}user-index`)
  }

  StoreUsuario(form:any){
    const params = new FormData();
    params.set('name',form.name);
    params.set('last_name',form.last_name);
    params.set('email',form.email);
    params.set('password',form.password);
    params.set('cedula',form.cedula);
    params.set('referencia',form.referencia);
    params.set('direccion',form.direccion);
    params.set('imagen',form.imagen);
    params.set('telefono',form.telefono);
    params.set('id_tipo_usuario',form.id_tipo_usuario);

    return this.http.post<any>(`${environment.urlApi}register`,params)
  }

}
