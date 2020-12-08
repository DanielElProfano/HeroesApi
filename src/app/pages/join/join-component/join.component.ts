import { HeroesService } from 'src/app/services/heroes.service';
import { InterfaceJoin } from './../models/InterfaceJoin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  getNewHero(newHero: any){

      this.heroesService.postNewHero(newHero).subscribe(
       ( data:InterfaceJoin)=> {
         console.log(data)
      });
    }

  }

