import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnSale]'
})
export class SaleDirective {

  @Input() onSaleColor: string = 'red'
  @Input() onSaleText: string = 'On Sale!'
  @Input() isOnSale: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (!this.isOnSale) return;
    this.changeBackgroungColor('green');
    this.addSaleText();
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isOnSale) return;
    this.changeBackgroungColor(this.onSaleColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isOnSale) return;
    this.changeBackgroungColor('green')

  }

  changeBackgroungColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  addSaleText() {
    const saletTextElement: HTMLElement = this.renderer.createElement('span');
    saletTextElement.innerText = this.onSaleText;

    this.renderer.appendChild(this.elementRef.nativeElement, saletTextElement);
  }

}