import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement!: ElementRef;
  allCategories: any[] = [];
  sticky: boolean = false;
  elementPosition: any;
  showMore: boolean = false;
  isShown: boolean = false;
  isShown2: boolean = false;
  navigation: boolean = false;
  toggleSearch: boolean = false;
  socialMedia:any[]=[
    {
      link:"https://www.facebook.com/profile.php?id=100092450328221&mibextid=ZbWKwL",
      icon:"fa-facebook-f",
      color:"#1877F2"
    },
    {
      link:"https://youtube.com/@lhzabelhzatv2",
      icon:"fa-youtube",
      color:"#CD201F"
    },
    {
      link:"https://twitter.com/lhza_news",
      icon:"fa-twitter",
      color:"#1DA1F2"
    },
    {
      link:"https://www.instagram.com/lhzanews/",
      icon:"fa-instagram",
      color:"#E4405F"
    },
    {
      link:"https://www.tiktok.com/@lhzanews?is_from_webapp=1&sender_device=pc",
      icon:"fa-tiktok",
      color:"#000"
    },
  ]
  constructor(
    private _httpService: HttpService,
    private router: Router,
    public _LayoutService:LayoutService
  ) { }

  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {

    this._httpService.getCategories().subscribe((data: any) => {
      this.allCategories = data.data;
      if (this.allCategories.length > 8)
        this.showMore = true
    }, (err: any) => {

    });

  }
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  search(key: any) {
    this.router.navigateByUrl(`/search/${key}`);
  }
  shDrop() {
    this.isShown = !this.isShown;
  }
  shDrop2() {
    this.isShown2 = !this.isShown2;
  }
  toggleNav(){
    this.navigation = !this.navigation;
    this._LayoutService.toggleNav(this.navigation);
  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = document.documentElement.scrollTop
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
