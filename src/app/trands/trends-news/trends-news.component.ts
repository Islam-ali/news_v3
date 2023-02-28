import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-trends-news',
  templateUrl: './trends-news.component.html',
  styleUrls: ['./trends-news.component.scss']
})
export class TrendsNewsComponent implements OnInit {

  trends!: any[];
  last_news!: any[];
  more_articles_Read!: any[];
  loading = true;
  newsLoading = true;
  page: number = 1;
  number_of_pages = 1;
  number_of_items_per_page = 10;
  total = 10;
  pageSize = 10;
  constructor(
    private httpService: HttpService,) { }

  ngOnInit(): void {
    this.getTrends(1);
    this.lastNews();
    
  }
  getTrends(page:number) {
    this.httpService.getTrends(page).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log(res);
          
          this.loading=false
          this.trends = res.data.trends
          this.total = res.data.paginator.count;
          // this.pageSize = res.data.paginator.number_of_items_per_page;

          
          
        }
        
      }, error: (err: any) => {
        console.log(err);
        
      }
    })
  }
  lastNews() {
    this.httpService.lastNews().subscribe({
      next: (res: any) => {
        if (res.success) {
          this.newsLoading=false
          this.last_news = res.data.last_news;
          this.more_articles_Read=res.data.more_articles_Read
        }
      }, error: (err: any) => {
        console.log(err);
        
      }
    })
  }
  changePage(event:any) {
    this.page = event;
    this.getTrends(this.page)
    
  }

}
