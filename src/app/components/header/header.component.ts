import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { ChariotService} from '../../services/chariot.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  id : number;
  chariotCard : any[] = [];
  constructor(private chariotComponent: ChariotService, private heroesService: HeroesService) { }

  ngOnInit(): void {
   
    this.chariotComponent.enviarCardObservable.subscribe(response => {
      this.id = response;
    debugger
    if(this.id!=undefined) {
      this.drawChariot(this.id);
    }



    })
    
  }


  drawChariot(id:number){
    debugger
    this.heroesService.getHeroChariot(id).subscribe((response) => {
      this.chariotCard.push(response)
      console.log(this.chariotCard);
  })
  }

}
