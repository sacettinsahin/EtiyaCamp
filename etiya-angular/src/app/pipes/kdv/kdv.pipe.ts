import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, kdvValue: number): number {
    //value: pipe'ı uguladığımız veri


    //return: yeni güncellediğimiz veri
    return value + (value * kdvValue);
  }

}
