import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UxPipePipe } from './app-pipe/ux-pipe.pipe';
import { CustomPipeComponent } from './Shared/custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './Shared/custom-directive/custom-directive.component';
import { CustomDirective } from './directive/custom.directive';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    UxPipePipe,
    CustomPipeComponent,
    CustomDirectiveComponent,
    CustomDirective,

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
