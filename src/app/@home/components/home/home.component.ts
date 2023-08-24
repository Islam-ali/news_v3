import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { event } from 'jquery';
import { fromEvent } from 'rxjs';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { SeoService } from 'src/app/@core/services/seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  allCategories: any;
  taskBarItems: any[] = [];
  slides: any[] = [];
  images: any[] = [];
  titles: any[] = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  next = 0;
  perv = 1;
  loaded = false;
  articles: any[] = []
  trends: any[] = []
  tiles: any[] = [
    { text: '../../../../assets/temp-imgs/1.jpg', cols: 1, rows: 1, color: 'lightblue' },
    { text: '../../../../assets/temp-imgs/1.jpg', cols: 1, rows: 1, color: 'lightblue' },
    { text: '../../../../assets/temp-imgs/1.jpg', cols: 2, rows: 2, color: 'lightgreen' },
    { text: '../../../../assets/temp-imgs/1.jpg', cols: 1, rows: 1, color: 'lightpink' },
    { text: '../../../../assets/temp-imgs/1.jpg', cols: 1, rows: 1, color: '#DDBDF1' },
  ];
  safeURL: any;
  tvLink?: any;
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  banner: any;
  slidess = [
    { title: 'عنوان الخبر 1', content: 'محتوى الخبر 1' },
    { title: 'عنوان الخبر 2', content: 'محتوى الخبر 2' },
    { title: 'عنوان الخبر 3', content: 'محتوى الخبر 3' }
  ];

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
  private scroll: number = 0;
  showVideo: boolean = false;
  hideVideo: boolean = false;
  @ViewChild('video') video!: ElementRef;
  constructor(private httpService: HttpService, private router: Router, private seoService: SeoService, private _sanitizer: DomSanitizer, private el: ElementRef) { }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scroll = this.video.nativeElement.offsetTop;
    if (this.scroll > window['pageYOffset']) {
      this.showVideo = false;
    } else {
      this.showVideo = true;
    }
  }
  ngOnInit(): void {
    this.getTv();
    this.getAllCategories();
    this.getTaskbar();
    this.getSliders();
    this.latestArticles();
    this.latestTrends();
    this.seoService.updateTitle('لحظة بلحظة');

  }
  closeVideo() {
    this.hideVideo = true;
  }
  ngAfterViewInit() {
    // fromEvent(this.video?.nativeElement,'scroll').subscribe((e: any) => console.log(1));
    // console.log(this.video.nativeElement.offsetTop);
    // (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
    //   google_ad_client: 'your-publisher-id-here',
    //   enable_page_level_ads: true,
    //   adSlot: 'my-ad'
    // });
  }
  getAllCategories() {
    this.httpService.getCategories().subscribe(
      (data: any) => {
        if (data.success) {

          this.allCategories = data.data;
          this.loaded = true;
        }
      },
      (err: any) => { }
    );
  }
  getSliders() {
    this.httpService.getSliders().subscribe(
      (data: any) => {
        this.slides = data.data;
        for (let i = 0; i < this.slides.length; i++) {
          this.images.push(this.slides[i].image);
          this.titles.push(this.slides[i].title);
        }
      },
      (err: any) => { }
    );
  }

  getTaskbar() {
    this.httpService.lastNews().subscribe(
      (data: any) => {
        this.taskBarItems = data.data.last_news;
      },
      (err: any) => { }
    );
  }
  search(key: any) {
    this.router.navigateByUrl(`/search/${key}`);
  }

  Next() {
    if (this.next == this.slides.length - 2) {
      this.next = 0;
      this.perv = 1;
    } else {
      this.next++;
      this.perv++;
    }
  }
  Prov() {
    if (this.perv < 1) {
      this.next = this.slides.length - 1;
      this.perv = this.slides.length - 2;
    } else {
      this.next--;
      this.perv--;
    }
  }
  setName(name: string) {
    // localStorage.setItem('categoryNmame',name)
  }


  getTv() {
    this.httpService.getTv().subscribe(
      (data: any) => {
        this.tvLink = data.data.link;

        // this.httpService.tvvideo=false
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
          this.tvLink?.concat('?autoplay=1&mute=1')
        );
      },
      (err: any) => { }
    );
  }


  latestArticles() {
    this.httpService.latestArticles().subscribe({
      next: (res: any) => {
        this.articles = res.data

      }, error: (err: any) => {

      }
    })
  }
  latestTrends() {
    this.httpService.latestTrends().subscribe({
      next: (res: any) => {
        this.trends = res.data

      }, error: (err: any) => {

      }
    })
  }
}
