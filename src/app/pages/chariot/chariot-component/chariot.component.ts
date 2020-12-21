import { Component, OnInit } from '@angular/core';

import { InterfaceHeroGeneral } from './../../../models/Interface-hero-general';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ChariotService } from 'src/app/services/chariot.service';
import { HeroesService } from './../../../services/heroes.service';

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
  done: InterfaceHeroGeneral| any = [""];
    
  constructor(private heroesService: HeroesService, private chariotService: ChariotService) {}

  ngOnInit(): void {
    
    this.data = JSON.parse(localStorage.getItem('items'))
    this.data.forEach(element => {
      
         this.heroesService.getFakeList(element.id).subscribe((result => {

     this.chariot.push(result);
    }))
 
    });
   
  }

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



