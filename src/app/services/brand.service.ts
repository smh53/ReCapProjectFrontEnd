import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private _httpClient:HttpClient
  ) { }

    getAllBrands():Observable<ListResponseModel<Brand>> {
      return this._httpClient.get<ListResponseModel<Brand>>(`${environment.brandUrl}GetAllBrands`)
    }




}
