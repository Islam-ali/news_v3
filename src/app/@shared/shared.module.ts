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
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe
  ],
  imports: [
    MdbCollapseModule,
    MdbCarouselModule,
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    NgbPaginationModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent,
    PaginationComponent,
    MaxLenghtPipe

  ]
})
export class SharedModule { }
