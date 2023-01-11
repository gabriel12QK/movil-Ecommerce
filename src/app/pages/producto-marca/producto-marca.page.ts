import { Component, OnInit, Input} from '@angular/core';
import { VistaProductoComponent } from 'src/app/components/vista-producto/vista-producto.component';
import { ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';
import { error } from 'console';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto-marca',
  templateUrl: './producto-marca.page.html',
  styleUrls: ['./producto-marca.page.scss'],
})
export class ProductoMarcaPage implements OnInit {
  @Input() marcaId:any
  productos:any
  url:any
  text:string = '';
  valid=false
  constructor(
    private productoService:ProductoService,
    private modalCtrl:ModalController,
    private router:Router,
  ) { 
    this.url=environment.urlProducto
  }

  ngOnInit() {
    this.showProductoMarca()
  }

  showProductoMarca(){
    this.productoService.showProductoMarca(this.marcaId).subscribe({
      next:(res)=>{
        this.productos=res
        this.valid=true
        console.log(this.productos);
        //debugger
      },
      error:(e)=>{
          this.productos=e.error.message
          // console.log(this.productos);
          // debugger
      }
    })
  }
  cancel(){
    this.modalCtrl.dismiss()
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

  buscar(event:any){
    this.text= event.detail.value;
}


}
