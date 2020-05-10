import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent{
  //No need of @Input as we are using Angular Content projection using ng-content
   private employee:Employee;

  @Output() employeeEvent:EventEmitter<Employee>=new EventEmitter<Employee>();
 
 
   onClickingDelete():void{
     this.employeeEvent.emit(this.employee);
   }

   



}
