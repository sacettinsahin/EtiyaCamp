import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string):any[] {
    return value.filter(p => p.name.toLowerCase().indexOf(filterText.toLowerCase())!==-1
    );
  }

}
