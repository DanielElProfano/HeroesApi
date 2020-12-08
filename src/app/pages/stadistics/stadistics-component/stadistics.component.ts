import { InterfaceHeroGeneral, InterfaceFilteHeroes } from './../../../models/Interface-hero-general';
import { Component, OnInit } from '@angular/core';
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

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    
     this.getListPowerStats();
    //  this.postea()
    // this.getListFakeApi();
  
  }


private getListFakeApi(){
  for(let i= 1; i<=10; i++){
     
    this.heroesService.getFakeList(i).subscribe((result) => {
    this.arrayHeroes.push(result);
    });

    
  }

}
  private getListPowerStats(){
      
    for(let i= 1; i<=10; i++){
     
      this.heroesService.getList(i).subscribe((result) => {
      this.arrayHeroes.push(result);
      });

      
    }
  }
  postea(){
    for(let i= 1; i<=300; i++){
     
      this.heroesService.scrapHero(i).subscribe((result) => {
        this.heroesService.postNewHero(result).subscribe(
          (data: any) => console.log(data))
      });

      
    }
 
   }

   public setId(id:number):void{
   
    this.heroesService.getPowerStats(id).subscribe((result) =>{
    this.powerStats = result;
    this.getDetail(id);
    
    });
  }
  public setFilterArray(array: InterfaceHeroGeneral[]):void{  ///output del Filter.
   
    this.arrayHeroes = [];
    array.forEach(element => {
    this.arrayHeroes.push(element);
    });
    
  }

  getDetail(id:number):void{
    
    this.heroesService.getHeroDetail(id).subscribe((result) =>{
      this.personaje = result;
      this.showDetails = true
      
    })
  }



}
  
  
