import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickProducts]'
})
export class ClickProductsDirective {
  
  constructor(private elementRef:ElementRef) { }

  @HostListener('click',) onClick(){
    this.elementRef.nativeElement.style.opacity = 0.7;
  }

  @HostListener('dblclick',) onDblClick(){
    this.elementRef.nativeElement.style.opacity = 1;
  }
}
