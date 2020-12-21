import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent implements OnInit {
 
  public activeLang = 'en';

  constructor( private translate: TranslateService) { 
    this.translate.setDefaultLang(this.activeLang);
  }

  
  ngOnInit(): void {
  }
  public cambiarLenguaje(lang) {
  
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
