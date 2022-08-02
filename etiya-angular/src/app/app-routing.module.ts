import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'register',component:RegisterComponent },
  {path: 'dashboard',component:DashboardComponent},
  {path: 'dashboard/customer', component:RegisterComponent},
  {path: 'dashboard/customer/:id',component:UpdateCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
