import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]'
})
export class CustomDirectivesDirective {

  constructor(private el:ElementRef) { }
ngOnInit(){
this.el.nativeElement.style.color="blue";
this.el.nativeElement.style.fontSize = "50px";
}
}
