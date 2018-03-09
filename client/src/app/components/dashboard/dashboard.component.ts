import { Component, OnInit } from '@angular/core';
import { VotingService } from '../../services/voting.service';
import { UserService } from '../../services/user.service';
import { arrayMap } from '../../services/global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [VotingService]
})
export class DashboardComponent implements OnInit {

  links: any;
  isAdmin: boolean;
  hasResultRole: boolean;

  constructor(
    private _userS: UserService,
    private _voting: VotingService
  ) {
    this.isAdmin = this._userS.hasRole('ADMIN');
    this.hasResultRole = this._userS.hasRole('RESULTS');
    this._voting.getElections().subscribe(response => {
      this.links = response['data'].filter(link => {

        const match = link.permissions.filter(aRole => {
          return this._userS.hasRole(aRole) || this.isAdmin;
        });

        return match.length ? link : null;
      });
      console.log(this.links);
    }, err => {});
  }

  ngOnInit() {
  }

  hasRole(role) {
    return this._userS.hasRole(role);
  }

}
