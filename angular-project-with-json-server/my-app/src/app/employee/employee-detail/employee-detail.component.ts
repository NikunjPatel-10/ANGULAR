import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.modal';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public id: any;
  public employee: Employee[]
  employeeList: any;
  constructor(public activatedroute: ActivatedRoute, public apiservice: ApiService) {
    this.employee = []

    this.activatedroute.params.subscribe(params => {
      this.id = params['id']
      this.getEmployeeIdData(this.id);
    })
  }

  ngOnInit(): void {
  }

  public getEmployeeIdData(employeeId: number): void {
    this.apiservice.getDataById(employeeId).subscribe((employee) => {
      this.employeeList = employee
    })
  }
}
