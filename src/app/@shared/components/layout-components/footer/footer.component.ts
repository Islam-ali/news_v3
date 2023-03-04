import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  allCategories:any[]=[];
    constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
  
    this.httpService.getCategories().subscribe((data: any) => {
     this.allCategories=data.data;
    }, (err: any) => {
  
    });
  
  }
}
