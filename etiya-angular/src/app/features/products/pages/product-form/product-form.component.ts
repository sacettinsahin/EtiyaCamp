import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/features/categories/models/category';
import Product from 'src/app/features/products/models/product';

import { Supplier } from 'src/app/features/suppliers/models/supplier';
import { CategoriesService } from 'src/app/features/categories/services/categories.service';
import { ProductsService } from 'src/app/features/products/services/products.service';
import { SuppliersServiceService } from 'src/app/features/suppliers/services/suppliers.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm!: FormGroup
  product!: Product
  categoryList!: Category[]
  supplierList!: Supplier[]
  constructor(private formBuilder: FormBuilder, private productService: ProductsService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private toastrService: ToastrService, private supplierService: SuppliersServiceService,
    private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getSuppliers();
    this.getCategories();
  }

  getSuppliers() {
    this.supplierService.getList().subscribe((data) => {
      this.supplierList = data;
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categoryList = data;
    })
  }

  createProductForm() {
    this.productForm = this.formBuilder.group({
      name: [this.product?.name || '', Validators.required],
      categoryId: [this.product?.categoryId || '', Validators.required],
      supplierId: [this.product?.supplierId || '', Validators.required],
      quantityPerUnit: [this.product?.quantityPerUnit || '', Validators.required],
      unitPrice: [this.product?.unitPrice || '', Validators.required],
      unitsInStock: [this.product?.unitsInStock || '', Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder || '', Validators.required],
      reorderLevel: [this.product?.reorderLevel || '', Validators.required],
      discontinued: [this.product?.discontinued || '', Validators.required],
    })
  }

  getProductIdFromRoute() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else {
        this.createProductForm();
      }
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.createProductForm();
    });
  }

  save() {
    if (this.product) {
      this.update();
    }
    else {
      this.add();
    }
  }

  update() {
    if (this.productForm.invalid) {
      this.toastrService.warning("Please fill required areas!")
      return;
    }
    const product: Product = Object.assign({ id: this.product.id }, this.productForm.value);
    this.productService.update(product).subscribe(() => {
      setTimeout(() => {
        this.router.navigateByUrl('/dashboard/products');
        this.toastrService.success("Product succesfully updated!")
      }, 1000);
    });

  }

  add() {
    if (this.productForm.invalid) {
      this.toastrService.warning("Please fill required areas!")
      return;
    }

    const product: Product = {
      ...this.productForm.value,
    }

    this.productService.add(product).subscribe(() => {
      setTimeout(() => {
        this.toastrService.success("Product succesfully added!")
        this.router.navigateByUrl('/dashboard/products')
      }, 1000);
    })
  }
}