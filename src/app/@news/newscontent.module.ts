import { SharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewscontentRoutingModule } from './newscontent-routing.module';
import { NewsDateilsComponent } from './news-dateils/news-dateils.component';
@NgModule({
  declarations: [NewsDateilsComponent],
  imports: [CommonModule, NewscontentRoutingModule, SharedModule],
})
export class NewscontentModule {}
