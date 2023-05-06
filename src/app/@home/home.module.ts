import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbAccordionModule, NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent
  ],
  imports: [BrowserModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule, HttpClientModule,
    NgbCarouselModule,
    FormsModule,
    NgFor,
    NgbAccordionModule,
    NgbCollapseModule,
    AdsenseModule
  ]
})
export class HomeModule { }
