import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../../services/sample-data.service';
import { arrayMap } from '../../services/global';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
  providers: [SampleDataService]
})
export class VotingComponent implements OnInit {

  categories: any;
  categoriesSelected: any;
  selectedC: any;

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
    this.selectedC = {};
    this.categoriesSelected = [];
  }

  ngOnInit() {
  }

  selectedCandidate(categoryN, number) {
    this.selectedC[categoryN] = number;
  }

  showVote() {
    this.categoriesSelected = arrayMap(this.categories, (category, index, initialArray) => {
      return {
        name: category.name,
        candidates: category.candidates.filter(elm => {
          return elm.number === this.selectedC[category.name] ? elm : null;
        })
      };
    }, this);
    console.log(this.selectedC);
    console.log(this.categoriesSelected);
  }

  submitVote() {
  }

}
