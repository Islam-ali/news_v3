import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {
  @Input() data:any;
  @Input() index:number = 0;
  @Input() slider:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
