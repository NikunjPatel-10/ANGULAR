import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customer: any
  constructor(private activateroute: ActivatedRoute ) {
    this.customer = [{
      id:1,
      name: 'nikunj',
      email: 'nikunj123@gmail.com'
    },
    { id:2,
      name: 'parth',
      email:'parth34@gmail.com'
    }
    ]
  }

  ngOnInit(): void {
  }

}
