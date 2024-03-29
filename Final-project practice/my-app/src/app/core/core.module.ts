import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { StudioModule } from '../studio/studio.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from './guard/auth.guard';
import { MasterComponent } from './master/master.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HeaderComponent,
    RegisterFormComponent,
    LoginFormComponent,
    DashboardComponent,
    MasterComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    OverlayModule,
    StudioModule,
    NgbModule,
    
  ],
  exports: [
  MasterComponent,HeaderComponent 
  ],
  
})
export class CoreModule { }
