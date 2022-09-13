import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrls: ['./custom-pipes.component.scss']
})
export class CustomPipesComponent implements OnInit {
  value:string;
  nameArr=[
    'nikunj patel',
    'parth patel',
    'dhruv patel',
    'kiranj patel',
    'jay patel',
    'nik',

  ]
  constructor() {
    this.value= "This is nikunj patel"
   }

  ngOnInit(): void {
  }

}
