import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SearchService } from 'src/app/@core/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  disabled = false;
  key = '';
  items: any[]=[];
  total: any;
  page=1;
  pageSize = 10;
  type = '';
  searchObj = { search: '', type: '' };
  
  types = [
    { type: 'اخبار', value: 'news' },
    { type: 'تريندات', value: 'trends' },
    { type: 'مقالات', value: 'articles' },
  
  ]
  constructor(
    private searchService: SearchService,
    private route:ActivatedRoute
    
  ) { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.key = String(params.get('key'));
      this.searchObj = { search: this.key, type: this.type };
      this.search(this.searchObj, this.page);
    
    });
  }

  ngOnInit(): void {
  }
  search(key:any,page:any) {
    this.searchService.search(key,page).subscribe({
    next:(res)=>{
        console.log(res);
        this.items = res.data.items;
       
        this.total = res.data.paginator.count;
      
    },error(err) {
      console.log(err);
      
    },
  })
  }
  changePage(event:any) {
    this.page = event;
    this.search(this.searchObj,this.page)
    
  }
  searchType(typeValue:any,inputValue:any) {
    this.searchObj.type = typeValue;
    this.searchObj.search = inputValue;
    this.search(this.searchObj, 1);
    
  }
}
