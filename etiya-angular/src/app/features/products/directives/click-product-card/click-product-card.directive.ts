import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickProductCard]'
})
export class ClickProductCardDirective {
  @Input() inOnClick: boolean = false;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onClick(){
    if(!this.inOnClick) {
      this.inOnClick=true;
      this.elementRef.nativeElement.style.opacity = 0.7;
    }

    else if (this.inOnClick){
      this.inOnClick=false;
      this.elementRef.nativeElement.style.opacity = 1;
    }
  }}
