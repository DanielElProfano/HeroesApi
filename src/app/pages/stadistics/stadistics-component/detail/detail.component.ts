import { InterfaceHeroDetail } from './../../../../models/Interface-hero-general';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  
  public state : string = 'inactive';
  constructor() { }

  ngOnInit(): void {}   
    
}




