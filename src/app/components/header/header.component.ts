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
   
    this.lottie.loop = false;
    this.lottie.name = "hola"
    this.lottie = animationItem;
  
    console.log(animationItem);
  }
  options: AnimationOptions = {
    path: 'https://assets8.lottiefiles.com/packages/lf20_7hjpog67.json'
  };
  ngOnInit(): void {
   
    this.chariotService.enviarCardObservable.subscribe(response => {
      console.log(response)
      const data = JSON.parse(localStorage.getItem('items'))
      this.id = data.length
    
    
    if(this.id!=undefined) { //si el array esta vacio no hace nada. Si tiene heroe lo pushea
      // this.drawChariot(this.id);

    }
      })
  }
 
    ngOnChanges(changes: SimpleChanges): void
  {
    const data = JSON.parse(localStorage.getItem('items'))
      this.id = data.length

  }
  
  // drawChariot(id:number){

     
  //   // this.heroesService.getHeroChariot(id).subscribe((response => {
     
  //   //   console.log(this.chariotCard);
  //   //   this.chariotService.postHireHero(response).subscribe((respuesta =>{
  //   //     console.log(respuesta)
  //   //     this.chariotCard.push(respuesta);
  //   //     debugger
       
        
       
  //   //      }))
  //   //   }));
  // }
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
