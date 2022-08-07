import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CustomerFormComponent } from './pages/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerDashboardComponent, CustomerFormComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
