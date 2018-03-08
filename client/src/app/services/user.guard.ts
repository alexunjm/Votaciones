import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class UserGuard implements CanActivate {


  constructor(
    private _userS: UserService,
    private _router: Router
  ) {}

  canActivate() {
    const token = this._userS.getToken();

    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
