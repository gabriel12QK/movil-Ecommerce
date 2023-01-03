import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';;

@Component({
  selector: 'app-vista-product-category',
  templateUrl: './vista-product-category.component.html',
  styleUrls: ['./vista-product-category.component.scss'],
})
export class VistaProductCategoryComponent implements OnInit {
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
    this.showProductoCategoria()
  }

  showProductoCategoria(){
        this.productoService.showProductoCategoria(this.productoId).subscribe({
          next:(res)=>{
            this.producto=res;
            console.log(res);
            }
        })
  }
  cancel(){
    this.modalCtrl.dismiss()
  }
}

