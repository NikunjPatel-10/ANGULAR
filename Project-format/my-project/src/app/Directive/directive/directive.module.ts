import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectivesDirective } from './custom-directives.directive';



@NgModule({
  declarations: [
    CustomDirectivesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDirectivesDirective
  ]
})
export class DirectiveModule { }
