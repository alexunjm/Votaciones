import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Candidate } from '../models/category';
import { GLOBAL } from './global';

@Injectable()
export class UserService {

  url: string;
  headers: HttpHeaders;

  constructor(
    public _http: HttpClient,
  ) {
    this.url = GLOBAL.url.api;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(data) {
    data.getToken = true;
    console.log(data);
    const params = JSON.stringify(data);
    return this._http.post(this.url + 'login', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers
    });
  }

}
