import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngIfNot]'
})
export class IfNotDirective {
  @Input('ngIfNotElse') elseTemplateRef!: TemplateRef<any>;

  private hasView:boolean = false;

  constructor(private viewContainerRef:ViewContainerRef, //directive uyguladığımız element
    private templateRef:TemplateRef<any> //directive uyguladığımız elemntin içindeki 
    ) { }

  @Input() set ngIfNot(condition:boolean){
    console.log(condition,this.hasView)
    if(condition === false && !this.hasView){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }else if(condition === true && this.hasView){
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.elseTemplateRef);
      this.hasView =false;
    }
}}