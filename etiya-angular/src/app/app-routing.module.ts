import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage', component:HomepageComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'dashboard/customer', component:CustomerComponent},
  {path: 'customer-detail/:id', component:CustomerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
