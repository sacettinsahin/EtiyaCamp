import { Component, OnInit } from '@angular/core';
import Product from 'src/app/features/products/models/product';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  today: number = Date.now();
  productList: Product[] = []
  cartItems: any[] = []
  filterText: string = "";
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getProducts()
    }, 1000); 
    //const value:string ="A";
    //switch(value) {
     // case "B":
      //  console.log('B', value);
     //   break;
     //   case "A":
      //    console.log('A' , value);
       //   break;
       //   default:console.log('default' , value)
       //   break;
    //}
  }

  getProducts() {
    this.productsService.getProducts().subscribe(response => {
      this.productList = response;
    })
  }

  addToCart(product: Product) {
    let itemToFind = this.cartItems.find(c => c == product)
    if (!itemToFind) {
      this.cartItems.push(product)
    }
    else {
      console.log("Ürün zaten ekli!")
    }

  }

}