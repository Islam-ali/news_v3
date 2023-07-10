import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  allCategories:any[]=[];
  socialMedia:any[]=[
    {
      "link":"https://www.facebook.com/profile.php?id=100092450328221&mibextid=ZbWKwL",
      "icon":"fa-facebook-f"
    },
    {
      "link":"https://youtube.com/@lhzabelhzatv2",
      "icon":"fa-youtube"
    },
    {
      "link":"https://twitter.com/lhza_news",
      "icon":"fa-twitter"
    },
    {
      "link":"https://www.instagram.com/lhzanews/",
      "icon":"fa-instagram"
    },
    {
      "link":"https://www.tiktok.com/@lhzanews?is_from_webapp=1&sender_device=pc",
      "icon":"fa-tiktok"
    },
  ]
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
