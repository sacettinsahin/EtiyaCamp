import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, kdvValue:number): number {
    return value + (value * kdvValue );
  }

}