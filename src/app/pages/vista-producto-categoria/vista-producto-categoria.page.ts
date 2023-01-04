import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';;

@Component({
  selector: 'app-vista-producto-categoria',
  templateUrl: './vista-producto-categoria.page.html',
  styleUrls: ['./vista-producto-categoria.page.scss'],
})
export class VistaProductoCategoriaPage implements OnInit {
  @Input() productoId:any
  url:any
  producto:any
  text:string = '';
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

  buscar(event:any){
      this.text= event.detail.value;
}

}
