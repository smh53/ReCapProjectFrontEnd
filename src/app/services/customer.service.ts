import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer, CustomerDetails } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
  public  _httpClient: HttpClient
  ) { }

  getAllCustomerDetails()
  {
    return this._httpClient.get<ListResponseModel<CustomerDetails>>(`${environment.customerUrl}GetAllCustomerDetails`)
  }

}
