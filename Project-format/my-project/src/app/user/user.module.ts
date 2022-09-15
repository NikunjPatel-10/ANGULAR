import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReferenceComponent } from './reference/reference.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent
  ]
})
export class UserModule { }
