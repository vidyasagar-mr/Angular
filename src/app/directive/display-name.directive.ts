import { Directive, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDisplayName]'
})
export class DisplayNameDirective implements OnInit{
 

 constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
 
  ngOnInit() { 
    //bad way of doing directly accessing DOM elements and changing value is not recomended
         //this.eleRef.nativeElement.style.backgroundColor='green';
  }

//bestPractise to use Renderer as below
  @HostListener('mouseover',['$event'])
  onMousingOver(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','aqua');
  }
  @HostListener('mouseout',['$event'])
  onMousingOut(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
  }

}
