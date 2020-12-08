import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { InterfacePowerStats } from 'src/app/models/Interface-hero-general';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() charData : any = {};
  
  dataArray : null = null;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['power', 'combat', 'durability', 'speed', 'strenght','Intelligence'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [, , , , , , ], label: '' },
    // { data: [,,,,,,], label: 'S' }
  ];

  public doughnutChartLabels: Label[] =  ['power', 'combat', 'durability', 'speed', 'strenght', 'Intelligence'];
  public doughnutChartData: MultiDataSet = [
    [,,],
    [,,12],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';


  

  constructor() {
console.log(this.charData);
    this.dataArray = null;
   }

  ngOnInit(): void {
    
    console.log(this.barChartData)
    Object.values(this.charData)
    console.log(this.charData)

  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
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
  


