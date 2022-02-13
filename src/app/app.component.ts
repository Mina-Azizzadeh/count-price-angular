import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  [x: string]: any;

  @Input()  price:number = 100000

  priceStyle = '';
  onQuantityChanged = new EventEmitter<number>()
  @Input() quantity: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.quantityChanged(this.quantity);
  }

  quantityChanged(price: any) {
    const pricChange = price * this.price;
    this.priceStyle = new Intl.NumberFormat().format(pricChange)
    this.onQuantityChanged.emit(pricChange);
  }
  onTrashClicked(price: any) {
    this.onQuantityChanged.emit(price);
  }
}
