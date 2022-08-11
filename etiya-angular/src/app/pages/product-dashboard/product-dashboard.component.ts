import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Product from 'src/app/models/product';


import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  productList!: Product[];
  filterText:string = "";

  constructor(private productsService:ProductsService, private router:Router, private toastr:ToastrService, ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productsService.getList().subscribe((response) => {
      this.productList = response;
    })
  }

  deleteProduct(id:number){ 
    if(confirm("Are you sure want to delete?")){
      this.productsService.delete(id).subscribe(()=>{
        setTimeout(() => {
          this.getProducts();
        }, 1000);
      })
    }
    this.toastr.success("Product deleted!!!","Delete")
  }

  selectedProductId(selectedProduct: Product):void{
    this.router.navigateByUrl(`dashboard/product/${selectedProduct.id}`);
 }

}
