import { Directive, HostListener, Renderer2, ElementRef, OnInit, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorDisplay]'
})
export class ColorDisplayDirective implements OnInit{
//CREATING CUSTOM ATTRIBUTE DIRECTIVE
 constructor(private eleRef:ElementRef,private renderer:Renderer2) { }
 
  ngOnInit() { 
    //below line is bad way of doing directly accessing DOM elements and changing value is not recomended
         this.eleRef.nativeElement.style.backgroundColor='green';
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

@HostBinding('style.backgroundColor') backgroundColor:string='transparent';

@HostListener('mouseover',['$event'])
onMousingOverWithoutUsingRenderer(eventData:Event){
  this.backgroundColor='aqua';
}
@HostListener('mouseout',['$event'])
onMousingOutWithoutUsingRenderer(eventData:Event){
  this.backgroundColor='transparent';
}

//Binding custom directive properties from outside 

@Input() defaultColor:string;
@Input() highlightedColor:string;
@HostBinding('style.backgroundColor') backgrndColor:string;

@HostListener('mouseover',['$event'])
onMousingOverUsingDirectiveProerty(eventData:Event){
  this.backgrndColor=this.highlightedColor;
}
@HostListener('mouseout',['$event'])
onMousingOutUsingDirectiveProerty(eventData:Event){
  this.backgrndColor=this.defaultColor;
}

}
