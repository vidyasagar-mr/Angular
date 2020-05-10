import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //CREATING CUSTOM STRUCTURAL DIRECTIVE
  //THis custom directive is same as *ngIf


  //TemplateRef,just like ElementRef gave access to element in the template. TemplateRef gives access to template.
  //templateRef is what to render and ViewContainer is where to render
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }


  //get input condition from outside in template element in which this diretive is used and implement the logic to perform for this directive
  //make sure selctor and input preperty share same name.since *appUnless will be transformed 
  //by angular into property binding in <ng-template [appUnless]>..</ng-template>
  @Input() set appUnless(inputCondition: boolean) {
    if (inputCondition) {
      // below line creates the view(in our case view is templateRef) in the ViewContainer
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      //destroy all the view in the container
      this.vcRef.clear();
    }






  }

}
