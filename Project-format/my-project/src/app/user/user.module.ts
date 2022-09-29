import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactMeComponent } from './contact-us/contact-me/contact-me.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { PipeModule } from '../Pipe/pipe/pipe.module';
import { DirectiveModule } from '../Directive/directive/directive.module';
import { ApiDataComponent } from './api-data/api-data.component';
import { HttpClientModule } from '@angular/common/http';
import { OperatorsComponent } from './operators/operators.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent,
    ContactMeComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ApiDataComponent,
    OperatorsComponent,

  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    DirectiveModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent,
    UserFormComponent,
    ReactiveFormComponent,
    ApiDataComponent,
    HttpClientModule,
    OperatorsComponent
    

  ],


})
export class UserModule { }
