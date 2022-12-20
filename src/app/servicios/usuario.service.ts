import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { NavParams } from '@ionic/angular';
import { formatDate } from '@angular/common';


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

    return this.http.post<any>(`${environment.urlApi}registro`,params)
  }

  Login(form:any){
    const params = new FormData();
    params.set('email',form.email);
    params.set('password',form.password)
    return this.http.post<any>(`${environment.urlApi}login`,params);
  }
  saveToken(token: any) {
    localStorage.setItem('id', token.id.toString());
    localStorage.setItem('typeUserId', token.typeUserId.toString());
    localStorage.setItem('unver', token.userName);
    localStorage.setItem('email', token.email);
    localStorage.setItem('token', token.accesToken);
    localStorage.setItem('rol', token.rol);
  }

  showUser(id:any){
    return this.http.get<any>(`${environment.urlApi}show/${id}`)
  }

}
