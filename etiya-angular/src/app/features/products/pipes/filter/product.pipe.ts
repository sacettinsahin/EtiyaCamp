import { Pipe, PipeTransform } from '@angular/core';
import Product from 'src/app/features/products/models/product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product[] , filterText:string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
