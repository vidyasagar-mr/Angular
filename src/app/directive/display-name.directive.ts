import { Directive, HostListener, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDisplayName]'
})
export class DisplayNameDirective implements OnInit{
 
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';

 constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
 
  ngOnInit() { 
    //bad way of doing directly accessing DOM elements and changing value is not recomended
         //this.eleRef.nativeElement.style.backgroundColor='green';
  }

//bestPractise to use Renderer as below
  @HostListener('mouseover',['$event'])
  onMousingOverUsingRenderer(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','aqua');
  }
  @HostListener('mouseout',['$event'])
  onMousingOutUsingRenderer(eventData:Event){
    this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
  }

//Using Render like above is not problem, but we can do above operation with even better way without using renderer
@HostListener('mouseover',['$event'])
onMousingOverWithoutUsingRenderer(eventData:Event){
  this.backgroundColor='aqua';
}
@HostListener('mouseout',['$event'])
onMousingOutWithoutUsingRenderer(eventData:Event){
  this.backgroundColor='transparent';
}


}
