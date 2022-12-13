import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormContainerComponent } from './user/user-form-container/user-form-container.component';
import { UserFormPresenterComponent } from './user/user-form-presenter/user-form-presenter.component';
import { UserFormPresentationComponent } from './user/user-form-presentation/user-form-presentation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    UserFormContainerComponent,
    UserFormPresenterComponent,
    UserFormPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
