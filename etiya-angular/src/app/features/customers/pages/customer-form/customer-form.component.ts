import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/features/customers/models/customer';
import { CustomersService } from 'src/app/features/customers/services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm!: FormGroup
  customer!: Customer
  constructor(private formBuilder: FormBuilder, private customersService: CustomersService, private activatedRoute: ActivatedRoute, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCustomerIdFromRoute();
  }

  createcustomerForm() {
    this.customerForm = this.formBuilder.group({
      companyName: [this.customer?.companyName || '', Validators.required],
      contactName: [this.customer?.contactName || '', Validators.required],
      contactTitle: [this.customer?.contactTitle || '', Validators.required],
      street: [this.customer?.street || '', Validators.required],
      city: [this.customer?.city || '', Validators.required],
      region: [this.customer?.region || '', Validators.required],
      postalCode: [this.customer?.postalCode || '', Validators.required],
      country: [this.customer?.country || '', Validators.required],
      phone: [this.customer?.phone || '', Validators.required],
      customerKey: [this.customer?.customerKey || '', Validators.required]
    })
  }

  getCustomerIdFromRoute() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCustomerById(params['id']);
      else {
        this.createcustomerForm();
      }
    });
  }

  getCustomerById(id: number) {
    this.customersService.getCustomerById(id).subscribe((data) => {
      this.customer = data;
      this.createcustomerForm();
    });
  }

  save() {
    if (this.customer) {
      this.update();
    }
    else {
      this.add();
    }
  }

  update() {
    if (this.customerForm.invalid) {
      this.toastrService.warning("Please fill required areas!")
      return;
    }
    const customer: Customer = Object.assign({ id: this.customer.id }, this.customerForm.value);
    this.customersService.update(customer).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard/customers');
        this.toastrService.success("Customer succesfully updated!")
      }, 1000);
    });

  }

  add() {
    if (this.customerForm.invalid) {
      this.toastrService.warning("Please fill required areas!")
      return;
    }

    const customer: Customer = {
      ...this.customerForm.value,
    }

    this.customersService.add(customer).subscribe(() => {
      setTimeout(() => {
        this.toastrService.success("Customer succesfully added!")
        this.router.navigateByUrl('/dashboard/customers')
      }, 1000);
    })
  }
}