import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
public default_size = 100;
  public fontsize: number;
plus:any
  constructor() {
    this.fontsize = this.default_size;
    this.plus='+'
  }

  ngOnInit(): void {

  }
  getvalue(type: string) {

    this.fontsize = (type == 'increase') ? this.fontsize + 10 : this.fontsize - 10;

    if (this.fontsize == 200){
     this.fontsize = this.default_size;
    }
    if(this.fontsize == 0){
      
      this.fontsize = this.default_size;
    }
    
  }
  reset(){

  }

}
