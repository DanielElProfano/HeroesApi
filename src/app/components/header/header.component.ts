import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ChariotService} from '../../services/chariot.service'

import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id : number;
  chariotCard : any[] = [];
  lottie : AnimationItem;
  constructor(private chariotService: ChariotService, private heroesService: HeroesService) { }


  animationCreated(animationItem: AnimationItem): void {
   
    
    this.lottie = animationItem;
    

    this.lottie.loop = false;
    this.lottie.autoplay = false;
    this.lottie.name = "hola";
    // this.lottie.goToAndPlay(100);
  
    console.log(animationItem);
  }
  options: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/packages/lf20_7hjpog67.json'
  };
  ngOnInit(): void {
 
    const data = JSON.parse(localStorage.getItem('items'))
    if(data.length != 0)
     { //si el array esta vacio no hace nada. 
      this.id = data.length 
    }
    this.chariotService.enviarCardObservable.subscribe(response => {
      this.id = response;	 
      const data = JSON.parse(localStorage.getItem('items'))
      this.id = data.length
    })
     
      this.animationCreated(this.lottie);
  }

 
    ngOnChanges(changes: SimpleChanges): void
  {
    const data = JSON.parse(localStorage.getItem('items'))
      this.id = data.length

  }
  

  loopComplete(event){
  
   
  }
  deleteChariotHero(){

    this.chariotService.deleteHireHero(10).subscribe((result =>{
      console.log(result);
    }));
  }
  findIdInChariot(id : number){
    this.heroesService.getHeroChariot(id).subscribe((response => {
     console.log(response);
    
    }))

  }
}
