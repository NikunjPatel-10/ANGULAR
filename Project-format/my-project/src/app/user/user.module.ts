import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactMeComponent } from './contact-us/contact-me/contact-me.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirectivesDirective } from '../Directive/custom-directives.directive';
import { CustomPipePipe } from '../Pipe/custom-pipe.pipe';
import { filter } from 'rxjs';
import { FilterPipe } from '../Pipe/filter.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent,
    ContactMeComponent,
    UserFormComponent,
    CustomDirectivesDirective,
    CustomPipePipe,
    FilterPipe,
    ReactiveFormComponent
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ReferenceComponent,
    UserFormComponent,
    CustomDirectivesDirective,
    ReactiveFormComponent
    

  ],
  providers:[
    CustomPipePipe,
    FilterPipe
  ]

})
export class UserModule { }
