import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { StudioFormComponent } from './studio-form/studio-form.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudioComponent,
    StudioFormComponent,
    StudioListComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class StudioModule { }
