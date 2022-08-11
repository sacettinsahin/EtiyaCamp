import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  product!: Product;

  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute, 
    private productService:ProductService,
    private router:Router,

    ) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
  }


  createProductForm():void{
    this.productForm = this.formBuilder.group({
      name: [this.product?.name || '',Validators.required]
    })
  }

  save(){
    if(this.product) this.update();
    else{
      this.add();
    }
  }

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) =>{
      if(params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      }
    })
  }

  getProductById(id:number){
    this.productService.getById(id).subscribe((data)=> {
      this.product = data;
      this.createProductForm();
    })
  }

  

  update(){
    if(this.productForm.invalid){
      
      return
    }
    const product:Product = Object.assign({id:this.product.id}, this.productForm.value);
      this.productService.update(product).subscribe(()=>{
        setTimeout(()=>{
          this.router.navigateByUrl("products");
        },1000)
      })
  }


  add(){
    if(this.productForm.invalid){
      
      return
    }
    const product:Product={
      ...this.productForm.value,
    }
    this.productService.add(product).subscribe(()=>{
      setTimeout(()=> {
        
        this.router.navigateByUrl("products");
      },1000);
    })
  }
}


