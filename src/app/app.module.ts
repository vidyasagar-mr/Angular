import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDisplayComponent } from './employee-list/employee-display/employee-display.component';
import { DisplayNameDirective } from './directive/display-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDisplayComponent,
    DisplayNameDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
