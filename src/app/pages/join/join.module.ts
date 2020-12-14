import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join-component/join.component';
import { FormJoinComponent } from './join-component/form-join/form-join.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ModalComponent } from './join-component/modal/modal.component';


@NgModule({
  declarations: [JoinComponent, FormJoinComponent, ModalComponent],
  imports: [
    CommonModule,
    JoinRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
   
  ]
})
export class JoinModule { }
