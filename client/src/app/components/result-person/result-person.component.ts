import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-person',
  templateUrl: './result-person.component.html',
  styleUrls: ['./result-person.component.scss']
})
export class ResultPersonComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() lastname: string;
  @Input() color: string;
  @Input() number: string;
  @Input() category: string;
  @Input() index: number;
  @Input() blank: boolean;

  constructor() {
    this.index = 0;
    this.blank = false;
  }

  ngOnInit() {
  }

}
