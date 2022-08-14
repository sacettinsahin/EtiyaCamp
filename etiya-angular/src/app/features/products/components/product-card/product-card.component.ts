import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/features/products/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() onBtnClick = new EventEmitter();
  onMouseColor: string = 'blue';
  isCard: boolean = true;
  onSaleText: string = 'İndirim!!!';

  constructor() { }

  ngOnInit(): void { }

  addToCartEvent() {
    this.onBtnClick.emit(this.product);
  }
}