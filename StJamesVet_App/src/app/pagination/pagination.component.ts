import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  page: number;

  @Input()
  pages: [];

  @Output()
  pageSelected: EventEmitter<number> = new EventEmitter();

  setPage(i, event: any) {
    event.preventDefault();
    this.pageSelected.emit(i);
  }
}
