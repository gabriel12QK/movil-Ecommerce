import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KitsService {

  constructor(private http: HttpClient) { }



  ShowKits(id:any){
    return this.http.get<any>(`${environment.urlApi}showOfertasKits`)
  }
}
