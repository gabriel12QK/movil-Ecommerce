import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
   venta:number=0
  constructor(
    private kitService:KitsService,
    private modalCtrl:ModalController
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
  cancel(){
    this.modalCtrl.dismiss()
  }
  add(letra:any){

    switch (letra) {
      case 'A':
                 this.venta++
        break;
        case 'B':
                  if (this.venta>0) {
                    this.venta--
                  }
          break;
      default:
        break;
    }
   }

}
