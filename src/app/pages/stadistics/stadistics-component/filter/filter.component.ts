import { InterfaceJoin } from './../../../join/models/InterfaceJoin';
import { InterfaceFilteHeroes, InterfaceHeroDetail, InterfaceHeroGeneral} from './../../../../models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IfilterForm, Alignment, powerStats } from './model/IfilterForm';
import { stringify } from 'querystring';




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
  public powerStats: powerStats[]|any = [];
  public arrayFilter: InterfaceHeroGeneral[]=[];
  public arrayResult: InterfaceFilteHeroes[]=[];
  public filtrado: InterfaceFilteHeroes | any = {}
  arrayAlignment: string[][];
  public formPetition : any = {}
  public heroesArray: any[]
  public arrayAllHeroes: InterfaceFilteHeroes[] = [];
  public recogeArray : InterfaceFilteHeroes[] = []
  constructor( private heroesService: HeroesService){ 

    this.heroesArray = [];
  }

  ngOnInit(): void {}
  sendFilterHeroes(array: InterfaceHeroGeneral[]){
   
    this.emmitArray.emit(array);
    
  }
  setForm(form: IfilterForm){ //Output del Form
    this.filterForm(form);
  this.recogeArray = JSON.parse(localStorage.getItem('arrayHeroes'))  //COMPROBAMOS SI EL LOCALSTORAGE ES VACIO
  // if(this.recogeArray.length === 0){
    this.filterForm(form);          //SI VACIO HACEMOS PETICION A LA API
  // }
  
  this.arrayResult= this.sortResult(this.recogeArray, form);
  if(this.arrayResult.length != 0){
    this.sendFilterHeroes(this.arrayResult)
  }
 }
  public filterForm(form){
         
     this.heroesService.getFaKeFilterForm().subscribe((result) =>{ ///modificado
    //  this.arrayAllHeroes = result
     localStorage.setItem('arrayHeroes', JSON.stringify(result));
      
   });
   
 }
 private sortArray(array: any, powerStat:string):any[]
 {  //oredena el array por powerStats.
    array.sort((a: any , b:any) => {
       return (b[powerStat] - a[powerStat])
    });
return array;

 }
 private quitarNaNenArray(array, powerStat){  //QUITAR LOS NaN Y LOS NULL

      array.forEach(element => {
      let number = element[powerStat];
      if (number != null){
        let n = number.toString();
        if( n != "NaN"){ 
          this.arrayResult.push(element)
        }
      }
    });
    return this.sortArray(this.arrayResult, powerStat);


 }
  private sortResult(result: InterfaceFilteHeroes[], form: IfilterForm): any{
   
    this.arrayFilter = [];
    this.arrayResult = [];
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

        if((sex === element.gender.toLowerCase() && (sex === 'male')) && ( alignment === 'good') && (element.alignment.toLowerCase()=== 'good')){
        
          this.pushArray(element);
          }
          else if((sex === element.gender.toLowerCase() && (sex === 'male')) && ( alignment === 'bad') && (element.alignment.toLowerCase()=== 'bad')){
            this.pushArray(element);
          }
        if((sex ===  element.gender.toLowerCase()&& (sex === 'female')) && ( alignment === 'good') && (element.alignment.toLowerCase()=== 'good')){
          this.pushArray(element);

        } else if((sex === element.gender.toLowerCase()&& (sex === 'female')) && ( alignment === 'bad') && (element.alignment.toLowerCase()=== 'bad')){
          this.pushArray(element);
        }
    

    }
    else{
          if(sex != ""){
          
              if(sex === "male" && element.gender.toLowerCase() === 'male'){
                this.pushArray(element);
            
              }
              else if(sex === "female" && element.gender.toLowerCase() === 'female'){
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


    console.log(this.arrayFilter)
   
    return this.arrayFilter;
    }
public pushArray(result: InterfaceFilteHeroes){
      
    const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
    this.arrayFilter.push(filtrado);
    
  }
}
