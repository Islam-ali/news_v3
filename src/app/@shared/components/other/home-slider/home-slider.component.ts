import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/@core/services/http/http.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  slides:any[]=[];
@Input()  images:any[]=[];
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    // this.getSlider()
  }
  // getSlider() {
  //   this.httpService.getSliders().subscribe((data: any) => {
  //    this.slides=data.data;
  //    for(let i=0;this.slides.length;i++)
  //    if(this.slides[i]?.image)
  //    this.images.push(this.slides[i]?.image)

  //  }, (err: any) => {

  //   });

  // }
}
