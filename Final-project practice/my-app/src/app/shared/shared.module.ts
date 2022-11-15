import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { OverlayModule } from '@angular/cdk/overlay';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OverlayModule
  ],
  exports:[
    CardComponent
  ]
})
export class SharedModule { }
