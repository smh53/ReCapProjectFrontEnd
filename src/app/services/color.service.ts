import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private _httpClient:HttpClient
  ) { }


getAllColors(){
  return this._httpClient.get<ListResponseModel<Color>>(`${environment.colorUrl}GetAllColors`)
}

}
