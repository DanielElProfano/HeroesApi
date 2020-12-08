import { InterfaceJoin } from './../../../join/models/InterfaceJoin';
import { InterfaceFilteHeroes, InterfaceHeroGeneral} from './../../../../models/Interface-hero-general';
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
 

  public recogeArray : InterfaceFilteHeroes[] = []

  

  constructor( private heroesService: HeroesService){ 

    this.heroesArray = [];
  }

  ngOnInit(): void {}
  sendFilterHeroes(array: InterfaceHeroGeneral[]){
    
    this.emmitArray.emit(array);
    
  }
  setForm(form: IfilterForm){ //Output del Form
    
    this.recogeArray = this.filterForm();
    setTimeout(() => {
    
      this.arrayFilter = null
      this.arrayResult = null
      this.arrayResult= this.sortResult(this.recogeArray, form); ///filtrado del array
      this.sendFilterHeroes(this.arrayResult)
    
    }, 2000);
    
}
  public filterForm():InterfaceFilteHeroes[]{
    const heroe = [];
    
    for(let i = 1; i<=100; i++){
     
        this.heroesService.getfilterForm(i).subscribe((result) =>{
         
        heroe.push(result)
  
        });
    }
    return heroe;
 }
 private sortArray(array: any, powerStat:string):any[]
 {  //oredena el array por powerStats.

    array.sort((a: any , b:any) => {
     
    return (b[powerStat] - a[powerStat])});

    return array;

 }
 private quitarNaNenArray(array, powerStat){

      array.forEach(element => {
      let number = element[powerStat];
      let n = number.toString();
      if( n != "NaN"){ 
        this.arrayResult.push(element)
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
      
  
    if(alignment != undefined && (sex != "" || sex != undefined)){ //si align tiene texto

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
          if(sex != "" || sex != undefined){
          
              if(sex === "male" && element.gender.toLowerCase() === 'male'){
                this.pushArray(element);
            
              }
              else if(sex === "female" && element.gender.toLowerCase() === 'female'){
                this.pushArray(element);
              }

          }
          if(alignment!=undefined){
              if(alignment === "good" && element.gender.toLowerCase() === 'good'){
                this.pushArray(element);


              }
              if(alignment === "bad" && element.gender.toLowerCase() === 'good'){
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