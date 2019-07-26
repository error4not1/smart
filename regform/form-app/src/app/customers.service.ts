import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private baseUrl = 'http://localhost:21023/Service1.svc/AddCustomer';

  constructor(private http:HttpClient) { }

  savecustomer(customer:Customer): Observable<Object>
  {
    console.log(customer);
    return this.http.post(this.baseUrl,customer);
  }
}
