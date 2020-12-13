import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeLang = 'en';
  
  public sendToChariot(card){
    debugger
    console.log(card)
  }

    constructor( private translate: TranslateService) { 
      this.translate.setDefaultLang(this.activeLang);
    }
    title = 'HeroApi';

  }
 


  

