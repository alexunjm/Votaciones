import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() image: string;
  @Input() name: string;
  @Input() color: string;
  @Input() number: string;

  @Output() clicked = new EventEmitter<string>();

  constructor() {

    /* this.image = 'man'; */
  }

  ngOnInit() {
  }

  onClicked() {
    this.clicked.emit('Esto funciona!');
  }

}
