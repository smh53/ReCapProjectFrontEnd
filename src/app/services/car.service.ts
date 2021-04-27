import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
    private _httpClient:HttpClient
  ) { }

  getAllCarDetails() {
    return this._httpClient.get<ListResponseModel<Car>>(`${environment.carUrl}GetAllCarDetails`)
  }
}
