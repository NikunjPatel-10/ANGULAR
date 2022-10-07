import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustompipePipe } from './pipe/custompipe.pipe';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    CustompipePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeModule { }
