import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form!:FormGroup
  state:any=true;
  constructor(
      public formbuilder:FormBuilder,
      private usuarioService:UsuarioService,
      private menu: MenuController,
      private router: Router,
      private toastController: ToastController
      ) {
    this.construirForm();
   }
  get getControls() {
    return this.form.controls
   }
    construirForm(){
      this.form=this.formbuilder.group({
        email:['',[Validators.required]],
        password:['',[Validators.required,Validators.maxLength(15), Validators.minLength(8)]]
      })

    }
  ngOnInit() {
  }
  login(){
    if(this.form.valid){
      this.usuarioService.Login(this.form.value).subscribe({
        next:(res)=>{
          this.usuarioService.saveToken(res);
          this.toast(res.message)
          this.router.navigate(['tabs'])
         // this.router.navigate(['home']);
        },
        error:(err)=> this.toast(err.error.message)
      });
    }else{
        this.state=false;
    }
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
    });
    toast.present();
  }
}
