import { Component, OnInit } from '@angular/core';
import { KitsService } from 'src/app/servicios/kits.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ofertas-kits',
  templateUrl: './ofertas-kits.page.html',
  styleUrls: ['./ofertas-kits.page.scss'],
 
  
})
export class OfertasKitsPage implements OnInit {

  kit:any
  url:any
  contenidoKit:any
  text:string = '';
  
  constructor(
   private kitsService:KitsService,
   private modalCtrl:ModalController
 ) { }

  ngOnInit() {
    this.showKit();
  }
  showKit(){
    this.kitsService.ShowKits(this.kit).subscribe({
      next:(res)=>{
        this.kit=res;
        this.contenidoKit=res.contenidoKit
        console.log(this.contenidoKit);
       // debugger
        }
    })

  }
  buscar(event:any){
    this.text= event.detail.value;
  }
}
