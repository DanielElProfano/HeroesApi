import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { HeroesService } from 'src/app/services/heroes.service';
import { InterfaceHeroGeneral, InterfaceFilteHeroes } from './../../../../models/Interface-hero-general';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit {

  @Input() arrayHeroe :  InterfaceHeroGeneral[] | any = [];
  @Input() arrayFiltrado : InterfaceFilteHeroes[] | any = []; //***PTE DE HACER */ Hacer que muestre de 10 en 10 hasta que se termine el array. Para volver hay que pulsar reset.

  @Output() emmitId  = new EventEmitter<number>();
  
  nextPost: number = 20; 
  iterator: number = 11;
  notEmptyPost = true;
  notscrolly = true;
  form = true
  
  constructor(private spinner : NgxSpinnerService, private heroesService:HeroesService) {} 

  ngOnInit(): void {}

  getId(event: any):void{
    let heroId = parseInt(event.target.id,10);
    this.emmitId.emit(heroId);
    
  }
  onScroll():void{
    
    this.spinner.show();
    this.notscrolly = false;
    this.loadNextPost();
  }

  loadNextPost():void {
    let id = this.iterator;
    for(let i = id; i<=this.nextPost; i++){
      
      this.heroesService.getList(i).subscribe((result) => {
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
  
}
