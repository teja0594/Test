import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class NgColorDirective {

  @HostBinding('style.color')color:String
  @HostBinding('style.backgroundColor')bgcolor:String
  constructor() {
    this.color='black'
    this.bgcolor="rgba(255, 255, 255, 0)"
   }
   @HostListener('mouseover') onMouseOver()
   {
    this.color='blue'
     this.bgcolor="rgb(202, 235, 255)"

   }
   @HostListener('mouseleave') onMouseLeave()
   {
    this.color='black'
     this.bgcolor="rgba(255, 255, 255, 0)"
   }

}
