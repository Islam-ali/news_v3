import { TrandsRoutingModule } from './trands-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { TrandsComponent } from './trands.component';
import { TrendsNewsComponent } from './trends-news/trends-news.component';



@NgModule({
  declarations: [
    TrandsComponent,
    TrendsNewsComponent
  ],
  imports: [
    CommonModule,
    TrandsRoutingModule,
    SharedModule
  ]
})
export class TrandsModule { }
