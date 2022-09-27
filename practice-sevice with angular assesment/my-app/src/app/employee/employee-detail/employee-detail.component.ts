import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { employee } from '../employee.modal';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public Employee: employee
  public id: any;
  constructor(private activatedroute: ActivatedRoute, private api: ApiService) {
    this.Employee = new employee();
    // this.id = '';
    this.activatedroute.params.subscribe(params => {
      this.id = params['id'];
      this.getDetails();
    })
  }

  ngOnInit(): void {
    // this.displaydata = this.route.snapshot.queryParams
    // console.log(this.route.snapshot.queryParams);

  }

  getDetails() {
    this.api.GetDataById(this.id).subscribe((employee: employee) => {
      this.Employee = employee;
    })
  }

}
