import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public newarr = ['nikunj', 'parth']
  public child: string[];
  public newchild = ['abc', 'efg']
  constructor() {
    this.child = [];
   
  }
  ngOnInit(): void {
  }


  getchild(data: string) {
   this.newchild.push(data);
  }
  getValue(data: string) {
    this.newarr.push(data);
    // console.log(data)
  }

}
