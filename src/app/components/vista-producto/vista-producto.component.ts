import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.scss'],
})
export class VistaProductoComponent implements OnInit {
  @Input() productoId:any
  url:any
  producto:any
  constructor( 
    private productoService:ProductoService,
    private modalCtrl:ModalController
    ) { 
    this.url=environment.urlProducto
  }

  ngOnInit() {
    this.ShowProducto()
  }

  ShowProducto(){
        this.productoService.showProducto(this.productoId).subscribe({
          next:(res)=>{
            this.producto=res;
            console.log(this.producto);
           // debugger
            }
        })
  }

}
