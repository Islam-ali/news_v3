import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbAccordionModule, NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AdsenseModule } from 'ng2-adsense';
import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from './components/grid-list/grid-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    GridListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbCarouselModule,
    FormsModule,
    NgbAccordionModule,
    NgbCollapseModule,
    AdsenseModule,
    MatGridListModule
  ],
  exports:[
    GridListComponent
  ]
})
export class HomeModule { }
