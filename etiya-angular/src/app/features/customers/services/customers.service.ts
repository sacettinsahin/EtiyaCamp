import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`;

  constructor(private httpClient: HttpClient) { }

  add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiControllerUrl, customer);
  }
  getList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiControllerUrl)
  }
  delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`);
  }
  update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`, customer)
  }
  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`)
  }
}
