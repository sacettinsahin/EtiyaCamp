import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumerate'
})
export class EnumeratePipe implements PipeTransform {

  transform(value: number): number[] {
    const arr = []
    for (let i = 0; i < value; i++) {
      arr.push(i);
    }
    return  arr
  }

}
