import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  slug!: string;
  selected: any;
  catId: any;
  news: any;
  Trends: any;
  MoreRead: any;
  loaded!: boolean;

  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.slug = String(params.get('slug'));
      this.articleDetail(this.slug);
      this.getTrands();
    window.scroll(0,0)

    });
  }
  articleDetail(slug:any) {
    this.httpService.articleDetails(slug).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.success) {
          
          this.selected = res.data;
          this.catId = this.selected.id;  
          this.getRelated(this.selected.user.id);
          this.loaded = true;
        }
        

        
      }, error: (err: any) => {
        console.log(err);
        
    }
  })
  }
  getRelated(id:any) {
    this.httpService.relatedArticles(id).subscribe(
      (data: any) => {
        console.log(data);
        
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
