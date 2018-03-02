import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  selected: number;

  @Input() category: Category;

  constructor() {
    this.selected = -1;
  }

  ngOnInit() {
  }

  select(index) {
    this.selected = index;
    /* console.log(this.selected); */
  }

}
