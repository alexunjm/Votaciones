import { Component, OnInit } from '@angular/core';
import { arrayMap } from '../../services/global';
import { VotingService } from '../../services/voting.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-charts-result',
  templateUrl: './charts-result.component.html',
  styleUrls: ['./charts-result.component.scss'],
  providers: [VotingService]
})
export class ChartsResultComponent implements OnInit {

  config: any;
  election: string;

  constructor(
    private _votingService: VotingService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.getElection();
    this._votingService.getResults(this.election).subscribe(response => {
      if (response['error']) {
        console.log(response);
      } else {
        this.config = arrayMap(response['data'], (category) => {
          return {
            elementId: 'chart_' + category.name,
            options: {
              'title': category.name,
              'width': 500,
              'height': 450,
              'is3D': true,
              chartArea: { left: 50, width: '100%', height: '55%' }
            },
            dataCols: [
              { type: 'string', name: '#0' + category.result[0].number },
              { type: 'number', name: 'Votos' },
            ],
            dataRows: arrayMap(category.result, element => {
              return ['#0' + element.number, element.quantity];
            }, this)
          };
        }, this);
      }
    }, error => {
      console.log(error);
      this.config = [];
    });
  }

  ngOnInit() {
    setTimeout(() => {
      if (google.visualization && this.config) {
        this.drawChart();
      } else {
        this.ngOnInit();
      }
    }, 500);
  }

  getElection() {
    this._route.params.subscribe(params => {
      const electionT = params['election'];

      if (electionT) {
        this.election = electionT;
      }
    });
  }

  drawChart() {
    // Create the data table.
    this.config.forEach(chartCnfg => {

      const data = new google.visualization.DataTable();
      chartCnfg.dataCols.forEach(col => {
        data.addColumn(col.type, col.name);
      });
      data.addRows(chartCnfg.dataRows);

      // Instantiate and draw our chart, passing in some options.
      const chart = new google.visualization.PieChart(document.getElementById(chartCnfg.elementId));
      chart.draw(data, chartCnfg.options);
    });
  }

}
