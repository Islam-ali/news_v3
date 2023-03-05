import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  news: any[] = [];
  slug: any;
  Trends: any[] = [];
  MoreRead: any[] = [];
  page: number = 1;
  number_of_pages = 1;
  number_of_items_per_page = 10;
  total = 10;
  pageSize = 10;

  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
     }

  ngOnInit(): void {
    this.getNews(this.page);
    this.getTrands();
  }
  getNews(page:any) {
    this.httpService.getArticles(page).subscribe(
      (data: any) => {
        console.log(data);
        
        this.news = data.data.articles;
        this.total = data.data.paginator.count;

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
  changePage(event:any) {
    this.page = event;
    this.getNews(this.page)
    
  }
}
