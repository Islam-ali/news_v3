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
import { NgbPaginationModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
import { LoaderComponent } from './components/other/loader/loader.component';
import { PollComponent } from './components/other/poll/poll.component';
@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe,
    LoaderComponent,
    PollComponent
  ],
  imports: [
    MdbCollapseModule,
    MdbCarouselModule,
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    NgbPaginationModule,
    NgbProgressbarModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe,
    LoaderComponent,
    PollComponent

  ]
})
export class SharedModule { }
