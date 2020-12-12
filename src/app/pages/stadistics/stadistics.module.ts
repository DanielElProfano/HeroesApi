import { FormComponent } from './stadistics-component/filter/form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadisticsRoutingModule } from './stadistics-routing.module';
import { StadisticsComponent } from './stadistics-component/stadistics.component';
import { ChartsModule } from 'ng2-charts';
import { StickerComponent } from './stadistics-component/sticker/sticker.component';
import { GraphComponent } from './stadistics-component/graph/graph.component';
import { FilterComponent } from './stadistics-component/filter/filter.component';
import { DetailComponent } from './stadistics-component/detail/detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StadisticsComponent,
    StickerComponent,
    GraphComponent,
    FilterComponent,
    FormComponent,
    DetailComponent,],
  imports: [
    CommonModule,
    StadisticsRoutingModule,
    ChartsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ]
})
export class StadisticsModule { }