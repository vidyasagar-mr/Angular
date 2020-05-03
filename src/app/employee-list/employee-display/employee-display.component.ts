import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {

 @Input() public employee:Employee;

 @Output() employeeEvent:EventEmitter<Employee>=new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  onClickingDelete():void{
    this.employeeEvent.emit(this.employee);

  }

}
