import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private translateService:TranslateService) { }

  ngOnInit(): void {}
  public show: boolean = true;

  public slides = [
    '../../../../assets/Fi-M-The-Justice-League-Of-America-480i60.jpg',
    '../../../../assets/slide2.jpg',
    '../../../../assets/slide3.jpg',
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: false,
    pagination: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
      
    },
    autoplay: {​​​​​​​​
                delay:6000, 
                stopOnLastSlide:false, 
                reverseDirection:false, 
                disableOnInteraction:false}​​​​​​​​

  };
}
