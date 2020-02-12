import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }

@HostBinding('style.border') border:string;


@HostListener("mouseover")
onMouseOver(){
  let part=this.el.nativeElement.querySelector('.img');
  this.renderer.setStyle(part,'display','block');
this.border='5px solid red';
}

@HostListener("mouseout")
onMouseOut(){
  let part=this.el.nativeElement.querySelector('.img');
  this.renderer.setStyle(part,'display','none');
  this.border='';

}





}
