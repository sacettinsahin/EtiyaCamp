import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/features/suppliers/models/supplier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppliersServiceService {
  apiControllerUrl: string = `${environment.apiUrl}/suppliers`
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.apiControllerUrl)
  }

  getSupplierById(id: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(`${this.apiControllerUrl}/${id}`);
  }
}