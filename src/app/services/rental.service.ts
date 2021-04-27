import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental, RentalDetails } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {


  constructor(
    private _httpClient:HttpClient
  ) { }


getAllRentalDetails(){
  return this._httpClient.get<ListResponseModel<RentalDetails>>(`${environment.rentalUrl}GetAllRentalDetails`)
}
}
