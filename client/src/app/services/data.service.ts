import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class DataService {

  url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = GLOBAL.url.dataResource + 'vote.1.json';
  }

  getData() {
    return this._http.get(this.url);
  }

}
