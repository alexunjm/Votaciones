import { Component, OnInit } from '@angular/core';
import { SampleDataService } from '../../services/sample-data.service';
import { arrayMap } from '../../services/global';
import { VotingService } from '../../services/voting';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
  providers: [SampleDataService, VotingService]
})
export class VotingComponent implements OnInit {

  categories: any;
  categoriesSelected: any;
  selectedC: any;
  submitting: boolean;

  constructor(
    private _dataService: SampleDataService,
    private _votingService: VotingService
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
    this.submitting = false;
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

    if (this.submitting) { return; }

    this.submitting = true;
    this._votingService.submit(arrayMap(this.categoriesSelected, (category, index, initialArray) => {
      return {
        name: category.name,
        number: category.candidates[0].number
      };
    }, this)).subscribe(response => {
      alert(response['message']);
      location.reload();
    }, error => {
      alert('Ha ocurrido un error. Favor contactar a la persona que da soporte a la jornada');
      console.log(error);
    });
  }

}
