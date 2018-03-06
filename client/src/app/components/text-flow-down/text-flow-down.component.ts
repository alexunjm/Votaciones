import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-flow-down',
  templateUrl: './text-flow-down.component.html',
  styleUrls: ['./text-flow-down.component.scss']
})
export class TextFlowDownComponent implements OnInit {

  text: Array<string>;
  @Input() textToSplit: string;

  constructor() {
  }

  ngOnInit() {
    this.text = this.textToSplit.split('');
  }

}
