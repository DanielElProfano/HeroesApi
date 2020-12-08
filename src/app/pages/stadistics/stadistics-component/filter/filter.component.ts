import { InterfaceFilteHeroes, InterfaceHeroGeneral} from './../../../../models/Interface-hero-general';
import { HeroesService } from 'src/app/services/heroes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IfilterForm, Alignment, powerStats } from './model/IfilterForm';




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
  public arrayResult: InterfaceHeroGeneral[]=[];
  public filtrado: InterfaceHeroGeneral | any = {}
  arrayAlignment: string[][];
 
  public formPetition : any = {}
  public heroesArray: any[]
  //variables para el select

  

  constructor( private heroesService: HeroesService){ 

    this.heroesArray = [];
  }

  ngOnInit(): void {
    
  }

  setForm(form){
    
    let recogeArray: any = this.filterForm(form);
    console.log('recoge: '+recogeArray);
    const hola = this.heroesService.getFilter();
    console.log()
     hola.sort((a: any , b:any) => {
     
      return (a.strength - b.strength)})

      console.log('ordenado'+hola)
  
  hola.forEach(element => {

    console.log(element)
    
  });

}
  

  getArray(array: InterfaceHeroGeneral[]):void{  //funcion del @Outuput
   
    this.emmitArray.emit(array);
  }

  
 
  public filterForm(filter: IfilterForm):any{
    const heroe = [];
    // this.heroesService.arrayToZero();
    
    for(let i = 1; i<=10; i++){
     
        this.heroesService.getfilterForm(i).subscribe((result) =>{
         
        //  heroe.push(result)
        
         
         this.heroesService.pushArray(result);
   
        });
    }
    
      // heroe.sort((a: any , b:any) => {
     
      // return (a.strength - b.strength)}
      
       
      
      
    
    }

    
     
 
 
  
  }
 
 
    // if(filter.powerStats !=undefined){
    
    //   if(filter.powerStats === 'strength'){
    //     console.log('fuerza')
       
    //     arrayTmp = this.heroes;
    //     console.log(arrayTmp);
       
    //     arrayTmp.sort((a, b) =>{
    //       debugger
    //       return a.strength - b.strength;
    //     });
    //     console.log('array');
    //     console.log(arrayTmp);
    //     arrayTmp.forEach(array =>
    //     {
    //       console.log(array)
                  
    //     });
    //   } 
        
    // }
  // }

//   ordenar(array: any){}

   

  
   

  

//   private sortResult(result: InterfaceFilteHeroes, sex: string, alignment: string, powerStats: string): any{
//    debugger



//     if(alignment!=undefined && (sex != "" || sex != undefined)){ //si align tiene texto

//      if((sex === "male" && result.gender.toLowerCase() === 'male') && ( alignment === 'good' && result.alignment.toLowerCase()==='good')){
    
//       this.pushArray(result);
//       }
//       else if(sex === "female" && result.gender.toLowerCase() === 'female' && ( alignment === 'good' && result.alignment.toLowerCase()==='good')){
//         this.pushArray(result);
//       }
//     if(sex === "male" && result.gender.toLowerCase() === 'male' && ( alignment === 'bad' && result.alignment.toLowerCase()==='bad')){
//       this.pushArray(result);

//     } else if(sex === "female" && result.gender.toLowerCase() === 'female' && ( alignment === 'bad' && result.alignment.toLowerCase()==='bad')){
//       this.pushArray(result);
//     }
    

//     }
//     else{
//       if(sex != "" || sex != undefined){

//       if(sex === "male" && result.gender.toLowerCase() === 'male'){
//         this.pushArray(result);
//         // this.arrayFilter.push(result);
//         // const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
//        }
//        else if(sex === "female" && result.gender.toLowerCase() === 'female'){
//         this.pushArray(result);
//        }

//        }
//        if(alignment!=undefined){
//         if(alignment === "good" && result.gender.toLowerCase() === 'good'){
//           this.pushArray(result);


//        }
//        if(alignment === "bad" && result.gender.toLowerCase() === 'good'){
//         this.pushArray(result);


//       }

    
//       }




//   }

  
  
//   }
//   public pushArray(result: InterfaceFilteHeroes){
    
  
//     const {speed, intelligence ,strength,durability,power, combat, ...filtrado } = result
//     this.arrayFilter.push(filtrado);
//     console.log(this.arrayFilter);
//   }

//   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//   //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// }