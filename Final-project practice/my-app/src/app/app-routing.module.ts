import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { RegisterFormComponent } from './core/register-form/register-form.component';

const routes: Routes = [

  {
    path: 'register-form',
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },

  { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
