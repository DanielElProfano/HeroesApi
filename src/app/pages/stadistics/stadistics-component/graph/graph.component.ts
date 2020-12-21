import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() charData : any = {};
  
  dataArray : null = null;
  public barChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['power', 'combat', 'durability', 'speed', 'strenght','Intelligence'];
  public barChartType: ChartType = 'radar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [, , , , , , ], label: '' },
 
  ];

  constructor() {

    this.dataArray = null;
   }

  ngOnInit(): void {
   
  
    this.barChartData[0].label = "Haz click sobre un superhéroe"
 
  }
  ngOnChanges(changes: SimpleChanges) {
    
    this.changeGraph(this.charData)
  
      }
  changeGraph(chardat: any){

    let data : any = [

          this.charData.power,
          this.charData.combat,
          this.charData.durability,
          this.charData.speed,
          this.charData.strength,
          this.charData.intelligence];

          this.barChartData[0].data = data;
          this.barChartData[0].label = this.charData.name;
          this.dataArray = data;
  }
}
  


