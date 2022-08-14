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
  pageNumber!:number;
  currentPage:number = 0;
  pageSize:number = 5;
  productsInPage!:number[];
  fetchStatus = 'pending';


  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    setTimeout( () =>{
      this.getAllProducts(); 
    },2000)
      
  }
  getAllProducts(){
    this.productService.getAll().subscribe((response) =>{
      this.productList = response;
      this.page();
      this.getProductsInPage()
      this.fetchStatus = 'loaded';
    },
    (error) => {
      this.fetchStatus = 'error';
    }
    )
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

  page(){
    this.pageNumber = Math.ceil((this.productList.length)/5);
  }

  //slice: yeni array oluşturur
  //splice: eski arrayi değiştirir

  getProductsInPage(){
    const start = (this.currentPage-1)*this.pageSize
    const end = (this.currentPage) * this.pageSize
    const productsInPage = this.productList.slice(start,end)
   
    console.log(productsInPage)
  }

  back(){
    this.currentPage = this.currentPage-1;
    console.log(this.currentPage)
  }

  next(){
    this.currentPage = this.currentPage+1;
    console.log(this.currentPage)
  }
  


}
