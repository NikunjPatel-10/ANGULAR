import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number, countrycode: string) {
    let newValue;
    if (countrycode === 'pound') {
      newValue = '£' + value;
    }
    else if (countrycode === 'rupees') {
      newValue = '₹' + value;
    }
    else if (countrycode === 'dollar') {
      newValue = '$' + value;
    }
    return newValue;
  }

}
