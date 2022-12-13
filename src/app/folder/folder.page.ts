import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  usuarios:any
  constructor(private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.usuarioService.getUsuarios().subscribe({
      next: (res) => {this.usuarios = res,
      console.log(res);
      },
      error: (err) => console.log(err)
    })
  }

}
