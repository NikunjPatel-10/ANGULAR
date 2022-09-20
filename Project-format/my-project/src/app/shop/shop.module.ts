import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopListComponent } from './shop-list/shop-list.component';


@NgModule({
  declarations: [
    ShopComponent,
    ShopItemComponent,
    ShopListComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  exports:[
    ShopItemComponent,
    ShopListComponent
  ]
})
export class ShopModule { }
