import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../common/pages/homepage/homepage.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo:'product', pathMatch:'full'},
  {path:'home', component:HomepageComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'product/:id', component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
