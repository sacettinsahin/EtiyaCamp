import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

//isProduct:boolean = false;
productList!:Product[];
cartItems: any[] =[];
//productList! :any[]

  constructor(private productService:ProductsService) {
    //* Dependency Injection ile Angular otomatik olarak inject eder.
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts();
    }, 1000);
    
  }

  getProducts(){
    this.productService.getList().subscribe((response) =>{
      this.productList = response;  
      //if(this.productList.length>0) this.isProduct = true; html alanında length ile yaptık
    })
  }

  addToCart(product:Product){
    let itemToFind = this.cartItems.find((c)=> c == product.name);
    if (!itemToFind) {
      this.cartItems.push(product.name)
    }
    else{
      console.log("Ürün zaten ekli!!")
    }
  }

 

}
