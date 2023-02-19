import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { param } from 'jquery';
import { HttpService } from '../@core/services/http/http.service';

@Component({
  selector: 'app-trands',
  templateUrl: './trands.component.html',
  styleUrls: ['./trands.component.scss'],
})
export class TrandsComponent implements OnInit {
  slug: any;
  trandcontent: any;
  Trands: any;
  relateTrends:any[]=[]
  last_news!: any[];
  more_articles_Read!: any[];
  loading = true;
  relatedLoading = true;
  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.slug = String(params.get('slug'));
      this.relatedTrends(params.get('id'))
    });
  }

  ngOnInit(): void {
    this.getTrandscontent();
    this.getTrands();
    this.lastNews();
  }
  getTrandscontent() {
    this.httpService.getTrendsContent(this.slug).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.trandcontent = data.data;
      },
      (err: any) => {}
    );
  }
  getTrands() {
    this.httpService.getTrandsSide().subscribe(
      (data: any) => {
        this.Trands = data.data.trends;
      },
      (err: any) => {}
    );
  }
  relatedTrends(trendID: any) {
    this.httpService.relatedTrends(trendID).subscribe({
      next: (res: any) => {
        console.log(res);
        this.relateTrends=res.data
        
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
