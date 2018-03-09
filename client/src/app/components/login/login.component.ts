import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  email: string;
  pass: string;

  constructor(
    private _userS: UserService,
    private router: Router
  ) {
    this.resetForm();
  }

  ngOnInit() {
  }

  resetForm() {
    [this.email, this.pass] = ['', ''];
  }

  doLogin() {
    this._userS.login({email: this.email, pass: this.pass}).subscribe(response => {
      this._userS.registerIdentity(JSON.stringify(response));
      /* localStorage.setItem('identityToken', JSON.stringify(response)); */
      this.resetForm();
      this.router.navigate(['/dashboard']);
    }, error => {
      console.error(error);
    });
  }

}
