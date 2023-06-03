import { MdbCollapseDirective, MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import {isPlatformBrowser} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

registerLocaleData(localeAr);
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnDestroy {
isShown:boolean=false;
allCategories:any;
youtubeLive:any;
faceLive:any;
showMore:boolean=false;
taskBarItems:any[]=[];
hideSearch:boolean = false;
time = new Date();
  rxTime = new Date();
  intervalId:any;
  subscription!: Subscription;
  @ViewChild('basicNavbar') mdbCollapse!: NgbCollapse;
  constructor(private httpService: HttpService, @Inject(PLATFORM_ID) private platformId: Object,private router: Router) {
    // this.getTaskbar();
  
  }
  

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.getTaskbar();
      this.getAllCategories();
    this.getFaceLive();
    this.getYoutubeLive();
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let NewTime = hour+ ":" + minuts + ":" + seconds
        this.rxTime = time;
      });
    }
  }
shDrop()
{
this.isShown=!this.isShown;
}

getAllCategories() {
  
  this.httpService.getCategories().subscribe((data: any) => {
   this.allCategories=data.data;
if(this.allCategories.length>8)
this.showMore=true
  }, (err: any) => {

  });

}
getTaskbar() {
  
  this.httpService.getTopTaskbar().subscribe((data: any) => {  
    this.taskBarItems=data.data; 
  
  }, (err: any) => {

  });

}
search(key: any) {
  this.router.navigateByUrl(`/search/${key}`);
}
getYoutubeLive() {
    
  this.httpService.getYoutubeLive().subscribe((data: any) => {
   this.youtubeLive=data.data.link;
  }, (err: any) => {

  });

}
getFaceLive() {
  
  this.httpService.getFaceLive().subscribe((data: any) => {
   this.faceLive=data.data.link;
  
  }, (err: any) => {

  });

}
setName(name:string)
{
  localStorage.setItem('categoryNmame',name)
}
ngOnDestroy() {
  clearInterval(this.intervalId);
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
  }
  toggleNav() {
    if (window.innerWidth <= 991) {
      this.mdbCollapse.toggle();
     }
  }


  toggletvvide(){
    this.httpService.tvvideo=!this.httpService.tvvideo
  }
}
