import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customerList!:Customer[];

  constructor(private customerService:CustomersService,private router:Router ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getList().subscribe((response) => {
      this.customerList = response;
    })
  }

  deleteCustomer(val:number){
    if(confirm("Are you sure want to delete?")){
      this.customerService.delete(val).subscribe()
    }    
    setTimeout(() => {
      location.reload()
    }, 1000);
  }

  selectedCustomerId(selectedCustomer: Customer):void{
    this.router.navigateByUrl(`customer-detail/${selectedCustomer.id}`);
  }

}
