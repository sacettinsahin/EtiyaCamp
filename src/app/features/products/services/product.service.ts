import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiControllerUrl:string = `${environment.apiUrl}/services`;

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiControllerUrl);
  }

  getById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`)
  }

  add(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.apiControllerUrl,product);
  }

  delete(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(`${this.apiControllerUrl}/${id}`)
  }

  update(product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.apiControllerUrl}/${product.id}`, product)
  }
}


