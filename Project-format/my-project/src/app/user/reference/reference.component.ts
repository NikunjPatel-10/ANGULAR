import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
public user:string;
public employee:any;


  constructor() {
    this.user = "How to use custom pipes with angular projects",
    this.employee = [
      {name:'tony',gender:'male', salary:'2000', birthDate:'20/1/2022'},
      {name:'riya',gender:'female', salary:'2000', birthDate:'15/3/2022'},
      {name:'jayshrii',gender:'female', salary:'2000', birthDate:'22/2/2022'},
      {name:'dipesh',gender:'male', salary:'2000', birthDate:'30/6/2022'},
      {name:'roshni',gender:'female', salary:'2000', birthDate:'18/7/2022'},
    ]
   }

  ngOnInit(): void {
  }

}
