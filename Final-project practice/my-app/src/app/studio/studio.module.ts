import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioFormComponent } from './studio-form/studio-form.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';
// import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    StudioComponent,
    StudioFormComponent,
    StudioListComponent,
    StudioDetailComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    // NgSelectModule
  ]
})
export class StudioModule { }
