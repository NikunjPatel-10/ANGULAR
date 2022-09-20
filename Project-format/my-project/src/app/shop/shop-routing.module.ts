import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [{ path: '', component: ShopComponent ,

children:[
  {
  path:'shop-item',
  component: ShopItemComponent
  },
  {
    path:'shop-list',
    component: ShopListComponent
  }

],


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
