import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/common/Customer';
import { DataService } from 'src/common/data.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 customers:Customer[]=[];
 mainCustomers:Customer[]=[];
 searchTest:string="";
 mode:string='card';
  constructor(private dataService:DataService) { }

  ngOnInit() {

this.dataService.getCustomers().subscribe(data=>{
  this.customers=this.mainCustomers=data;
});
  }

  removeCustomer(id:number){
  this.customers=this.mainCustomers=this.mainCustomers.filter(c=>c.id!==id);
  this.searchTest='';
this.dataService.deleteCustomer(id).subscribe(data=>{
  console.log("deleted !!");
});
  }

  filterCustomers(){
  this.customers=this.mainCustomers.filter(
c=>{

return (c.firstName.toUpperCase().indexOf(this.searchTest.toUpperCase())>=0) || 
(c.lastName.toUpperCase().indexOf(this.searchTest.toUpperCase())>=0)
} );
  }


}
