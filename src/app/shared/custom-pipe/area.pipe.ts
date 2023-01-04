import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'area'
})
export class AreaPipe implements PipeTransform {

  transform(area: number, radius: number): number {
    return ((3.142)*(area*area));
  }

}
