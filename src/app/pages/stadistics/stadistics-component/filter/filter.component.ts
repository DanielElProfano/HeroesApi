import { InterfaceFilteHeroes, InterfaceHeroGeneral} from './../../../../models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IfilterForm } from './model/IfilterForm';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() emmitArray  = new EventEmitter<InterfaceHeroGeneral[]>();
  
  public form: FormGroup|any;
  public filter: IfilterForm|any ={}
  public submitted = false;
  public arrayFilter: InterfaceHeroGeneral[]=[];
  public arrayResult: InterfaceFilteHeroes[]=[];
  public filtrado: InterfaceFilteHeroes | any = {}
  public recogeArray : InterfaceFilteHeroes[] = []
  array: any;

  constructor( private heroesService: HeroesService){}

  ngOnInit(): void {}

  sendFilterHeroes(array: InterfaceHeroGeneral[]){
    this.emmitArray.emit(array);
    }
  
  async setForm (form: IfilterForm){ //Output del Formulario
  
    const data = await fetch(`http://localhost:5000/hero/allHeroes`)
    this.array = await data.json();
    this.arrayResult= this.sortResult(this.array, form);
    this.sendFilterHeroes(this.arrayResult)
  }  

 private sortArray(array: any, powerStat:string):any[]

 {  //oredena el array por powerStats.
 
  array.sort((a: any , b:any) => {
       return (b.powerStats[powerStat] - a.powerStats[powerStat])
    });
  return array;

 }
 private quitarNaNenArray(array, powerStat){  //QUITAR LOS NaN Y LOS NULL 

      // array.forEach(element => {
      // let number = element.powerStats[powerStat];
      // if (number != null){
      //   let n = number.toString();
      //   if( n != "NaN"){ 
      //     this.arrayResult.push(element)  //COMO YA NO USO LA SUPERHEROAPI NO ES NECESARIO
      //   }
      // }
    // });
    // return this.sortArray(this.arrayResult, powerStat);
    return this.sortArray(array, powerStat);

 }
  private sortResult(result: InterfaceFilteHeroes[], form: IfilterForm): any{
    
    this.arrayFilter = [];
    this.arrayResult = [];
    if(form.powerStats === null){
        form.powerStats = undefined;
        form.powerStats= "";
    }
    if(form.sex === null){
        form.sex = undefined
    }
    if(form.alignment === null){
      form.alignment = "";
    }
   const alignment = form.alignment[0];
   const sex = form.sex;
   const powerStats = form.powerStats[0];
   let booleanStat = false;
    if(powerStats != undefined){
          booleanStat = true
        if(powerStats === "strength"){

          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }else if(powerStats === "durability"){
          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }else if(powerStats === "combat"){
          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }else if(powerStats === "power"){
          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }else if(powerStats === "intelligence"){

          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }
        else if(powerStats === "speed"){

          const arrayTmp = this.quitarNaNenArray(result, powerStats)
          return this.followFilter(arrayTmp, form, booleanStat);

        }

    }
    else{
      return this.followFilter(result, form, booleanStat)
    }
  }
  private followFilter(array, form, booleanStat){
      
      let alignment = form.alignment[0];
      let sex = form.sex;
     
      array.forEach(element => {
      
  
    if(alignment != undefined && sex != ""){ //si align tiene texto

        if((sex === element.appearance.gender.toLowerCase() && (sex === 'male')) && ( alignment === 'good') && (element.biography.alignment.toLowerCase()=== 'good')){
        
          this.pushArray(element);
          }
          else if((sex === element.appearance.gender.toLowerCase() && (sex === 'male')) && ( alignment === 'bad') && (element.biography.alignment.toLowerCase()=== 'bad')){
            this.pushArray(element);
          }
        if((sex ===  element.appearance.gender.toLowerCase()&& (sex === 'female')) && ( alignment === 'good') && (element.biography.alignment.toLowerCase()=== 'good')){
          this.pushArray(element);

        } else if((sex === element.appearance.gender.toLowerCase()&& (sex === 'female')) && ( alignment === 'bad') && (element.biography.alignment.toLowerCase()=== 'bad')){
          this.pushArray(element);
        }
    

    }
    else{
          if(sex != ""){
          
              if(sex === "male" && element.appearance.gender.toLowerCase() === 'male'){
                this.pushArray(element);
            
              }
              else if(sex === "female" && element.appearance.gender.toLowerCase() === 'female'){
                this.pushArray(element);
              }

          }
          if(alignment!=undefined){

              if(alignment === "good" && element.alignment.toLowerCase() === 'good'){
                this.pushArray(element);


              }
              if(alignment === "bad" && element.alignment.toLowerCase() === 'bad'){
                this.pushArray(element);
              }
          }
    }

    
  });
    if(alignment === undefined && sex === undefined){
      const arrayFilter = []
      array.forEach(element => {
           const filtrado = {
          name : element.name,
          image : element.image.url,
          alignment : element.biography.alignment,
          id : element.id,
          gender : element.appearance.gender
       }
        arrayFilter.push(filtrado);
      });
      
      return arrayFilter;
    }

    return this.arrayFilter;
   
    }
private pushArray(result: any){
  
    // const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
        // const {powerStats, connections, appearance,work, ...filtrado } = result
        const filtrado = {
          name : result.name,
          image : result.image.url,
          alignment : result.biography.alignment,
          id : result.id,
          gender : result.appearance.gender


        }
   
    this.arrayFilter.push(filtrado);
    
  }
 
  
  

  
  

  
  
}
