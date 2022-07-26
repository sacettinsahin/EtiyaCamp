import { Customer } from 'src/app/models/customer';
import { Component, OnInit } from '@angular/core';

import { CustomersService } from 'src/app/services/customers/customers.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerList!:Customer[];

  constructor(private customersService:CustomersService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customersService.getList().subscribe((response) =>{
      this.customerList = response;
    })
  }

  deleteCustomer(id:number){
    if(confirm("Are you sure want to delete?")){
      this.customersService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getCustomers();
        }, 1000);
      })
    }
    this.toastr.success("Customer deleted!!!","Delete")

  }

  selectedCustomerId(selectedCustomer: Customer):void{
    this.router.navigateByUrl(`dashboard/customer/${selectedCustomer.id}`);
 }


}
