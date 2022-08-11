import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductRegisterComponent } from './pages/product-register/product-register.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'register',component:RegisterComponent },
  {path: 'dashboard/customer',component:DashboardComponent},
  {path: 'dashboard/customer/add', component:RegisterComponent},
  {path: 'dashboard/customer/:id',component:UpdateCustomerComponent },
  {path: 'dashboard/product',component:ProductDashboardComponent},
  {path: 'dashboard/product/add', component:ProductRegisterComponent},
  {path: 'dashboard/product/:id',component:UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
