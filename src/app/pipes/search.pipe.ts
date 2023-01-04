import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(arreglo: any[], texto: string): any[] {
    if(texto === ''){
      return arreglo;
    }
    texto = texto.toLowerCase();

    return arreglo.filter( item => {
  /*     console.log(item.nombre.toLowerCase().includes(texto)); */
      return item.nombre.toLowerCase().includes(texto);
     
      
    });
  }

}
