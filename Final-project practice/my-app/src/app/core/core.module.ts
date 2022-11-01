import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    RegisterFormComponent,

    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent,
  ]
})
export class CoreModule { }
