import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../../services/sample-data.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
  providers: [SampleDataService]
})
export class VotingComponent implements OnInit {

  categories: any;

  constructor(
    private _dataService: SampleDataService
  ) {
    this._dataService.getData().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  algo() {
  }

}
