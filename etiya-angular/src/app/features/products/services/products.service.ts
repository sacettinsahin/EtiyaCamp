import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from 'src/app/features/products/models/product';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiControllerUrl: string = `${environment.apiUrl}/products`;
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiControllerUrl);
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`);
  }

  add(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiControllerUrl, product)

  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.apiControllerUrl}/${id}`);
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiControllerUrl}/${product.id}`, product)
  }
}
