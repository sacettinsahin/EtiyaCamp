import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { KdvPipe } from './pipes/kdv/kdv.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductRegisterComponent } from './pages/product-register/product-register.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ClickProductsDirective } from './directives/click-products/click-products.directive';


import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CategoriesModule } from './features/categories/categories.module';
import { CustomersModule } from './features/customers/customers.module';
import { OrdersModule } from './features/orders/orders.module';
import { SuppliersModule } from './features/suppliers/suppliers.module';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { AddProductComponent } from './features/products/pages/add-product/add-product.component';
import { HomepageComponent } from './shared/pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ProductCardComponent } from './features/products/components/product-card/product-card.component';
import { CategoryListComponent } from './features/categories/components/category-list/category-list.component';

@NgModule({
  declarations: [

    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryListComponent,
    RegisterComponent,
    DashboardComponent,
    UpdateCustomerComponent,
    KdvPipe,
    SaleDirective,
    ProductDashboardComponent,
    ProductRegisterComponent,
    UpdateProductComponent,
    FilterPipe,
    ClickProductsDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    ProductsModule,
    CoreModule,
    SharedModule,
    CategoriesModule,
    CustomersModule,
    OrdersModule,
    SuppliersModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }