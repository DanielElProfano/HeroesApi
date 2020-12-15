import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

import { HeroesService } from 'src/app/services/heroes.service';
import { InterfaceHeroGeneral, InterfaceFilteHeroes, InterfaceEmmitOutput } from './../../../../models/Interface-hero-general';
import { NgxSpinnerService } from 'ngx-spinner';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
     ]),
  ],
})
export class StickerComponent implements OnInit {

  @Input() arrayHeroe :  InterfaceHeroGeneral[] | any = [];
  @Input() arrayFiltrado : InterfaceFilteHeroes[] | any = []; //***PTE DE HACER */ Hacer que muestre de 10 en 10 hasta que se termine el array. Para volver hay que pulsar reset.
  @Output() emmitId  = new EventEmitter<number>();
  
  nextPost: number = 20; 
  iterator: number = 11;
  notEmptyPost = true;
  notscrolly = true;
  form = true;
  emmitCard: InterfaceEmmitOutput | any = {};
  
  constructor(private spinner : NgxSpinnerService, private heroesService:HeroesService) {} 

  ngOnInit(): void {}
  public fireHero(event: any):void{
    this.emmitCard.fire = true

  }
     
  public getId(event: any):void{
   
    
   
    this.emmitCard.id = parseInt(event.target.id,10);
    
    if (event.srcElement.innerHTML ==='Fire' || event.srcElement.innerHTML ==='Despide'){
        this.emmitCard.fire = true;
    }
    if(event.srcElement.innerHTML ==='Hire' ||event.srcElement.innerHTML ==='Contrata' ){
      this.emmitCard.origenHire = true;
    }
    this.emmitId.emit(this.emmitCard);
    this.emmitCard.fire = false;
    this.emmitCard.origenHire = false;
  }
  public hireFunction(event){
  
    this.emmitCard.origenHire = false;
    this.emmitCard.id = parseInt(event.target.id,10);
    if(event.srcElement.innerHTML ==='Hire'){
      this.emmitCard.origenHire = true;
    }
    
    this.emmitId.emit(this.emmitCard);
  }


  onScroll():void{
    
    this.spinner.show();
    this.notscrolly = false;
    if(!this.notscrolly)
    {
        this.loadNextPost();
    }
  }

  loadNextPost():void {
    let id = this.iterator;
    for(let i = id; i<=this.nextPost; i++){
      
      this.heroesService.getFakeList(i).subscribe((result) => {
      this.arrayHeroe.push(result);
      
    });
    
      this.iterator = i;
    
    }
    
    this.nextPost += 10; //sumo los 10 siguientes para el siguiente scroll
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 800);
    
  }

  public pushFilter(){
    
    if(this.arrayFiltrado.lenght>0) //SI DETECTA CAMBIO EN ARRAYFILTRADDO ???
    {
      this.notscrolly = true;
      
    }
  }
}