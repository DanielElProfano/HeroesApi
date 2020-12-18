import { element } from 'protractor';
import { InterfaceHeroGeneral } from './../../../models/Interface-hero-general';
import { HeroesService } from './../../../services/heroes.service';
// import { Chariot, InterfaceChariot } from './../models/InterfaceChariot';
// import { ChariotService } from './../../../services/chariot.service';
import { Component, DebugElement, OnInit } from '@angular/core';


import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ChariotService } from 'src/app/services/chariot.service';

@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.scss']
})
export class ChariotComponent implements OnInit {

  chariot : InterfaceHeroGeneral[] = [];

  delete: any[] = [];
  carro: any
  data : any[] = []
  // todo = [
  //   'Get to work',
  //   'Pick up groceries',
  //   'Go home',
  //   'Fall asleep'
  // ];

  done: InterfaceHeroGeneral| any = [
    1
    // 'Get up',
    // 'Brush teeth',
    // 'Take a shower',
    // 'Check e-mail',
    // 'Walk dog'
  ];
  constructor(private heroesService: HeroesService, private chariotService: ChariotService) { 
    
  this.delete = [
    1,2,3,4
]
  }

  ngOnInit(): void {
    
    this.data = JSON.parse(localStorage.getItem('items'))
    this.data.forEach(element => {
      
         this.heroesService.getFakeList(element.id).subscribe((result => {

     this.chariot.push(result);
    }))
 
    });
   
  
  }

  // public modifyHero(event: any){
  //     let id = Number((event.target.id).substr(6));


  //     console.log (id)

  // }
  // onDrop(event: CdkDragDrop<string[]>) {
  //   debugger
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex, event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<string[]>) {
  
    console.log(event)
    let idString = event.item.element.nativeElement.id;
    let id: number = Number((idString).substr(9));

    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.done.splice(1, 1)
                        this.chariotService.deleteChariot(id)

    }
  }
}



