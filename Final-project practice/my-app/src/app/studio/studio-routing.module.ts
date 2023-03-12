import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';
import { StudioFormComponent } from './studio-form/studio-form.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [{
  path: '', component: StudioComponent,

  children: [
    // {
    //   path: '',
    //   pathMatch: 'full',
    //   redirectTo: 'details'
    // },
    {
      path: 'form',
      component: StudioFormComponent
    },
    {
      path: 'list',
      component: StudioListComponent
    },
    {
      path: 'details',
      component: StudioDetailComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
