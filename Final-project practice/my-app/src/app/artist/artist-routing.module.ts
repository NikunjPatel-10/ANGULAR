import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistComponent } from './artist.component';

const routes: Routes = [{
  path: '', component: ArtistComponent,

  children: [
    // {
    //   path: '',
    //   pathMatch: 'full',
    //   redirectTo: 'list'
    // },
    {
      path: 'form',
      component: ArtistFormComponent
    },
    {
      path: 'list',
      component: ArtistListComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
