import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList!: Product[]
  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAll().subscribe((response) =>{
      this.productList = response;
    })
  }
  //  selectedProductId(selectedProduct:Product):void{
  //    this.router.navigateByUrl(`service/${selectedProduct.id}`);
  //  }
  deleteProduct(id:number){
    if(confirm('Do you want to delete this Product?')){
      this.productService.delete(id).subscribe(()=>{
        setTimeout(()=>{
          this.getAllProducts();
        }, 1000);
      })
    }
  }

}
