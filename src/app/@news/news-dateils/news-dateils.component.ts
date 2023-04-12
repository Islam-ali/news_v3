import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpService } from 'src/app/@core/services/http/http.service';
import { SeoService } from 'src/app/@core/services/seo.service';

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
  MoreRead: any;
  loaded = false;
  
  url:any;
  carrenturl:any;
  constructor(
    private httpService: HttpService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private seoService:SeoService
  ) {
  

    this.url=this.router.url;
   this.carrenturl=`https://lhzanews.com/${this.url}`
    console.log(this.carrenturl)
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.slug = String(params.get('slug'));
      scrollTo(0,0)
      this.getSelected();
    });
    this.getTrands();
    scrollTo(0,0);
  }
  getSelected() {
    this.loaded=false
    this.httpService.getNewsContent(this.slug).subscribe(
      (data: any) => {
        this.selected = data.data;
        if (data.success) {
          console.log(data);
          
          this.loaded = true;
          this.seoUpdate(data.data)
        }
        
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
   
  metaTitle!:string;
  metaDescription!:string;
  metaImage!:string;
  seoUpdate(test:any) {
    this.metaTitle = test.title;
    this.metaDescription = test.content;
    this.metaImage = test.image;
    // this.seoService.updateUrl();
    console.log(this.metaDescription,this.metaImage,this.metaTitle);
    
    if (this.metaTitle != null) {
      this.seoService.updateTitle(this.metaTitle);
    }
    if (this.metaDescription != null) {
      this.seoService.updateDescription(this.metaTitle);
    }
    if (this.metaImage != null) {
      this.seoService.updateImage(this.metaImage);
    }
  }
}
