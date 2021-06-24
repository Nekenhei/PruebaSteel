import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAutor'
})
export class FilterAutorPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const libroelegido = []
    for(const libro of value){
      if (libro.nombreAutor.toLowerCase().indexOf(arg) > -1){
        libroelegido.push(libro)
      }
    }
    return libroelegido
  }

}
