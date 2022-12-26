import { Component, Input, OnInit } from '@angular/core';
import { KitsService } from 'src/app/servicios/kits.service';

@Component({
  selector: 'app-vista-kit',
  templateUrl: './vista-kit.component.html',
  styleUrls: ['./vista-kit.component.scss'],
})
export class VistaKitComponent implements OnInit {
  @Input() kitId:any
   kit:any
   url:any
   contenidoKit:any
  constructor(
    private kitService:KitsService
  ) { }

  ngOnInit() {
    this.showKit()
  }

  showKit(){
    this.kitService.ShowKits(this.kitId).subscribe({
      next:(res)=>{
        this.kit=res[0];
        this.contenidoKit=res[0].contenidoKit
        console.log(this.contenidoKit);
       // debugger
        }
    })
  }

}
