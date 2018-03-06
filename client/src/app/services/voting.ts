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

  submit(data) {
    const params = JSON.stringify(data);
    return this._http.post(this.url + 'vote', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTlkYTYzM2YxOThhMDc3ZTliNjVhYTAiLCJuYW1lIjoiYWxleGFuZGVyIiwic3VybmFtZSI6ImphcmFtaWxsbyIsImVtYWlsIjoiYWxleGFuZGVyamFyYW1pbGxvNGllcEBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaW1hZ2UiOm51bGwsImlhdCI6MTUyMDI4MTU2NCwiZXhwIjoxNTIyODczNTY0fQ.x-Sd097EmfTki_ocChzl42LU3XJRBuXtFqfYsBjI54A')
    });
  }

  getResults() {
    return this._http.post(this.url + 'results', null, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTlkYTYzM2YxOThhMDc3ZTliNjVhYTAiLCJuYW1lIjoiYWxleGFuZGVyIiwic3VybmFtZSI6ImphcmFtaWxsbyIsImVtYWlsIjoiYWxleGFuZGVyamFyYW1pbGxvNGllcEBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaW1hZ2UiOm51bGwsImlhdCI6MTUyMDI4MTU2NCwiZXhwIjoxNTIyODczNTY0fQ.x-Sd097EmfTki_ocChzl42LU3XJRBuXtFqfYsBjI54A')
    });
  }

}
