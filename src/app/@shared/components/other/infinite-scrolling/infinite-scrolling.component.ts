import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scrolling',
  templateUrl: './infinite-scrolling.component.html',
  styleUrls: ['./infinite-scrolling.component.scss']
})
export class InfiniteScrollingComponent implements OnInit {
  @Input() taskBarItems:any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
