import { HeroesService } from './heroes.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { InterfaceHeroDetail } from './../models/Interface-hero-general';

@Injectable({
  providedIn: 'root'
})
export class ChariotService {

  private enviarCardSubject = new Subject<any>();   //creación del observable para que dispare eventos en el header.
  enviarCardObservable = this.enviarCardSubject.asObservable(); 
  chariotCard : InterfaceHeroDetail[]
  localArray: any = []
  exist: boolean = false;
  constructor(private heroesService: HeroesService, private http: HttpClient) { 

  }

  public deleteChariot(id: number){  //método para eliminar directamente desde el carrito.  Utiliza método del observable
  
    let data = JSON.parse(localStorage.getItem('items'))
    data.forEach((element, index) => {
      if (element.id === id){
        data.splice(index,1);
        localStorage.setItem('items', JSON.stringify(data));
        this.enviarCardSubject.next(data)
   }
    });
     
  }

  public sendChariot(card: any){  //servicio para envíar información al componente del carro. Utiliza método del observable
  
    this.exist = false;
    
    let data = JSON.parse(localStorage.getItem('items'))
    if(data === null){
      data = [];
      localStorage.setItem('items', JSON.stringify(data));
    }
    if(data.length === 0 && card.origenHire === true){

      this.sendHeaderObservables(data,card);

    }else{
        
        data.forEach((element, index ) => {
          
        if(card.id === element.id){ //comprobamos si existe en el carrito.
            if(card.fire === true){
              data.splice(index, 1) //elilmino posición
              this.exist = true;
              localStorage.setItem('items', JSON.stringify(data));
              this.enviarCardSubject.next(data)
              
            }else{
              this.exist = true;
              console.log("existe")
              alert("existe ya en el carrito")
            }
          }
        });

        if(!this.exist && card.origenHire === true){

          this.sendHeaderObservables(data,card);

        }
    }
  }

  private sendHeaderObservables(data,card){

    data.push(card);
    let longitud: number =  data.length;
    localStorage.setItem('items', JSON.stringify(data));
    this.enviarCardSubject.next(data)

  }

}
