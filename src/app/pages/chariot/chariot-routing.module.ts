import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChariotComponent } from './chariot-component/chariot.component';

const routes: Routes = [{ path: '', component:ChariotComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChariotRoutingModule { }
