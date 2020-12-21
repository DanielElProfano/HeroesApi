
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StadisticsRoutingModule } from './stadistics-routing.module';

import { StickerComponent } from './stadistics-component/sticker/sticker.component';
import { GraphComponent } from './stadistics-component/graph/graph.component';
import { FilterComponent } from './stadistics-component/filter/filter.component';
import { DetailComponent } from './stadistics-component/detail/detail.component';
import { StadisticsComponent } from './stadistics-component/stadistics.component';
import { FormComponent } from './stadistics-component/filter/form/form.component';

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
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class StadisticsModule { }
