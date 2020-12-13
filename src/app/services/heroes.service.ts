import { InterfaceJoin } from './../pages/join/models/InterfaceJoin';
import { InterfaceFilteHeroes, InterfaceHeroDetail, InterfaceHeroGeneral, InterfacePowerStats } from './../models/Interface-hero-general';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()

export class HeroesService {

  arrayFIlter : InterfaceFilteHeroes[];
  // private Url :string = 'https://pokeapi.co/api/v2/pokedex/1';
  private Url :string = 'https://www.superheroapi.com/api.php/10217431065143700/1'
  public heroes : InterfaceHeroGeneral | any = {}
  arrayFilter : InterfaceFilteHeroes[] = [];

  constructor(private http: HttpClient) {   }

  getList(i: number):Observable<InterfaceHeroGeneral>{
     const Url = `https://www.superheroapi.com/api.php/10217431065143700/${i}`;
    
    return this.http.get(Url).pipe(
     
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
        return formatResult;
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }
  getFakeList(i: number):Observable<InterfaceHeroGeneral>{
    const Url = `http://localhost:3000/allHeroes/${i}`;
   return this.http.get(Url).pipe(
     
       map((response: any) => {
  
       if(!response){
         throw new Error('Value expected!');
       } else {

       const formatResult : InterfaceHeroGeneral = {
           name : response.name,
           gender : response.gender,
           alignment : response.alignment,
           image : response.image,
           id : response.id,
         
           }
       return formatResult;
       }
     }),
       catchError((err)=>{
       throw new Error(err.message);
     })
   )
 }
 getFakePowerStats(id: number): Observable<InterfacePowerStats>{
  
  const Url = `http://localhost:3000/allHeroes/${id}`;
  return this.http.get(Url).pipe(
    
      map((response: any) => {
 
      if(!response){
        throw new Error('Value expected!');
      } else {
          const formatResult : InterfacePowerStats = {

          // id : response.id,
          // name : response.name,
          // intelligence : response.powerstats.intelligence,
          // strength: response.powerstats.strength,
          // speed: response.powerstats.speed,
          // durability: response.powerstats.durability,
          // power: response.powerstats.power,
          // combat :response.powerstats.combat,
          id : response.id,
          name : response.name,
          intelligence : response.intelligence,
          strength: response.strength,
          speed: response.speed,
          durability: response.durability,
          power: response.power,
          combat :response.combat,
               
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
  const Url = `http://localhost:3000/allHeroes/${id}`;
 
    return this.http.get(Url).pipe(
        map((response: any) => {
       if(!response){
        throw new Error('Value expected!');
      } else {
      
          const formatResult : InterfaceHeroDetail = {

          // id : response.id,
          // name : response.name,
          // gender : response.appearance.gender,
          // race : response.appearance.race,
          // weight : response.appearance.weight,
          // image : response.image.url,
          // intelligence : response.powerstats.intelligence,
          // strength: response.powerstats.strength,
          // speed: response.powerstats.speed,
          // durability: response.powerstats.durability,
          // power: response.powerstats.power,
          // combat :response.powerstats.combat,
          // height :response.appearance.height,
          // base: response.work.base,
          // fullName : response.biography[fullName],
          // groupAffiliation: response.connections[groupAffiliation],
          // alterEgos: response.biography[alterEgo],
          // alignment: response.biography.alignment,
          id : response.id,
          name : response.name,
          gender : response.gender,
          race : response.race,
          weight : response.weight,
          image : response.image,
          intelligence : response.intelligence,
          strength: response.strength,
          speed: response.speed,
          durability: response.durability,
          power: response.power,
          combat :response.combat,
          height :response.height,
          base: response.base,
          fullName : response.fullName,
          groupAffiliation: response.groupAffiliation,
          alterEgos: response.alterEgo,
          alignment: response.alignment,
        
               
      }
        
      return formatResult;
      }
    }),
      catchError((err)=>{
      throw new Error(err.message);
    })
  )
}
  getHeroDetail(id: number){
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
    const fullName = 'full-name';
    const alterEgo ='alter-egos';
    const groupAffiliation ='group-affiliation';
    
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
        
            const formatResult : InterfaceHeroDetail = {

            id : response.id,
            name : response.name,
            gender : response.appearance.gender,
            race : response.appearance.race,
            weight : response.appearance.weight,
            image : response.image.url,
            intelligence : response.powerstats.intelligence,
            strength: response.powerstats.strength,
            speed: response.powerstats.speed,
            durability: response.powerstats.durability,
            power: response.powerstats.power,
            combat :response.powerstats.combat,
            height :response.appearance.height,
            base: response.work.base,
            fullName : response.biography[fullName],
            groupAffiliation: response.connections[groupAffiliation],
            alterEgos: response.biography[alterEgo],
            alignment: response.biography.alignment,
            //   id : response.id,
            // name : response.name,
            // gender : response.gender,
            // race : response.race,
            // weight : response.weight,
            // image : response.image,
            // intelligence : response.intelligence,
            // strength: response.strength,
            // speed: response.speed,
            // durability: response.durability,
            // power: response.power,
            // combat :response.combat,
            // height :response.height,
            // base: response.work.base,
            // fullName : response.fullName,
            // groupAffiliation: response.groupAffiliation,
            // alterEgos: response.alterEgo,
            // alignment: response.alignment,
            // eyeColor: response.eyeColor,
            // hairColor: response.hairColor,
            // occupation: response.occupation
                 
            }
          
        return formatResult;
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }

  getHeroes(i:number, alignment:string){
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${i}`;
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {

          if(response.biography.alignment === alignment){
     
            const formatResult : InterfaceHeroGeneral = {
            name : response.name,
            gender : response.appearance.gender,
            alignment: response.biography.alignment,
            image : response.image.url,
            id : response.id,
         
            }
            return formatResult;
          } else {

            return null;
          }
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }

  getPowerStats(id: number): Observable<InterfacePowerStats>{
    
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
            const formatResult : InterfacePowerStats = {

            id : response.id,
            name : response.name,
            intelligence : response.powerstats.intelligence,
            strength: response.powerstats.strength,
            speed: response.powerstats.speed,
            durability: response.powerstats.durability,
            power: response.powerstats.power,
            combat :response.powerstats.combat,
            // id : response.id,
            // name : response.name,
            // intelligence : response.intelligence,
            // strength: response.strength,
            // speed: response.speed,
            // durability: response.durability,
            // power: response.power,
            // combat :response.combat,
                 
            }
            
        return formatResult;
         
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }

  
  public getFaKeFilterForm():Observable<InterfaceFilteHeroes[]>{  
    // const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
    
    return this.http.get(`http://localhost:3000/allHeroes`).pipe(
      
        map((response: InterfaceFilteHeroes[]) => {
   
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

  //  pushArray(array: InterfaceFilteHeroes){  //SCRAPEA

  //   this.arrayFilter.push(array);



  //  }
  //  arrayToZero(){
  //    this.arrayFilter=[];
  //  }
  //  getFilter(){

  //   return this.arrayFilter;
  // }
  // public scrapHero(id: number): Observable<any>{
  //   const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
  //   const fullName = 'full-name';
  //   const alterEgo ='alter-egos';
  //   const groupAffiliation ='group-affiliation';
  //   const eyeColor = 'eye-color';
  //   const hairColor = 'hair-color';
  //   return this.http.get(Url).pipe(
      
  //     map((response: any) => {
 
  //     if(!response){
  //       throw new Error('Value expected!');
  //     } else {

  //       const scrapHero={
         
  //         id : parseInt(response.id),
  //         name : response.name,//
  //         gender : response.appearance.gender,
  //         race : response.race,//
  //         weight : response.appearance.weight,
  //         image : response.image.url,
  //         intelligence :  parseInt(response.powerstats.intelligence),
  //         strength: parseInt( response.powerstats.strength),
  //         speed:  parseInt(response.powerstats.speed),
  //         durability:  parseInt(response.powerstats.durability),
  //         power:  parseInt(response.powerstats.power),
  //         combat : parseInt(response.powerstats.combat),
  //         height  : response.appearance.height,
  //         base : response.work.base,
  //         fullName : response.biography[fullName],
  //         groupAffiliation: response.connections[groupAffiliation],
  //         alterEgos: response.biography[alterEgo],
  //         alignment : response.biography.alignment,
  //         eyeColor: response.appearance[eyeColor],
  //         hairColor:response.appearance[hairColor],
  //         occupation: response.work.occupation,
  //       }
  //       return scrapHero;
  //     }
      
  //   }),
  //   catchError((err)=>{
  //   throw new Error(err.message);
  // })
  // )



  // }

  public postNewHero(newHero: InterfaceHeroGeneral){ //se usa

    
    const Url = "http://localhost:3000/allHeroes/"
    return this.http.post(Url, newHero).pipe(
      
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

  getHeroChariot(id: number){
    const Url = `https://www.superheroapi.com/api.php/10217431065143700/${id}`;
    const fullName = 'full-name';
    const alterEgo ='alter-egos';
    const groupAffiliation ='group-affiliation';
    return this.http.get(Url).pipe(
      
        map((response: any) => {
   
        if(!response){
          throw new Error('Value expected!');
        } else {
        
            const formatResult : InterfaceHeroDetail = {

            id : response.id,
            name : response.name,
            gender : response.appearance.gender,
            race : response.appearance.race,
            weight : response.appearance.weight,
            image : response.image.url,
            intelligence : response.powerstats.intelligence,
            strength: response.powerstats.strength,
            speed: response.powerstats.speed,
            durability: response.powerstats.durability,
            power: response.powerstats.power,
            combat :response.powerstats.combat,
            height :response.appearance.height,
            base: response.work.base,
            fullName : response.biography[fullName],
            groupAffiliation: response.connections[groupAffiliation],
            alterEgos: response.biography[alterEgo],
            alignment: response.biography.alignment,
            // eyeColor: response.eyeColor,
            // hairColor: response.hairColor,
            // occupation: response.occupation
                 
            }
          
        return formatResult;
         
        }
      }),
        catchError((err)=>{
        throw new Error(err.message);
      })
    )
  }

   }

