import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forint'
})
export class ForintPipe implements PipeTransform {

  transform(price: string,): string {
    if (price === null || price === undefined) {
      return '';
    }
      return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' Ft';
  }

}
