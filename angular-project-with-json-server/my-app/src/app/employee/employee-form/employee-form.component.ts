import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.modal';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public userForm: FormGroup;
  public title: string
  public isSubmitted: boolean;
  public employee: Employee[]
  public id: any
  constructor(private formBuilder: FormBuilder, private apiservice: ApiService,
    public activatedroute: ActivatedRoute, public router: Router) {
    this.employee = [];
    this.isSubmitted = false,
      this.title = ''
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      DOB: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    })

    this.activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      this.getEmployeeIdData(this.id)
    })




  }

  ngOnInit(): void {
    this.title = (this.id) ? "Edit Employeee" : "Add employee"
    this.GetFormData();
  }


  getFormValue() {

    if (this.id) {
      this.UpdateValue();
    }
    else {
      // console.log(this.userForm.value);
      this.isSubmitted = true
      if (this.userForm.valid) {
        this.isSubmitted = false
        this.apiservice.postData(this.userForm.value).subscribe(res => {
          this.GetFormData();
          this.userForm.reset()

        })
      }
    }

  }

  get userFormControl() {
    return this.userForm.controls
  }

  public getEmployeeIdData(employeeId: number): void {
    this.apiservice.getDataById(employeeId).subscribe(employee => {
      this.userForm.patchValue(employee);
    })
  }

  public UpdateValue(): void {
    this.apiservice.UpdateData(this.userForm.value, this.id).subscribe(res => {
      this.GetFormData();
    })
  }

  public CancelButton(): void {
    this.router.navigate(['employee/add'])
  }

  public GetFormData(): void {
    this.apiservice.getData().subscribe(res => {
      // console.log(res);
      this.employee = res;
    })
  }
}
