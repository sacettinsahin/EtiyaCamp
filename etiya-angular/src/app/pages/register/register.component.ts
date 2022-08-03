import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private customerService:CustomersService) { } //FormBuilder servisiyle metodlarımızı oluşturacağız.

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    this.registerForm = this.formBuilder.group(
      {
        companyName: ['', //default değer
          [Validators.required, Validators.minLength(2)] //bu alan gerekli (doğrulama)

        ],
        contactName: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        contactTitle: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        street: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        city: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        region: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        postalCode: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        country: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        phone: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
        customerKey: ['', 
          [Validators.required, Validators.minLength(2)] 

        ],
      }
    )
  }

  register(): void{
    if(this.registerForm.invalid){
      console.warn("Gerekli alanları doldurunuz.");
      return;
    }
    else{
      const customer:Customer = {
        ...this.registerForm.value,
        city: this.registerForm.value.city.toUpperCase(),
      }
      
      this.customerService.add(customer).subscribe(response => {
        console.log(response);
      
      alert("Customer added.");
      })
    }
  }
}
