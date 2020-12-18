import { element } from 'protractor';

import { Chariot } from './../pages/chariot/models/InterfaceChariot';
import { InterfaceHeroDetail } from './../models/Interface-hero-general';
import { HeroesService } from './heroes.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChariotService {

  private enviarCardSubject = new Subject<any>();   //creación del observable para que dispare eventos desde el header.
  enviarCardObservable = this.enviarCardSubject.asObservable(); 
  chariotCard : InterfaceHeroDetail[]
  localArray: any = []
  exist: boolean = false;
  constructor(private heroesService: HeroesService, private http: HttpClient) { 

  }

  public deleteChariot(id){  //método para eliminar directamente desde el carrito.  Utiliza método del observable
    debugger
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
  public postHireHero(newHero: InterfaceHeroDetail){
    const Url = "http://localhost:3000/chariot/"
    return this.http.post(Url, newHero).pipe(
      
        map((response: InterfaceHeroDetail) => {
      
        if(!response){
          throw new Error('Value expected!');
        } else {
          return response;
        }
    }),
      catchError((err)=>{
        console.log("error: "+err)
        debugger
        if(err.status = 500){
          alert("No puede agregarlo, ya esta en el carrito");       
        }
      throw new Error(err.message);
    })
    )

  }
  public deleteHireHero(id : number):Observable<InterfaceHeroDetail>{
    const Url = `http://localhost:3000/chariot/${id}`
    return this.http.delete(Url).pipe(
      
        map((response: InterfaceHeroDetail) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
          return response;
        }
        
      }),
      catchError((err)=>{
     
      throw new Error(err.message);
    })
    )

  }
  public findHero(newHero: InterfaceHeroDetail){
    const Url = "http://localhost:3000/chariot/"
    return this.http.post(Url, newHero).pipe(
      
        map((response: InterfaceHeroDetail) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
          return response;
        }
        
      }),
      catchError((err)=>{
      throw new Error(err.message);
    })
    )

  }
public getChariot(): Observable<Chariot>{

  const Url = `http://localhost:3000/chariot/`
    return this.http.get(Url,).pipe(
      
        map((response: Chariot) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
          return response;
        }
        
      }),
      catchError((err)=>{
     
      throw new Error(err.message);
    })
    )



}
}
