import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChariotRoutingModule } from './chariot-routing.module';
import { ChariotComponent } from './chariot-component/chariot.component';


@NgModule({
  declarations: [ChariotComponent],
  imports: [
    CommonModule,
    ChariotRoutingModule
  ]
})
export class ChariotModule { }
