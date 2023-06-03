import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list-card',
  templateUrl: './grid-list-card.component.html',
  styleUrls: ['./grid-list-card.component.scss']
})
export class GridListCardComponent implements OnInit {
  @Input() data:any[]=[];
  @Input() index:number = 0;
  @Input() slider:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
