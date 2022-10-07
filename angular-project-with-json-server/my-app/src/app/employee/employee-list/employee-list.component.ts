import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.modal';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: Employee[]


  constructor(public apiservice: ApiService, private router: Router) {
    this.employeeList = []
  }

  ngOnInit(): void {
    // this.GetFormData();
  }

  public DeleteEmployee(employeeId: number): void {
    this.apiservice.DeleteData(employeeId).subscribe(res => {
      this.GetFormData();
    })

  }

  public EditEmployee(employeeId: number): void {
    this.router.navigate(['employee/edit', employeeId])
  }

  public employeeDetail(employeeId: number): void {
    this.router.navigate(['employee/detail', employeeId])
  }

  public GetFormData(): void {
    this.apiservice.getData().subscribe(res => {
      this.employeeList = res
    })
  }
}
