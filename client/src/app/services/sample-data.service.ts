import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Candidate } from '../models/category';
import { GLOBAL } from './global';

@Injectable()
export class SampleDataService {

  url: string;

  constructor(
    public _http: HttpClient,
    /* public _httpHeaders: HttpHeaders, */
  ) {
    this.url = GLOBAL.url;
  }

  getData() {
    return this._http.get(this.url);
  }

}
