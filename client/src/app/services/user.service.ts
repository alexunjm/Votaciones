import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      headers: this.headers
    });
  }

  logout() {
    return this._http.post(this.url + 'logout', null, {/** headers **/
      headers: this.headers.set('authorization', this.getToken())
    });
  }

  registerIdentity(identity) {
    localStorage.setItem('identity', identity);
    return true;
  }

  getToken() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    return identity && identity.token ? identity.token : null;
  }

  hasRole(role) {
    const identity = JSON.parse(localStorage.getItem('identity'));
    return identity.user.role === role;
  }

}
