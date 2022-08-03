import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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
    })
  }

  addToCart(product:Product){
    let itemToFind = this.cartItems.find((c)=> c == product.name);
    if (!itemToFind) {
      this.cartItems.push(product.name)
    }
  }

 

}
