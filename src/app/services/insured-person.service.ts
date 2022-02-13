import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuredPersonDetail } from '../models/insuredPersonDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class InsuredPersonService {
  apiUrl: string =
    'http://localhost:2294/api/InsuredPerson/GetInsuredPersonDetails';

  constructor(private httpClient: HttpClient) {}

  getProductDetails(): Observable<ListResponseModel<InsuredPersonDetail>> {
    return this.httpClient.get<ListResponseModel<InsuredPersonDetail>>(
      this.apiUrl
    );
  }
}
