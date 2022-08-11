import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productForm!: FormGroup;
  product!:Product;

  constructor(private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, private productsService:ProductsService, private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }

  createProductForm(): void{

    this.productForm = this.formBuilder.group({
      id: [ this.product.id,Validators.required],
      supplierId: [ this.product.supplierId, [Validators.required]],
      categoryId: [this.product.categoryId,[Validators.required]],
      quantityPerUnit: [this.product.quantityPerUnit,[Validators.required,Validators.minLength(2)]],
      unitPrice: [this.product.unitPrice,Validators.required],
      unitsInStock: [this.product.unitsInStock,Validators.required],
      unitsOnOrder: [this.product.unitsOnOrder,Validators.required],
      reorderLevel: [this.product.reorderLevel,Validators.required],
      discontinued: [this.product.discontinued,Validators.required],
      name: [this.product.name,Validators.required],
    })

  }

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getProductById(id:number) {
    this.productsService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.createProductForm();
    });
  }

  update() { 
    if (this.productForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Update")
      return;
    }
    const product:Product = Object.assign({id:this.product.id}, this.productForm.value); 
      this.productsService.update(product).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/product");
          this.toastr.success("Customer succesfully updated!","Update")
        }, 1000);
      });
  }

  save(){
    if(this.product) this.update();
    else{
      this.add();
    }
  };

  add(){
    if (this.productForm.invalid) {
      this.toastr.warning("Please fill the required areas!!!","Add")
      return;
    }

    const product:Product = {
      ...this.productForm.value,
    }

    this.productsService.add(product).subscribe(response =>{
      setTimeout(() => {
        this.toastr.success("Product succesfully add!","Add")
        this.router.navigateByUrl("/dashboard/product");
      }, 1000);
    })
  }
}
