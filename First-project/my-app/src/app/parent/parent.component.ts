import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public myInputmessage: string = "i am parent";
 user =['angular','react','vue']
  constructor() { }

  ngOnInit(): void {
  }
  
  GetChildData(data:string) {
    // alert("hii")
    this.user.push(data);
  }

}
