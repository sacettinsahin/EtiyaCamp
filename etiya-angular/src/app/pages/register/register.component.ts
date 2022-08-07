import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/features/customers/models/customer';
import { CustomersService } from 'src/app/features/customers/services/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  //companyName = new FormControl('', Validators.required);
  constructor(private customersService: CustomersService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();

  }

  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      contactName: ['', Validators.required, Validators.minLength(3)],
      contactTitle: ['', Validators.required, Validators.minLength(2)],
      street: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      customerKey: ['', Validators.required],

    });
    //  new FormGroup({
    //    companyName: this.companyName,
    //  })
  }

  register() {
    if (this.registerForm.invalid) {
      console.warn("Gerekli alanları Doldurunuz.");
      return;
    }

    const customer: Customer = {
      ...this.registerForm.value,
      city: this.registerForm.value.city.toUpperCase()
    }
    this.customersService.add(this.registerForm.value).subscribe(response => {
      console.info(response)
    })
  }

}
