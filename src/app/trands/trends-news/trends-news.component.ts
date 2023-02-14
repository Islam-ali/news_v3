import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-trends-news',
  templateUrl: './trends-news.component.html',
  styleUrls: ['./trends-news.component.scss']
})
export class TrendsNewsComponent implements OnInit {

  trends!:any[];
  constructor(
    private httpService: HttpService,) { }

  ngOnInit(): void {
    this.getTrends();
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
}
