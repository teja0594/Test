import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[ngKolor]'
})
export class NgKolorDirective {

  @HostBinding('style.color')color:String
  @HostBinding('style.backgroundColor')bgcolor:String
  constructor() {
    this.color='black'
    this.bgcolor="rgba(255, 255, 255, 0)"
   }
   @HostListener('mouseover') onMouseOver()
   {
    this.color='brown'
     this.bgcolor="rgb(255, 223, 223)"

   }
   @HostListener('mouseleave') onMouseLeave()
   {
    this.color='black'
    this.bgcolor="rgba(255, 255, 255, 0)"
   }

}
