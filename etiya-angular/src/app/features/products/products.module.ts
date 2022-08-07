import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { FormsModule } from '@angular/forms';
import { ProductPipe } from './pipes/filter/product.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { ClickProductCardDirective } from './directives/click-product-card/click-product-card.directive';


@NgModule({
  declarations: [
    ProductCardComponent, 
    ProductListComponent, 
    SaleDirective , 
    KdvPipe, 
    ProductPipe,
    
    ClickProductCardDirective,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    CoreModule
  ],
  exports:[
    ProductListComponent, 
    ProductCardComponent
  ]
})
export class ProductsModule { }
