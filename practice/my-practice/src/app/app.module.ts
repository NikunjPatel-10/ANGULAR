import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { UxPipePipe } from './app-pipe/ux-pipe.pipe';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    UxPipePipe,
    CustomPipesComponent
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
