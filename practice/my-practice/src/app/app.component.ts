import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-practice';
  color = 'red';
  public user = ['HTML','CSS','Javascript','bootstrap'];
  get:boolean= false;

  getValue(){
    this.get= true;
  }

  

}
