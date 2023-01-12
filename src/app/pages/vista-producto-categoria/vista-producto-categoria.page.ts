import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { VistaProductoComponent } from 'src/app/components/vista-producto/vista-producto.component';
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
  valid=false
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


  async openProducto(id:any){
    const modal = await this.modalCtrl.create({
      cssClass: '',
      component: VistaProductoComponent,
      componentProps: {
        productoId:id
      },
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
}
  showProductoCategoria(){
        this.productoService.showProductoCategoria(this.productoId).subscribe({
          next:(res)=>{
            this.valid=true
            this.producto=res;
            console.log(res);
            },
            error:(e)=>{
                this.producto=e.error.message
                // console.log(this.productos);
                // debugger
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
