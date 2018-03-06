import { Component, OnInit } from '@angular/core';
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [VotingService]
})
export class DashboardComponent implements OnInit {

  links: any;

  constructor(
    private _voting: VotingService
  ) {
    this._voting.getElections().subscribe(response => {
      /* console.log(response); */
      this.links = response['data'];
    }, err => {});
  }

  ngOnInit() {
  }

}
