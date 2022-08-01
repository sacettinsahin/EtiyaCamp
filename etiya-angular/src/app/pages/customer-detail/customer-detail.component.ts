import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';


@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  
  data!:number;
  customerForm!: FormGroup;
  customer!: Customer;
  
  

  constructor(private activatedRoute:ActivatedRoute , private customersService:CustomersService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getCustomerIdFromRoute();
    
  }
  

  getCustomerIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getCustomerById(params['id']);
    });
  }

  getCustomerById(id:number){
    this.customersService.gwtById(id).subscribe((data) => {
      this.customer = data;
      this.createCustomerForm();
    });
  } 

  createCustomerForm(){
    this.customerForm = this.formBuilder.group(
      {
        id: [this.customer.id, 
          [Validators.required, Validators.minLength(1)] 

        ],
        companyName: [this.customer.companyName, //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        contactName: [this.customer.contactName, 
          [Validators.required, Validators.minLength(2)] 

        ],
        contactTitle: [this.customer.contactTitle, 
          [Validators.required, Validators.minLength(2)] 

        ],
        street: [this.customer.street, 
          [Validators.required, Validators.minLength(2)] 

        ],
        city: [this.customer.city, 
          [Validators.required, Validators.minLength(2)] 

        ],
        region: [this.customer.region, 
          [Validators.required, Validators.minLength(2)] 

        ],
        postalCode: [this.customer.postalCode, 
          [Validators.required, Validators.minLength(2)] 

        ],
        country: [this.customer.country, 
          [Validators.required, Validators.minLength(2)] 

        ],
        phone: [this.customer.phone, 
          [Validators.required, Validators.minLength(2)] 

        ],
        customerKey: [this.customer.customerKey, 
          [Validators.required, Validators.minLength(2)] 

        ],
      }
    )
  }

  updateList() {
    if(this.customerForm.invalid){
      alert("Please fill the required areas!!!")
      return;
    }
    
    this.customer = Object.assign({}, this.customerForm.value);
    this.customersService.update(this.customer).subscribe((data) => {
      setTimeout(() => {
        location.reload();
        location.href="/dashboard/customer"
        alert("Customer succesfully updated!")
      }, 1000);
    });
  }


  

 
  
  

}
