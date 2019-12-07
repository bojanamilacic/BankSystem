import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientDetail } from './client-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionApiService {
  fromDataClient: ClientDetail;
  readonly rootURL = 'https://localhost:44309/api';
  list: ClientDetail[];
  constructor(private http: HttpClient) { }

  postClientDetail(fromDataClient) {
    return this.http.post(this.rootURL + '/ClientDetails', fromDataClient);

  }
  refreshList() {
    this.http.get(this.rootURL + '/ClientDetails').toPromise().then(res =>
      this.list = res as ClientDetail[]);
  }

}
