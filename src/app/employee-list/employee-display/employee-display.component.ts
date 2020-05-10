import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html'
})
export class EmployeeDisplayComponent {



  @Output() employeeEvent: EventEmitter<Employee> = new EventEmitter<Employee>();

  //To Track Changes in input property

  //1. using ngOnchanges
  // @Input() public employee:Employee;

  // ngOnChanges(changes: SimpleChanges): void {
  //    console.log(changes.employee.previousValue);
  //    console.log(changes.employee.currentValue);
  //    console.log(changes.employee.firstChange);
  //    console.log(changes.employee.isFirstChange);
  //  }


  //2. using property setter
  private _employee: Employee;

  @Input() set employee(emp: Employee) {
    this._employee = emp;
  }

  get employee(): Employee {
    return this._employee;
  }

  onClickingDelete(): void {
    this.employeeEvent.emit(this.employee);
  }





}
