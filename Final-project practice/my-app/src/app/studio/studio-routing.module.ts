import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudioFormComponent } from './studio-form/studio-form.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioComponent } from './studio.component';

const routes: Routes = [{
  path: '', component: StudioComponent,

  children: [
    {
      path: 'form',
      component: StudioFormComponent
    },
    {
      path: 'list',
      component: StudioListComponent
    }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule { }
