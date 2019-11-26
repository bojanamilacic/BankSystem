import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDetail } from './client-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {
  readonly rootURL = 'https://localhost:44309/api';

  constructor(private http: HttpClient) { }

  postClientDetail(fromDataClient: ClientDetail) {
    return this.http.post(this.rootURL + '/ClientDetails', fromDataClient);
  }
}
