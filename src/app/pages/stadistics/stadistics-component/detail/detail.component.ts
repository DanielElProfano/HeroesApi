import { Component, Input, OnInit } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

import { InterfaceHeroDetail } from './../../../../models/Interface-hero-general';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
     ]),
  ],
})

export class DetailComponent implements OnInit {

  @Input() heroDetail : InterfaceHeroDetail | any = {};
  @Input() charData : any = {};
  public state : string = 'inactive';
  constructor(private translateService:TranslateService ) { }

  ngOnInit(): void {}   
    
}




