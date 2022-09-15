import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  title:string
  constructor(private activeroute:ActivatedRoute) { 
  this.title='add customer'

  }

  ngOnInit(): void {
console.log(this.activeroute);

    
  }

}
