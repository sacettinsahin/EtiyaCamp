import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent implements OnInit {

  productRegisterForm!: FormGroup;

  constructor(private formBuilder:FormBuilder, private productsServices:ProductsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createProductRegisterForm();
  }

  createProductRegisterForm(): void{
    this.productRegisterForm = this.formBuilder.group({
      id: [ '',],
      supplierId: [ '', [Validators.required]],
      categoryId: ['',[Validators.required]],
      quantityPerUnit: ['',[Validators.required,Validators.minLength(2)]],
      unitPrice: ['',Validators.required],
      unitsInStock: ['',Validators.required],
      unitsOnOrder: ['',Validators.required],
      reorderLevel: ['',Validators.required],
      discontinued: ['',Validators.required],
      name: ['',Validators.required],
    })
  }

  register(){
    if (this.productRegisterForm.invalid) {
      this.toastr.warning("Fill the all area!!!","Error");
      return;
    }

    const product:Product = {
      ...this.productRegisterForm.value,
    }
    this.toastr.success("Product succesfully add!","Add");
    this.productsServices.add(product).subscribe(response =>{
      console.info(response)
    })
  }

}
