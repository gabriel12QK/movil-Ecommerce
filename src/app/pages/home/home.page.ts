import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/servicios/producto.service';
import { environment } from 'src/environments/environment';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { identity } from 'rxjs';
import { VistaProductoCategoriaPage } from '../vista-producto-categoria/vista-producto-categoria.page';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { ProductoMarcaPage } from '../producto-marca/producto-marca.page';
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
  marca:any
  constructor(
    private productoService:ProductoService,
    private categoriasService:CategoriasService,
    private alertController: AlertController,
    private modalCtrl:ModalController,
    private router:Router,
    private marcaService:MarcasService

  ) { 
    this.url=environment.urlMarca
    this.urlC=environment.urlCategoria
  }
  ngOnInit() {
    this.showCategorias()
    this.showMarcas()

  }


  async showCategorias(){
    this.categoriasService.showCategorias().subscribe({
      next:(res)=>{
        this.categoria=res;
        console.log(res);
        }
    })
}

async showMarcas(){
  this.marcaService.showMarcas().subscribe({
    next:(res)=>{
      this.marca=res;
      console.log(res);
      }
  })
}

async openProductoCategoria(id:any){
  // if (this.selectedDiscipline > 0) {
     const modal = await this.modalCtrl.create({
       cssClass: '',
       component: VistaProductoCategoriaPage,
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
 


 async openProductoMarca(id:any){
  // if (this.selectedDiscipline > 0) {
     const modal = await this.modalCtrl.create({
       cssClass: '',
       component: ProductoMarcaPage,
       componentProps: {
        marcaId:id
       },
     });
     await modal.present();
     const { data } = await modal.onDidDismiss();
   // } else {
   //   this.serviceLoadingService.alert('Seleccione una disciplina');
   // }
 }


}
