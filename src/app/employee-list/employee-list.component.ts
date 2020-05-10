import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit{


  constructor() { }

  ngOnInit() {
  }
  employee_repo:Employee[]=[{id:123,name:'Nikhil',age:26,photoPath:'https://filmfare.wwmindia.com/content/2020/feb/hrithikroshan41582899194.jpg'},
  {id:124,name:'Mohan',age:27,photoPath:'https://filmfare.wwmindia.com/content/2020/feb/hrithikroshan41582899194.jpg'}];

  onDeleting(emp_delete:Employee):void{
  let emp_Index:number= this.employee_repo.indexOf(emp_delete);
  if (emp_Index > -1) {
  this.employee_repo.splice(emp_Index,1)
  }
  }

}
