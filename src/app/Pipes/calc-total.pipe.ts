import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcTotal'
})
export class CalcTotalPipe implements PipeTransform {

  transform(value: number): unknown {
    return value + (value * 0.2);
  }

}
