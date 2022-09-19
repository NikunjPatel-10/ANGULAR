import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  title:string
  id:any

  constructor(private route: Router, private activated:ActivatedRoute) { 
  this.title='add customer'
  }

  ngOnInit(): void {
// console.log(this.activated);
this.id=this.activated.snapshot.params['id']
// this.id = this.route.navigate([], {
//   relativeTo:this.activated,
//   queryParams:{name:'nikunj'},
//   queryParamsHandling:'merge',
// })
console.log(this.id);
this.title = (this.id) ? 'edit customer' : 'add customer';


    
  }
  getpage(){
this.route.navigate(['customers'])
  }
  

}
