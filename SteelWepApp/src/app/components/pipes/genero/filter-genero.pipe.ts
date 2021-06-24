import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGenero'
})
export class FilterGeneroPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const libroelegido = []
    for(const libro of value){
      if (libro.genero.toLowerCase().indexOf(arg) > -1){
        libroelegido.push(libro)
      }
    }
    return libroelegido
  }

}
