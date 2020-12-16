import { HeroesService } from 'src/app/services/heroes.service';
import { InterfaceJoin } from './../models/InterfaceJoin';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private heroesService: HeroesService, private translateService:TranslateService) { }

  ngOnInit(): void {
  }

  getNewHero(newHero: any){

      this.heroesService.postNewHero(newHero).subscribe(
       ( data:InterfaceJoin)=> {
         console.log(data)
      });
      debugger
      // this.heroesService.getFaKeFilterForm().subscribe((result =>
      //   console.log(result)
      //   ));
      }

  }

