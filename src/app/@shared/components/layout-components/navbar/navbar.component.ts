import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isShown:boolean=false;
allCategories:any;
showMore:boolean=false;
taskBarItems:any[]=[]
constructor(private httpService:HttpService){ }

  ngOnInit(): void {
    this.getAllCategories();
    this.getTaskbar()
  }
shDrop()
{
this.isShown=!this.isShown;
}
getAllCategories() {
  
  this.httpService.getCategories().subscribe((data: any) => {
   this.allCategories=data.data;
if(this.allCategories.length>8)
this.showMore=true
  }, (err: any) => {

  });

}
getTaskbar() {
  
  this.httpService.getTopTaskbar().subscribe((data: any) => {
   this.taskBarItems=data.data;
  }, (err: any) => {

  });

}
setName(name:string)
{
  localStorage.setItem('categoryNmame',name)
}
}
