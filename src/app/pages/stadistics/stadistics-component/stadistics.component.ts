import { ChariotService } from './../../../services/chariot.service';
import { InterfaceHeroGeneral, InterfaceFilteHeroes, InterfaceEmmitOutput } from './../../../models/Interface-hero-general';
import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { InterfaceHeroDetail, InterfacePowerStats } from 'src/app/models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-stadistics',
  templateUrl: './stadistics.component.html',
  styleUrls: ['./stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {

  showDetails = false;
  arrayHeroes : InterfaceHeroGeneral | any = []; //array que se pinta en el html
  personaje : InterfaceHeroDetail | any = {}; //detail del personaje.
  powerStats : InterfacePowerStats | any = {}; //datos de la gráfica.
  

  constructor(private heroesService: HeroesService, private chariotService: ChariotService) {
  
   }

  ngOnInit(): void {
  
    this.getListFakeApi();
  }

private getListFakeApi(){
  for(let i= 1; i<=10; i++){
     
    this.heroesService.getFakeList(i).subscribe((result) => {
    this.arrayHeroes.push(result);
    });
  }

}

public setId(card:InterfaceEmmitOutput):void{   //si es Hire ataca al servicio del carrito.
    
     if(card.delete === true){
        debugger
        this.deleteHero(card.id)

     }else{

        if(card.origenHire === true || card.fire === true){
        
          this.chariotService.sendChariot(card)
      
        }else{
              this.heroesService.getFakePowerStats(card.id).subscribe((result) =>{
              
              this.powerStats = result;
              this.getDetail(card.id);
        
              });
          
          }
     }
}
private deleteHero(id){

    this.heroesService.deleteFakeHero(id).subscribe((result)=>{
      console.log(result);
    })
    let index = this.arrayHeroes.findIndex(hero => hero.id === id);
    debugger
    this.arrayHeroes.splice(index,1);
}
public setFilterArray(array: InterfaceHeroGeneral[]):void{  ///output del Filter.
   
    this.arrayHeroes = [];
    array.forEach(element => {
    this.arrayHeroes.push(element);
    });
    
  }

  getDetail(id:number):void{
    
    this.heroesService.getFakeHeroDetail(id).subscribe((result) =>{
    this.personaje = result;
    this.showDetails = true
      
    })
  }



}
  
  
