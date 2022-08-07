import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  links: any[] = [
    { label: 'Home', url: '/home' },
    { label: 'Add Product', url: '/add-product' },
    { label: 'Product List', url: '/product-list' },
  ];
  links1: string[] = ['Home', 'Add Product', 'Product List'];
  ngOnInit(): void {
    this.counter += 5;
  }
  counter: number = 0;

  increase(count: number = 1) {
    this.counter += count;
  }

  get Counter() {
    return (
      this.counter.toString() + (this.counter < 5 ? ' Çok az' : ' Çok fazla')
    );
  }
  getProduct(){
    
  }
}