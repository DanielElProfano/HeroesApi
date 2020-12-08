import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StadisticsComponent } from './stadistics-component/stadistics.component';

const routes: Routes = [{ path: '', component:StadisticsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadisticsRoutingModule { }
