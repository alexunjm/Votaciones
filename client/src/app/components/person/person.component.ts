import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() lastname: string;
  @Input() color: string;
  @Input() number: string;


  constructor() {
  }

  ngOnInit() {
  }

  onClicked() {
  }

}
