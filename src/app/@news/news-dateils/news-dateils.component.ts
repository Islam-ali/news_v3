import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-news-dateils',
  templateUrl: './news-dateils.component.html',
  styleUrls: ['./news-dateils.component.scss'],
})
export class NewsDateilsComponent implements OnInit {
  slug: any;
  selected: any;
  Trands: any;
  news: any;
  catId:any;
  Trends: any;
  MoreRead:any;
  
  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.slug = String(params.get('slug'));
      this.getSelected();
      
    });
  }

  ngOnInit(): void {
    this.getSelected();
    this.getTrands();
    scrollTo(0,0);
  }
  getSelected() {
    this.httpService.getNewsContent(this.slug).subscribe(
      (data: any) => {
        this.selected = data.data;
      
        
        this.catId=this.selected.id;  
        this.getRelated()
      },
      (err: any) => {}
    );
  }
  getRelated() {
    this.httpService.getRelatedNews(this.catId).subscribe(
      (data: any) => {
        this.news = data.data;
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
   
  
}
