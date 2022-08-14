import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers/customers.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;


  //companyName = new FormControl('',Validators.required);

  constructor(private formBuilder:FormBuilder, private customerServices:CustomersService, private toastr:ToastrService) { }


  ngOnInit(): void {
    this.createRegisterForm();

  }


  createRegisterForm(): void{
    this.registerForm = this.formBuilder.group({
      companyName: [ '', [Validators.required,Validators.minLength(2)]],
      contactName: ['',[Validators.required,Validators.minLength(2)]],
      contactTitle: ['',[Validators.required,Validators.minLength(2)]],
      street: ['',Validators.required],
      city: ['',Validators.required],
      region: ['',Validators.required],
      postalCode: ['',Validators.required],
      country: ['',Validators.required],
      phone: ['',Validators.required],
      customerKey: ['',[Validators.required,Validators.minLength(2)]],

    })
    
    // this.registerForm = new FormGroup({
    //   companyName : this.companyName
    // })
  }

  register(){
    if (this.registerForm.invalid) {
      this.toastr.warning("Fill the all area!!!","Error");
      return;
    }

    const customer:Customer = {
      ...this.registerForm.value,
    }
    this.toastr.success("Customer succesfully add!","Add");
    this.customerServices.add(customer).subscribe(response =>{

      console.info(response)
    })
  }

}
