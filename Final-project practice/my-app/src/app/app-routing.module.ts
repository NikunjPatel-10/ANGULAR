import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginFormComponent } from './core/login-form/login-form.component';
import { RegisterFormComponent } from './core/register-form/register-form.component';
import { AuthGuard } from './core/guard/auth.guard';
import { MasterComponent } from './core/master/master.component';

const routes: Routes = [
  { 
    path: '',
    component: MasterComponent,
    canActivate:[AuthGuard],

    children: [
      {
        path:'',
        pathMatch: 'full',
        redirectTo: 'carousel'
      },
      {
        path: 'carousel',
        component: CarouselComponent,
      },

      { path: 'artist', loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule) },

      { path: 'studio', loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule) }
    ]
  },
  
  {
    path: 'register-form',
    component: RegisterFormComponent
  },

  {
    path: 'login',
    component: LoginFormComponent,
 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
