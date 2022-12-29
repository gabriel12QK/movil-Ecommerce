import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {
  @Input() id!: number;
  form!: FormGroup;
  usuario:any
  constructor( 
    private formb:FormBuilder,
    private modal:ModalController,
    private usuarioService:UsuarioService,
    ) {
      this.loadFormPersons()
     }

  ngOnInit() {
   this.getUsuario()
  }
  loadFormPersons() {
    this.form = this.formb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(5)]],
      last_name: ['', [Validators.required, Validators.minLength(5)]],
     // cedula: ['', [Validators.required, Validators.minLength(10)]],
      referencia: ['', [Validators.required, Validators.minLength(5)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required]],
      //password: ['', [Validators.required, Validators.minLength(8)]],
     // imagen: ['', [Validators.required]],
    });
  }
  getUsuario(){
    this.usuarioService.showUser(this.id).subscribe({
      next:(res)=>{
        this.usuario = res;
        this.loadUsuario();
        
       },
      error:(err)=>console.log(err)
    })
  }
  loadUsuario(){
    this.form.controls['id'].setValue(this.usuario.id)
    this.form.controls['name'].setValue(this.usuario.name)
    this.form.controls['last_name'].setValue(this.usuario.last_name)
    this.form.controls['referencia'].setValue(this.usuario.referencia)
    this.form.controls['direccion'].setValue(this.usuario.direccion)
    this.form.controls['telefono'].setValue(this.usuario.telefono)
    this.form.controls['email'].setValue(this.usuario.email)
  }
  cancel() {
    this.modal.dismiss();
  }
  confirm(){
    this.modal.dismiss({
      id: this.form.controls['id'].value,
       name: this.form.controls['name'].value,
       last_name: this.form.controls['last_name'].value,
       telefono: this.form.controls['telefono'].value,
       direccion: this.form.controls['direccion'].value,
       referencia: this.form.controls['referencia'].value,
       email: this.form.controls['email'].value,
    });
  }
}
