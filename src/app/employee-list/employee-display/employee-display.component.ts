import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent implements OnInit {

  @Input() public employee:Employee;

  @Output() employeeEvent:EventEmitter<Employee>=new EventEmitter<Employee>();
 
  isHidden:boolean=true;

   constructor() { }
 
   ngOnInit() {
   }
 
   onClickingDelete(emp:Employee):void{
     this.employeeEvent.emit(emp);
 
   }



}
