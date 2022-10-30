import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoredModule } from './cored/cored.module';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFromComponent } from './register-from/register-from.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RegisterFromComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoredModule,
    SharedModule,
    CustomersModule,
    UserModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
