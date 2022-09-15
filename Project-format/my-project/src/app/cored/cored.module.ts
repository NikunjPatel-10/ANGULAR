import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserModule } from '../user/user.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent
  ]
})
export class CoredModule { }
