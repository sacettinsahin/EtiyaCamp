import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/features/customers/models/customer';
import { CustomersService } from 'src/app/features/customers/services/customers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customerList!: Customer[];
  constructor(private router: Router, private customersService: CustomersService) { }

  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers() {
    this.customersService.getList().subscribe(response => {
      this.customerList = response;
    })
  }
  deleteCustomer(id: number) {
    if (confirm("Are you sure want to delete?")) {
      this.customersService.delete(id).subscribe(() => {
        setTimeout(() => {
          this.getCustomers();
        }, 1000);
      })
    }
  }
  selectedCustomerId(selectedCustomer: Customer): void {
    this.router.navigateByUrl(`dashboard/customer/${selectedCustomer.id}`);
  }
}
