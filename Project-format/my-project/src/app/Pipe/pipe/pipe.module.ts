import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { FilterPipe } from './filter.pipe';
import { CustomPipePipe } from './custom-pipe.pipe';



@NgModule({
  declarations: [
    CurrencyPipePipe,
    FilterPipe,
    CustomPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CurrencyPipePipe,
    FilterPipe,
    CustomPipePipe
  ]
})
export class PipeModule { }
