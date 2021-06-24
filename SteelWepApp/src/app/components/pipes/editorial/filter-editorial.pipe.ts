import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEditorial'
})
export class FilterEditorialPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const libroelegido = []
    for(const libro of value){
      if (libro.nombreEditorial.toLowerCase().indexOf(arg) > -1){
        libroelegido.push(libro)
      }
    }
    return libroelegido
  }
}
