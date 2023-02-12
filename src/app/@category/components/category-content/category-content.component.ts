import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.scss'],
})
export class CategoryContentComponent implements OnInit {
  news: any[] = [];
  slug: any;
  count!:number;
  Trends: any;
  MoreRead:any;
  taskBarItems:any;
  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.slug = String(params.get('slug'));
      this.getNews();
      this.getTrands();
      this.getTaskbar()
    });
  }

  ngOnInit(): void {
    this.getNews();
    this.getTrands();
    this.getTaskbar()
  }
  getNews() {
    this.httpService.getCategoryContent(this.slug).subscribe(
      (data: any) => {
        this.news = data.data.news;
        this.count=Math.round(this.news.length/2);
        
      },
      (err: any) => {}
    );
  }

  getTrands() {
    this.httpService.getTrandsSide().subscribe(
      (data: any) => {
        this.Trends = data.data.last_trends;
        this.MoreRead=data.data.more_articles_Read;
      },
      (err: any) => {}
    );
  }
  getTaskbar() {
    this.httpService.getCategoryTaskbar(this.slug).subscribe(
      (data: any) => {
        this.taskBarItems=data.data;
      },
      (err: any) => {}
    );
  }
}
