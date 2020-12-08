import { HeroesService } from './../../../../../services/heroes.service';
import { InterfaceFilteHeroes, InterfaceHeroDetail } from './../../../../../models/Interface-hero-general';
import { IfilterForm, powerStats } from './../model/IfilterForm';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() emmitForm  = new EventEmitter<any>();
  
  public form: FormGroup;
  public submitted = false;
  public arrayAlignment: string[][];
  public powerStats: powerStats[]|any = [];
  public heroes: InterfaceFilteHeroes[] | any =[];

  public arrayResult : InterfaceFilteHeroes[] = [];
  

  constructor(private formBuilder: FormBuilder, private heroesService:HeroesService) { 
    this.arrayAlignment=[
      [ 'bad'],['good'],['both']
    ];
    this.powerStats=[
      ['intelligence'],['strength'],['speed'],
      ['durability'],['power'],['combat']
    ];
     
      this.form = this.formBuilder.group({
        alignment: ['',[]],
        powerStats: ['',[]],
        sex : ['',[]]
      })
    
    }

  sendForm(fomulario){


  }
  ngOnInit(): void {}

  public onSubmit():void{
   
    if(this.form.valid){
      
      const filter: IfilterForm = {
      sex: this.form.get('sex').value,
      powerStats: this.form.get('powerStats').value,
      alignment: this.form.get('alignment').value
    }
      
      this.emmitForm.emit(filter);
  //*************************************************************** */
     
    }
  
  }
  

}