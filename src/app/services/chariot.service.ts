import { InterfaceHeroDetail } from './../models/Interface-hero-general';
import { HeroesService } from './heroes.service';
import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChariotService {

  private enviarCardSubject = new Subject<any>();
  enviarCardObservable = this.enviarCardSubject.asObservable();
  chariotCard : InterfaceHeroDetail[]
  constructor(private heroesService: HeroesService) { 

  }

  sendChariot(card: any){
    
   
    debugger
    this.enviarCardSubject.next(card.id)
  }
}
