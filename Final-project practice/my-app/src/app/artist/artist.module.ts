import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistListComponent } from './artist-list/artist-list.component';


@NgModule({
  declarations: [
    ArtistComponent,
    ArtistFormComponent,
    ArtistListComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ]
})
export class ArtistModule { }
