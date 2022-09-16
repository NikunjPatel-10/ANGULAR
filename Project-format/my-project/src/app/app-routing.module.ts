import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './user/about/about.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomeComponent } from './user/home/home.component';
import { ReferenceComponent } from './user/reference/reference.component';
import { UserFormComponent } from './user/user-form/user-form.component';



const routes: Routes = [
 
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'home'
  },
 
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'reference',
    component:ReferenceComponent
  },
  {
    path:'user-form',
    component:UserFormComponent

  },
  
  
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  
  
  
},
{ path: '**', component: PageNotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
