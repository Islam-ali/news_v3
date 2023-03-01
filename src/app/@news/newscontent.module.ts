import { SharedModule } from './../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NewscontentRoutingModule } from './newscontent-routing.module';
import { NewsDateilsComponent } from './news-dateils/news-dateils.component';
@NgModule({
  declarations: [NewsDateilsComponent],
  imports: [
    CommonModule,
    NewscontentRoutingModule,
    SharedModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
  ],
})
export class NewscontentModule {}
