import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective implements OnInit{
  @Input() onSaleColor: string = 'yellow';
  @Input() onSaleText:string = 'On Sale' ;

  constructor(private elementRef: ElementRef, private renderer:Renderer2) { 

  }

  ngOnInit(): void {
    this.changeBackgroundColor('green');
    
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.onSaleColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeBackgroundColor('green');
  }

  changeBackgroundColor(color:string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  addSalesTexT(){
  }
}
