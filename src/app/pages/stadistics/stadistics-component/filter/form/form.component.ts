import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { HeroesService } from './../../../../../services/heroes.service';
import { FormGroup, FormBuilder} from '@angular/forms';

import { IfilterForm, powerStats } from './../model/IfilterForm';

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
 
  constructor(private translateService:TranslateService, private formBuilder: FormBuilder, private heroesService:HeroesService) { 
   
    this.arrayAlignment=[
      [ 'bad'],['good']
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
  ngOnInit(): void { this.form.reset()}


  public onSubmit():void{
   
    if(this.form.valid){
      
      const filter: IfilterForm = {
     
        sex: this.form.get('sex').value,
        powerStats: this.form.get('powerStats').value,
        alignment: this.form.get('alignment').value
      }
      
      this.emmitForm.emit(filter);
 
     
    }
  
  }

}