import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';
import { VistaProductCategoryComponent } from 'src/app/components/vista-product-category/vista-product-category.component';
import { CategoriasService } from 'src/app/servicios/categorias.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @Input() 
  usuario:any
  fileSelect: any
  file: File | any
  imagen: any;
  url:any
  urlC:any
  producto:any
  productoId:any
  categoriaId=1
  categoria:any
  constructor(
    private productoService:ProductoService,
    private categoriasService:CategoriasService,
    private alertController: AlertController,
    private modalCtrl:ModalController,
    private router:Router
  ) { 
    this.url=environment.urlPersona
    this.urlC=environment.urlCategoria
  }
  ngOnInit() {
    this.showCategorias()

  }


  async showCategorias(){
    this.categoriasService.showCategorias().subscribe({
      next:(res)=>{
        this.categoria=res;
        console.log(res);
        //debugger
        }
    })
}
  async opencategory(id:any){
    // if (this.selectedDiscipline > 0) {
      const modal = await this.modalCtrl.create({
        cssClass: '',
        component: VistaProductCategoryComponent,
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
