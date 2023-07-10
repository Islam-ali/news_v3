import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LayoutService } from '../layout.service';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit ,AfterViewInit{
  @ViewChild('stickyMenu') menuElement!: ElementRef;
  allCategories: any[] = [];
  showMore: boolean = false;
  navigation: boolean = false;
  sticky: boolean = false;
  elementPosition: any;

  socialMedia:any[]=[
    {
      "link":"https://www.facebook.com/profile.php?id=100092450328221&mibextid=ZbWKwL",
      "icon":"fa-facebook-f"
    },
    {
      "link":"https://youtube.com/@lhzabelhzatv2",
      "icon":"fa-youtube"
    },
    {
      "link":"https://twitter.com/lhza_news",
      "icon":"fa-twitter"
    },
    {
      "link":"https://www.instagram.com/lhzanews/",
      "icon":"fa-instagram"
    },
    {
      "link":"https://www.tiktok.com/@lhzanews?is_from_webapp=1&sender_device=pc",
      "icon":"fa-tiktok"
    },
  ]
  constructor(
    private _httpService: HttpService,
    private router:Router,
   public  _LayoutService:LayoutService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  search(key: any) {
    this.router.navigateByUrl(`/search/${key}`);
    this._LayoutService.toggleNav(false);
  }
  toggleSidebar(){
    this.navigation = !this.navigation
    this._LayoutService.toggleNav(this.navigation)
  }
  getAllCategories() {
    this._httpService.getCategories().subscribe((data: any) => {
      this.allCategories = data.data;
      if (this.allCategories.length > 8)
        this.showMore = true
    }, (err: any) => {
    });
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
