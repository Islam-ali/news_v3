import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  allCategories: any[] = [];
  showMore: boolean = false;
  navigation: boolean = false;

  constructor(
    private _httpService: HttpService,
    private router:Router,
   public  _LayoutService:LayoutService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  search(key: any) {
    this.router.navigateByUrl(`/search/${key}`);
  }
  getAllCategories() {

    this._httpService.getCategories().subscribe((data: any) => {
      this.allCategories = data.data;
      if (this.allCategories.length > 8)
        this.showMore = true
    }, (err: any) => {

    });

  }
}
