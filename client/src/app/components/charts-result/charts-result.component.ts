import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-result',
  templateUrl: './charts-result.component.html',
  styleUrls: ['./charts-result.component.scss']
})
export class ChartsResultComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.drawChart();
  }

  drawChart() {
  }

}
