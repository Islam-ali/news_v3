import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() page = 1;
  @Input() total = 10;
  @Input() pageSize!: any;
  @Output() onChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  changePage(event:any) {
    console.log(event);
    this.page = event;
    this.onChange.emit(event);
    
  }
  getPageSymbol(current: number) {
		return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
	}

  selectPage(page: string) {
    console.log(page);
    
		this.page = parseInt(page, 10) || 1;
	}

  formatInput(input: HTMLInputElement) {
    const FILTER_PAG_REGEX = /[^0-9]/g;
		input.value = input.value.replace(FILTER_PAG_REGEX, '');
	}
}
