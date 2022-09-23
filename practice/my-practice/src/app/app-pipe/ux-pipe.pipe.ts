import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxPipe'
})
export class UxPipePipe implements PipeTransform {

  transform(user:any) {

    return user.substr(0,10)+ "...";
   
  }

}
