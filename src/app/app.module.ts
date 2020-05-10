import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDisplayComponent } from './employee-list/employee-display/employee-display.component';
import { ColorDisplayDirective } from './directive/color-display.directive';
import { UnlessDirective } from './directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDisplayComponent,
    ColorDisplayDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
