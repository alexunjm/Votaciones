import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  selected: number;

  @Input() category: Category;
  @Output() selectedC = new EventEmitter<number>();

  constructor() {
    this.selected = -1;
  }

  ngOnInit() {
  }

  select(index) {
    this.selected = index;
    this.selectedC.emit(this.selected);
  }

}
