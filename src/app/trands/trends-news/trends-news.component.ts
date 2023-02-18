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
  more_articles_Read!:any[]
  constructor(
    private httpService: HttpService,) { }

  ngOnInit(): void {
    this.getTrends();
    this.lastNews();
  }
  getTrends() {
    this.httpService.getTrends().subscribe({
      next: (res: any) => {
        console.log(res);
        
        this.trends=res.data.trends
        console.log(this.trends);
        
      }, error: (err: any) => {
        console.log(err);
        
      }
    })
  }
  lastNews() {
    this.httpService.lastNews().subscribe({
      next: (res: any) => {
        console.log(res);
        this.last_news = res.data.last_news;
        this.more_articles_Read=res.data.more_articles_Read
      }, error: (err: any) => {
        console.log(err);
        
      }
    })
  }
}
