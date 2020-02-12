import { Component, OnInit, ViewChild } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { SharedService } from 'src/common/shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

@ViewChild(TwoComponent) two:TwoComponent;


  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.sharedService.addData(new Date()),
      1000;
    });
  }

  invoke(){
this.two.doTask();
  }

}
