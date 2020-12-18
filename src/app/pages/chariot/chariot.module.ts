import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChariotRoutingModule } from './chariot-routing.module';
import { ChariotComponent } from './chariot-component/chariot.component';
import { ModifyFormComponent } from './chariot-component/modify-form/modify-form.component';
import { NgDragDropModule } from 'ng-drag-drop';


import {DragDropModule} from '@angular/cdk/drag-drop';

import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [ChariotComponent, ModifyFormComponent],
  imports: [
    CommonModule,
    ChariotRoutingModule,
  
    NgDragDropModule,
      DragDropModule,
  
    ScrollingModule,
    
  
  ]
})
export class ChariotModule { }
