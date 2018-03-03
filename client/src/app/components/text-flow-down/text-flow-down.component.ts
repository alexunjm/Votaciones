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
    /* this.text = 'hola mundo'.split(''); */
  }
/*
  ngDoCheck() {
    console.log(this.textToSplit.textContent);
  } */

  ngOnInit() {
    this.text = this.textToSplit.split('');
  }

}
