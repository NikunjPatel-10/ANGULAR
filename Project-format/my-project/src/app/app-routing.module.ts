import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './user/about/about.component';
import { ApiDataComponent } from './user/api-data/api-data.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomeComponent } from './user/home/home.component';
import { ReactiveFormComponent } from './user/reactive-form/reactive-form.component';
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

  {
    path:'reactive-form',
    component:ReactiveFormComponent
  },
  {
path:'api-data',
component:ApiDataComponent
  },
  
  
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
  
  
  
},
 
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
{ path: '**', component: PageNotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
