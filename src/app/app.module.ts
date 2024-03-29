import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './@home/home.module';
import { SharedModule } from './@shared/shared.module';
import { CategoryModule } from './@category/category.module';
import { TrandsModule } from './trands/trands.module';
import { NgMarqueeModule } from 'ng-marquee';
import { AdsComponent } from './ads/ads.component';
import { LoaderInterceptor } from './@core/helpers/Loader.Interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderService } from './@core/services/loader.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AdsenseModule } from 'ng2-adsense';
import { Error404Component } from './@core/errors/error404/error404.component';

@NgModule({
  declarations: [AppComponent, AdsComponent , Error404Component],
  imports: [
    ShareButtonsModule,
    ShareIconsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    // HomeModule,
    SharedModule,
    // CategoryModule,
    // TrandsModule,
    ReactiveFormsModule
    , ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-2375911386676049',
      adSlot: 9059883514,
      height: 100,
      width: 300,
    }),



  ],
  providers: [
    // LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
//
