import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/layout-components/footer/footer.component';
import { NavbarComponent } from './components/layout-components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import {MatIconModule} from '@angular/material/icon';
import { HomeSliderComponent } from './components/other/home-slider/home-slider.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { PaginationComponent } from './components/other/pagination/pagination.component';
import { NgbDropdownModule, NgbModule, NgbPaginationModule, NgbPopover, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
import { LoaderComponent } from './components/other/loader/loader.component';
import { PollComponent } from './components/other/poll/poll.component';
import { SideAdsComponent } from './components/other/side-ads/side-ads.component';
import { AdsenseModule } from 'ng2-adsense';
import { HorizontalComponent } from './components/layout-components/horizontal/horizontal.component';
@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe,
    LoaderComponent,
    PollComponent,
    SideAdsComponent,
    HorizontalComponent
  ],
  imports: [
    NgbModule,
    MdbCollapseModule,
    MdbCarouselModule,
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    AdsenseModule
    
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe,
    LoaderComponent,
    PollComponent,
    

  ]
})
export class SharedModule { }
