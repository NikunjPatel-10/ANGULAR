import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee.modal';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitted: boolean;
  public employee: Employee
  constructor(private formBuilder: FormBuilder, private apiservice: ApiService) {
    this.employee = Employee[];
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    })
    this.isSubmitted = false
  }

  ngOnInit(): void {
  }

  getFormValue() {
    // console.log(this.userForm.value);
    this.isSubmitted = true
    this.apiservice.postData(this.userForm.value).subscribe(res => {
      console.log(res);

    })
  }

  get userFormControl() {
    return this.userForm.controls
  }

  public GetFormData(): void {

    this.apiservice.getData().subscribe(res => {

    })
  }
}
