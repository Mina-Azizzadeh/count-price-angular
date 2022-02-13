import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
 
  max: number = 999999999999999;
  @Input() quantity: number = 2;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() onTrashClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  trash() {
    this.quantity = 1;
    this.quantityChange.emit(this.quantity);
    this.onTrashClicked.emit();
  }
}
