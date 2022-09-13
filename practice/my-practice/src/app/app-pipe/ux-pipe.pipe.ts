import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxPipe'
})
export class UxPipePipe implements PipeTransform {

  transform(value:any,limit:number) {

    if(value.length > limit){
       return value.substr(0,10) + '...' 
    }
    else{
      return value;
    }

   
  }

}
