import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{
  path: '', component: CustomersComponent,
  children: [{ path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: CustomerListComponent },
  { path: 'edit/:id', component: CustomerFormComponent },
  { path: 'add', component: CustomerFormComponent }
  ]
},


  // {path:':item', component:CustomerFormComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
