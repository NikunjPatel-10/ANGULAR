import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList:Employee[]

  constructor() {
  this.employeeList = []
  }

  ngOnInit(): void {
  }

}
