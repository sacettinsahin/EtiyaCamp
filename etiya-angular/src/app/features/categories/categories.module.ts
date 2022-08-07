import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [ CategoryListComponent
  ]
})
export class CategoriesModule { }
