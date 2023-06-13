import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement!: ElementRef;
  allCategories:any[]=[];
  sticky: boolean = false;
  elementPosition: any;
  showMore:boolean = false;
  isShown:boolean = false;

  constructor(private _httpService: HttpService , private router: Router) { }

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
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  search(key: any) {
    this.router.navigateByUrl(`/search/${key}`);
  }
  shDrop() {
    this.isShown = !this.isShown;
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = document.documentElement.scrollTop
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
