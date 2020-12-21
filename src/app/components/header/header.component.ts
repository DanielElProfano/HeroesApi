import { Component, OnInit, SimpleChanges, NgZone} from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ChariotService } from '../../services/chariot.service'
import { AnimationOptions } from "ngx-lottie";
import { AnimationItem } from "lottie-web";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id : number;
  chariotCard : any[] = [];
  lottie : AnimationItem;
  constructor(private translateService:TranslateService, private chariotService: ChariotService, private heroesService: HeroesService,private ngZone: NgZone) { }


  animationCreated(animationItem: AnimationItem): void {
   
    this.lottie = animationItem;
    this.lottie.loop = true;
    this.lottie.autoplay = false;
    this.lottie.name = "carro";
   }
  options: AnimationOptions = {
    
    path: "../../../assets/Lottie/lf30_editor_habfsubh.json"
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
      this.id = data.length  //pinta el tamaño del array del localStorage.
      this.play();
  })
     
      this.animationCreated(this.lottie);
  }

    ngOnChanges(changes: SimpleChanges): void
  {
      const data = JSON.parse(localStorage.getItem('items'))
      this.id = data.length;
      this.play();

  }
  
  public loopComplete(event){

    this.ngZone.runOutsideAngular(() => this.lottie.stop()); //cuando termina de hacer el loop le mando pararse.
   
  }

  private play(): void {
    this.ngZone.runOutsideAngular(() => this.lottie.play());
 
  }
}
