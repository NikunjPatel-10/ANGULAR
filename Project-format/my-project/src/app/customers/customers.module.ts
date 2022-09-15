import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';


@NgModule({
  declarations: [
    CustomersComponent,
   
    CustomerListComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  exports:[
    CustomersComponent
  ]
})
export class CustomersModule { }
