import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcTax'
})
export class CalcTaxPipe implements PipeTransform {

  transform(value: number): unknown {
    return value * 0.2;
  }

}
