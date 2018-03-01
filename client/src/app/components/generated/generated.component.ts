import { Component, OnInit } from '@angular/core';
import { Person } from './person.class';

@Component({
  selector: 'app-generated',
  templateUrl: './generated.component.html',
  styleUrls: ['./generated.component.scss']
})
export class GeneratedComponent implements OnInit {

  personList: Array < Person >;
  editablePerson: Person;
  editting: boolean;

  constructor() {
    this.personList = [
      {_id: 1, name: 'Alexander', lastName: 'Jaramillo', status: false}
    ];
    this.editting = false;
    this.resetForm();
  }

  ngOnInit() {
  }

  resetForm() {
    this.editablePerson = { _id: this.personList.length + 1, name: '', lastName: '', status: false };
  }

  onSubmit() {
    console.log('ahí');
    if (!this.editting) {
      this.personList.unshift(this.editablePerson);
    }
    this.editting = false;
    this.resetForm();
  }

  edit(person: Person) {
    this.editting = true;
    this.editablePerson = person;
  }

}
