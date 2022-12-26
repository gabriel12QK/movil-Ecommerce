import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { VistaProductoComponent } from 'src/app/components/vista-producto/vista-producto.component';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { environment } from 'src/environments/environment';
import { EditarperfilPage } from './editarperfil/editarperfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario:any
  fileSelect: any;
  file: File | any;
  imagen: any;
url:any
  constructor(
    private usuarioService:UsuarioService,
    private alertController: AlertController,
    private modalCtrl:ModalController,
    private router:Router
  ) { 
    this.url=environment.urlPersona
  }

  ngOnInit() {
    this.showUsuario()
  }
  getFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.fileSelect = reader.result;
    };
    this.file = (event.target).files[0];
     this.imagen = {
      id: this.usuario.id,
      imagen: this.file,
    };
      
    this.usuarioService.updateImage(this.imagen).subscribe({
      next:(res)=>{console.log("hola");
      },
      error:(err)=>this.alert(err.error.message)
    });
  }
  showUsuario(){
        this.usuarioService.showUser((localStorage.getItem('id'))).subscribe({
          next:(res)=> {
            this.usuario=res
            console.log(this.usuario);
          },
        }) 
  }


  async alert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'modal-delete',
      header: message,
      buttons: [
        {
          text: 'Ok',
          id: 'confirm-button'
        }
      ]
    });
    alert.present();
  }

  async editUsuario(){
    const modal = await this.modalCtrl.create({
      cssClass: '',
      component: EditarperfilPage,
      componentProps: {
        id: this.usuario.id,
        name: this.usuario.name,
        last_name: this.usuario.last_name,
        telefono: this.usuario.telefono,
        email: this.usuario.email,
        referencia:this.usuario.referencia,
        direccion:this.usuario.direccion
      },
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();
    if(!((data.id=== '')||(data.name==='')||(data.lastname==='')||(data.phone=== '')||(data.identificationCard===''))){
      this.updateUser(data);
     }
  }
   
  
  updateUser(data:any){
    if(data){
      this.usuario.name=data.name;
      this.usuario.last_name=data.last_name;
      this.usuario.telefono=data.telefono;
      this.usuario.email=data.email;
      this.usuario.referencia=data.referencia;
      this.usuario.direccion=data.direccion;
      this.usuarioService.updateUser(this.usuario).subscribe({
        next:(res)=>{console.log(res);
        }
      })
    }
  }

  logout(){
    if(this.usuarioService.logout()){
      this.router.navigate(['login']);
    }
  }

  async openProducto(){
   // if (this.selectedDiscipline > 0) {
      const modal = await this.modalCtrl.create({
        cssClass: '',
        component: VistaProductoComponent,
        componentProps: {
          productoId:2
        },
      });
      await modal.present();
      const { data } = await modal.onDidDismiss();
    // } else {
    //   this.serviceLoadingService.alert('Seleccione una disciplina');
    // }
  }
}
