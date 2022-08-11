import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { ProductsModule } from './products/products.module';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ProductsModule,
    HttpClientModule
  ]
})
export class FeaturesModule { }
