import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // localArray : any[] = []
  constructor(){
    // localStorage.setItem('items', JSON.stringify(this.localArray))
  }
  public sendToChariot(card){
    debugger
    console.log(card)



  }
  title = 'HeroApi';


  
}


