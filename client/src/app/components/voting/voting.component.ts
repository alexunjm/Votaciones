import { Component, OnInit } from '@angular/core';
import { arrayMap } from '../../services/global';
import { DataService } from '../../services/data.service';
import { VotingService } from '../../services/voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
  providers: [DataService, VotingService]
})
export class VotingComponent implements OnInit {

  categories: any;
  categoriesSelected: any;
  selectedC: any;
  submitting: boolean;

  constructor(
    private _dataService: DataService,
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
        number: category.candidates.length ? category.candidates[0].number : 0
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
