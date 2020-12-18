import { InterfaceHeroGeneral } from './../../../models/Interface-hero-general';
import { HeroesService } from './../../../services/heroes.service';
// import { Chariot, InterfaceChariot } from './../models/InterfaceChariot';
// import { ChariotService } from './../../../services/chariot.service';
import { Component, DebugElement, OnInit } from '@angular/core';


import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-chariot',
  templateUrl: './chariot.component.html',
  styleUrls: ['./chariot.component.scss']
})
export class ChariotComponent implements OnInit {

  chariot : InterfaceHeroGeneral[] = [];

  
  carro: any
  data : any[] = []
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    
    this.data = JSON.parse(localStorage.getItem('items'))
    this.data.forEach(element => {
      
         this.heroesService.getFakeList(element.id).subscribe((result => {

     this.chariot.push(result);
    }))
 
    });
   
  
  }

  public modifyHero(event: any){
      let id = Number((event.target.id).substr(6));


      console.log (id)

  }
  onDrop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

drop(event: CdkDragDrop<string[]>) {
  debugger
  moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
}

}
