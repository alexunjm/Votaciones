import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Candidate } from '../models/category';
import { GLOBAL } from './global';
import { UserService } from './user.service';

@Injectable()
export class VotingService {

  url: string;
  headers: HttpHeaders;

  constructor(
    public _http: HttpClient,
    public _userS: UserService,
  ) {
    this.url = GLOBAL.url.api;
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  submit(data) {
    const params = JSON.stringify(data);
    return this._http.post(this.url + 'vote', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this._userS.getToken())
    });
  }

  getResults(election) {
    const params = JSON.stringify({ election });
    return this._http.post(this.url + 'results', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this._userS.getToken())
    });
  }

  getElections() {
    return this._http.post(this.url + 'elections', null, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this._userS.getToken())
    });
  }

  getCategories(election) {
    const params = JSON.stringify({ election });
    return this._http.post(this.url + 'categories', params, {/** headers **/
      // tslint:disable-next-line:max-line-length
      headers: this.headers.set('authorization', this._userS.getToken())
    });
  }

}
