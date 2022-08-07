import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Product from 'src/app/features/products/models/product';
import { ProductsService } from 'src/app/features/products/services/products.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  productList!: Product[]
  constructor(private toastrService: ToastrService, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.productList = response;
    })
  }

  deleteProduct(id: number) {
    if (confirm("Are you sure want to delete?")) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.toastrService.success("Product is delete!", "Update")
        setTimeout(() => {
          this.getProducts();
        }, 1000);
      })
    }

  }

  selectedProductId(selectedProduct: Product): void {
    this.router.navigateByUrl(`dashboard/product/${selectedProduct.id}`);
  }

}