import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';
import { VistaProductoComponent } from '../vista-producto/vista-producto.component';

@Component({
  selector: 'app-producto-marca',
  templateUrl: './producto-marca.component.html',
  styleUrls: ['./producto-marca.component.scss'],
})
export class ProductoMarcaComponent implements OnInit {
  @Input() marcaId:any
  productos:any
  url:any

  constructor(
    private productoService:ProductoService,
    private modalCtrl:ModalController,
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
        console.log(this.productos);
        //debugger
      }
    })
  }
  cancel(){
    this.modalCtrl.dismiss()
  }
  async openProducto(id:any){
    // if (this.selectedDiscipline > 0) {
       const modal = await this.modalCtrl.create({
         cssClass: '',
         component: VistaProductoComponent,
         componentProps: {
           productoId:id
         },
       });
       await modal.present();
       const { data } = await modal.onDidDismiss();
     // } else {
     //   this.serviceLoadingService.alert('Seleccione una disciplina');
     // }
   }
}

