import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registerForm!: FormGroup;
  tipos: any;
  state: boolean = true;
  fileSelect: any;
  file: File | any;
  message!: string;
  isValid: boolean = true;
  constructor(
     private usuarioService:UsuarioService,
     public formBuilder: FormBuilder,
     private router: Router,
     public toastController: ToastController,
     private menu: MenuController
     ) {
      this.construirForm();
      }

     get getForm() {
      return this.registerForm.controls
     }

    ionViewWillEnter() {
      this.menu.enable(false);
    }

  construirForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      last_name: ['', [Validators.required, Validators.minLength(5)]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      referencia: ['', [Validators.required, Validators.minLength(5)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      imagen: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    
  }
  getFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.fileSelect = reader.result;
    };
    this.file = (event.target).files[0];
  }
  SubmitForm(){
    if (this.file) {
      this.registerForm.controls['imagen'].setValue(this.file.name);
   
    }
     if (this.registerForm.valid) {
    console.log("hola");
    
      let data={
        name:this.registerForm.value.name,
        last_name:this.registerForm.value.last_name,
        cedula:this.registerForm.value.cedula,
        direccion:this.registerForm.value.direccion,
        referencia:this.registerForm.value.referencia,
        telefono:this.registerForm.value.telefono,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        imagen:this.file,
      }
      this.usuarioService.StoreUsuario(data).subscribe({
        next: (s) => {
          debugger
          this.presentToast(s.message);
          this.registerForm.reset();
         // this.router.navigate(['/login']);
        }, error: (e) => {
          this.presentToast('Email o usuario ya existente');
        }
      })
    } else {
      this.state=false;
    }
  }
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
