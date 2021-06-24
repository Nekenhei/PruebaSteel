import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitulo'
})
export class FilterTituloPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const libroelegido = []
    for(const libro of value){
      if (libro.tituloLibro.toLowerCase().indexOf(arg) > -1){
        libroelegido.push(libro)
      }
    }
    return libroelegido
  }
}
