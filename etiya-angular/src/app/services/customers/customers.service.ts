import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiControllerUrl:string = `${environment.apiUrl}/customers`;

  constructor(private httpClient:HttpClient) { }

  

  getList():Observable<Customer[]>{
    // <> Generic
    return this.httpClient.get<Customer[]>(this.apiControllerUrl)
  }

  gwtById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`)
  }

  add(customer:Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer); //post ve putta (this.api....., "türü")
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`, customer); //post ve putta (this.api....., "türü")
  }

  delete(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`)
  }
}
