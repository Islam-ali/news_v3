import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/layout-components/footer/footer.component';
import { NavbarComponent } from './components/layout-components/navbar/navbar.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import {MatIconModule} from '@angular/material/icon';
import { HomeSliderComponent } from './components/other/home-slider/home-slider.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeSliderComponent
  ],
  imports: [MdbCollapseModule,MdbCarouselModule,
    CommonModule,
    SharedRoutingModule,MatIconModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,HomeSliderComponent
  ]
})
export class SharedModule { }
