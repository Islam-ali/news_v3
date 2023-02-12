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
  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
     }

  ngOnInit(): void {
    this.getNews();
  }
  getNews() {
    this.httpService.getArticles().subscribe(
      (data: any) => {
        this.news = data.data.articles;
      },
      (err: any) => {}
    );
  }
}
