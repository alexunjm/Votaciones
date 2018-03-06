import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Candidate } from '../models/category';
import { GLOBAL } from './global';

@Injectable()
export class VotingService {

  url: string;
  headers: HttpHeaders;

  constructor(
    public _http: HttpClient,
  ) {
    this.url = GLOBAL.url.api;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }
  getToken() {
    const identity = localStorage.getItem('identityToken');
    return JSON.parse(identity).token;
  }

  submit(data) {
    const params = JSON.stringify(data);
    return this._http.post(this.url + 'vote', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this.getToken())
    });
  }

  getResults(election) {
    const params = JSON.stringify({ election });
    return this._http.post(this.url + 'results', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this.getToken())
    });
  }

  getElections() {
    return this._http.post(this.url + 'elections', null, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this.getToken())
    });
  }

  getCategories(election) {
    const params = JSON.stringify({ election });
    return this._http.post(this.url + 'categories', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this.getToken())
    });
  }

}
