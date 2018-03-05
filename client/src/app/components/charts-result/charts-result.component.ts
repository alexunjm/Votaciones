import { Component, OnInit } from '@angular/core';
declare const google: any;

@Component({
  selector: 'app-charts-result',
  templateUrl: './charts-result.component.html',
  styleUrls: ['./charts-result.component.scss']
})
export class ChartsResultComponent implements OnInit {

  config: any;

  constructor() {
    this.config = this.getConfig();
  }

  ngOnInit() {
    setTimeout(() => {
      if (google.visualization) {
        this.drawChart();
      } else {
        this.ngOnInit();
      }
    }, 500);
  }

  getConfig() {

    return [
      {
        elementId: 'chart_div1',
        options: {
          'title': 'Elecciones para personero',
          'width': 500,
          'height': 450,
          'is3D': true,
          /* colors: ['#e0440e', '#e6693e', '#ec8f6e', '#eee', '#f6c7b6'], */
          chartArea: { left: 0, width: '100%', height: '55%', backgroundColor: { stroke: '#0abc55' } },
          tooltip: { textStyle: { color: '#FF0000' }, showColorCode: true }
        },
        dataCols: [
          { type: 'string', name: 'Nombre' },
          { type: 'number', name: 'Votos' },
        ],
        dataRows: [
          ['Sara', 30],
          ['Daniela', 20],
          ['Tangarife', 15],
          ['Voto en Blanco', 25]
        ]
      }, {
        elementId: 'chart_div2',
        options: {
          'title': 'Elecciones para contralor',
          'width': 600,
          'height': 450,
          'is3D': true
        },
        dataCols: [
          { type: 'string', name: 'Nombre' },
          { type: 'number', name: 'Votos' },
        ],
        dataRows: [
          ['Santiago', 30],
          ['Adrian', 20],
          ['Voto en Blanco', 25]
        ]
      }
    ];
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
