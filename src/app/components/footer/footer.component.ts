import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  localArray : any[] = []
  constructor(){
    localStorage.setItem('items', JSON.stringify(this.localArray))
  }


  ngOnInit(): void {
  }

}
