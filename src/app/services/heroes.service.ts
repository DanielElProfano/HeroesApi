import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { InterfaceFilteHeroes, 
    InterfaceHeroDetail,
    InterfaceHeroGeneral,
    InterfacePowerStats } from './../models/Interface-hero-general';

@Injectable()

export class HeroesService {

  arrayFIlter : InterfaceFilteHeroes[];
  public heroes : InterfaceHeroGeneral | any = {}
  arrayFilter : InterfaceFilteHeroes[] = [];
  fakeUrl: string;
  nodeUrl:string;

  constructor(private http: HttpClient) {

    this.fakeUrl = 'http://localhost:3000/allHeroes/';
    this.nodeUrl = 'http://localhost:5000/hero/id/'
  }

  getFakeList(id: number):Observable<InterfaceHeroGeneral>{
    
   return this.http.get(this.nodeUrl+`${id}`).pipe(

       map((response: any) => {
        
       if(!response){
         throw new Error('Value expected!');
       } else {
       

       const formatResult : InterfaceHeroGeneral = {
           name : response.name,
           gender : response.appearance.gender,
           alignment : response.biography.alignment,
           image : response.image.url,
           id : response.id,
         
           }
        console.log(formatResult);
        return formatResult;
       }
     }),
       catchError((err)=>{
       throw new Error(err.message);
     })
   )
 }
 getFakePowerStats(id: number): Observable<InterfacePowerStats>{
  
  return this.http.get(this.nodeUrl+`${id}`).pipe(
    
      map((response: any) => {
 
      if(!response){
        throw new Error('Value expected!');
      } else {
          const formatResult : InterfacePowerStats = {

          id : response.id,
          name : response.name,
          intelligence : response.powerStats.intelligence,
          strength: response.powerStats.strength,
          speed: response.powerStats.speed,
          durability: response.powerStats.durability,
          power: response.powerStats.power,
          combat :response.powerStats.combat,
               
          }
          
      return formatResult;
       
      }
    }),
      catchError((err)=>{
      throw new Error(err.message);
    })
  )
}
getFakeHeroDetail(id: number):Observable<InterfaceHeroDetail>{
    const alterEgo ='alter-egos';
    
    return this.http.get(this.nodeUrl+`${id}`).pipe(
        map((response: any) => {
       if(!response){
        throw new Error('Value expected!');
      } else {
      
          const formatResult : InterfaceHeroDetail = {

          id : response.id,
          name : response.name,
          gender : response.appearance.gender,
          race : response.appearance.race,
          weight : response.weight,
          image : response.image.url,
          intelligence : response.powerStats.intelligence,
          strength: response.powerStats.strength,
          speed: response.powerStats.speed,
          durability: response.powerStats.durability,
          power: response.powerStats.power,
          combat :response.powerStats.combat,
          height :response.height,
          base: response.work.base,
          fullName : response.fullName,
          groupAffiliation: response.groupAffiliation,
          alterEgos: response.biography.alterEgos,
          alignment: response.biography.alignment,
          occupation: response.work.occupation
               
      }
        
      return formatResult;
      }
    }),
      catchError((err)=>{
      throw new Error(err.message);
    })
  )
}
  
  public deleteFakeHero(id : number):Observable<InterfaceHeroDetail>{
   
    return this.http.delete(this.fakeUrl+`${id}`).pipe(
      
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
  
    public getFaKeFilterForm():Observable<any>{  
   
        return this.http.get(`http://localhost:3000/allHeroes`)
  }

 
  public scrapHero(id: number): Observable<any>{
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
    const fullName = 'full-name';
    const alterEgo ='alter-egos';
    const groupAffiliation ='group-affiliation';
    const eyeColor = 'eye-color';
    const hairColor = 'hair-color';
    return this.http.get(Url).pipe(
      
      map((response: any) => {
 
      if(!response){
        throw new Error('Value expected!');
      } else {

        const scrapHero={
         
          id : parseInt(response.id),
          name : response.name,//
          gender : response.appearance.gender,
          race : response.race,//
          weight : response.appearance.weight,
          image : response.image.url,
          intelligence :  parseInt(response.powerstats.intelligence),
          strength: parseInt( response.powerstats.strength),
          speed:  parseInt(response.powerstats.speed),
          durability:  parseInt(response.powerstats.durability),
          power:  parseInt(response.powerstats.power),
          combat : parseInt(response.powerstats.combat),
          height  : response.appearance.height,
          base : response.work.base,
          fullName : response.biography[fullName],
          groupAffiliation: response.connections[groupAffiliation],
          alterEgos: response.biography[alterEgo],
          alignment : response.biography.alignment,
          eyeColor: response.appearance[eyeColor],
          hairColor:response.appearance[hairColor],
          occupation: response.work.occupation,
          relatives: response.connections.relatives,
        }
        return scrapHero;
      }
      
    }),
    catchError((err)=>{
    throw new Error(err.message);
  })
  )



  }
  public postScrapHero(newHero: any){ //se usa para scrappear

    return this.http.post(this.fakeUrl, newHero).pipe(
      
        map((response: any) => {
   
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

  public postNewHero(newHero: InterfaceHeroGeneral){ //se usa

       return this.http.post(this.fakeUrl, newHero).pipe(
      
        map((response: any) => {
   
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

