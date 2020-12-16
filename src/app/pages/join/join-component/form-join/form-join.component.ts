import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { InterfaceJoin } from '../../models/InterfaceJoin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-join',
  templateUrl: './form-join.component.html',
  styleUrls: ['./form-join.component.scss']
})
export class FormJoinComponent implements OnInit {

@Output()  emmitForm = new EventEmitter<InterfaceJoin>();

public form: FormGroup;
public submitted = false;
@Input() public showModal: boolean = false;

sendForm(newHero: InterfaceJoin){

  this.emmitForm.emit(newHero);


}
  constructor(private formbuilder: FormBuilder) { 

    this.form = this.formbuilder.group({
      id :  ['', [, Validators.maxLength(20)]],
      name: ['', [Validators.required, Validators.maxLength(20)]],
      gender: ['', [Validators.required, Validators.maxLength(20)]],
      race: ['', [Validators.required, Validators.maxLength(20)]],
      image: ['', []],
      weight: ['', [, Validators.maxLength(20)]],
      intelligence: ['', [Validators.required, Validators.maxLength(3)]],
      strength: ['', [Validators.required, Validators.maxLength(3)]],
      speed: ['', [Validators.required, Validators.maxLength(3)]],
      durability: ['', [Validators.required, Validators.maxLength(3)]],
      power: ['', [Validators.required, Validators.maxLength(3)]],
      combat: ['', [Validators.required, Validators.maxLength(3)]],
      height: ['', [, Validators.maxLength(20)]],
      base: ['', [, Validators.maxLength(20)]],
      fullName: ['', [, Validators.maxLength(20)]],
      groupAffiliation: ['', [, Validators.maxLength(20)]],
      alterEgos: ['', [, Validators.maxLength(20)]],
      alignment: ['', [Validators.required, ]],
      eyeColor: ['', [, Validators.maxLength(20)]],
      hairColor: ['', [, Validators.maxLength(20)]],
      occupation: ['', [, Validators.maxLength(100)]],


    })
  }

  onSubmit():void{
    
    this.submitted= true;
    this.showModal = true;
    debugger

    if(this.form.valid){

      const newHero : InterfaceJoin = {
        id: this.form.get('id').value,
        name: this.form.get('name').value,
        gender: this.form.get('gender').value,
        race: this.form.get('race').value,
        image: this.form.get('image').value,
        weight: this.form.get('weight').value,
        intelligence: this.form.get('intelligence').value,
        strength: this.form.get('strength').value,
        speed: this.form.get('speed').value,
        durability: this.form.get('durability').value,
        power: this.form.get('power').value,
        combat: this.form.get('combat').value,
        height: this.form.get('height').value,
        base: this.form.get('base').value,
        fullName: this.form.get('fullName').value,
        groupAffiliation: this.form.get('groupAffiliation').value,
        alterEgos: this.form.get('alterEgos').value,
        alignment: this.form.get('alignment').value,
        eyeColor: this.form.get('eyeColor').value,
        hairColor: this.form.get('hairColor').value,
        occupation: this.form.get('name').value,
      }
      this.form.reset();
      this.sendForm(newHero);
    }
  }

  ngOnInit(): void {
  }

}
