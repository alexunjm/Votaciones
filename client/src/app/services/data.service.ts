import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Candidate } from '../models/category';
import { GLOBAL } from './global';

@Injectable()
export class DataService {

  url: string;

  constructor(
    public _http: HttpClient,
    /* public _httpHeaders: HttpHeaders, */
  ) {
    this.url = GLOBAL.url.dataResource + 'vote.1.json';
  }

  getData() {
    return this._http.get(this.url);
  }

}
