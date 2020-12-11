import { InterfaceHeroGeneral } from './../../../models/Interface-hero-general';
import { HeroesService } from './../../../services/heroes.service';
import { Chariot, InterfaceChariot } from './../models/InterfaceChariot';
import { ChariotService } from './../../../services/chariot.service';
import { Component, OnInit } from '@angular/core';

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
    debugger
    this.data = JSON.parse(localStorage.getItem('items'))
    this.data.forEach(element => {
      debugger
         this.heroesService.getList(element.id).subscribe((result => {

     this.chariot.push(result);
    }))
 
    });
   
  
  }



}
