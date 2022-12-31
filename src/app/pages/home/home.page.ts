import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';
import { VistaProductCategoryComponent } from 'src/app/components/vista-product-category/vista-product-category.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario:any
  fileSelect: any;
  file: File | any;
  imagen: any;
url:any
  constructor(
    private productoService:ProductoService,
    private alertController: AlertController,
    private modalCtrl:ModalController,
    private router:Router
  ) { 
    this.url=environment.urlPersona
  }
  ngOnInit() {
  }

  async opencategory(){
    // if (this.selectedDiscipline > 0) {
      const modal = await this.modalCtrl.create({
        cssClass: '',
        component: VistaProductCategoryComponent,
        componentProps: {
          productoId:1
        },
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
     // } else {
     //   this.serviceLoadingService.alert('Seleccione una disciplina');
     // }
  }


}
