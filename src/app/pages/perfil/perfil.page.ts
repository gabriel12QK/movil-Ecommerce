import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario:any
  fileSelect: any;
  file: File | any;
  image: any;
  constructor(
    private usuarioService:UsuarioService
  ) { }

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
    this.image = {
      id: this.usuario.id,
      image: this.file,
    };

    // this.usuarioService.updateImage(this.image).subscribe({
    //   next:(res)=>{},
    //   error:(err)=>this.alert(err.error.message)
    // });
  }
  showUsuario(){
        this.usuarioService.showUser((localStorage.getItem('id'))).subscribe({
          next:(res)=> {
            this.usuario=res
            console.log(this.usuario);
          },
        }) 
  }
}
