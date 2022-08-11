import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Category from 'src/app/models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiControllerUrl: string = `${environment.apiUrl}/categories`
  
  constructor(private httpClient:HttpClient) { }

  getList():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiControllerUrl)
  }
}
