import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChariotRoutingModule } from './chariot-routing.module';
import { ChariotComponent } from './chariot-component/chariot.component';
import { ModifyFormComponent } from './chariot-component/modify-form/modify-form.component';


@NgModule({
  declarations: [ChariotComponent, ModifyFormComponent],
  imports: [
    CommonModule,
    ChariotRoutingModule
  ]
})
export class ChariotModule { }
