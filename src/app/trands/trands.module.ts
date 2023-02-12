import { TrandsRoutingModule } from './trands-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../@shared/shared.module';
import { TrandsComponent } from './trands.component';



@NgModule({
  declarations: [TrandsComponent],
  imports: [
    CommonModule,TrandsRoutingModule,SharedModule
  ]
})
export class TrandsModule { }
