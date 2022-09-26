import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { employee } from '../employee.modal';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  public userForm: FormGroup
  public isSubmitted: boolean;
  public employeeData: employee[];
  public id: any
  public showbtn: boolean;
  title: string
  // public Getdata: any
  constructor(private formbuilder: FormBuilder, private router: Router, private api: ApiService, private activated: ActivatedRoute) {
    this.isSubmitted = false;
    this.employeeData = [];
    this.showbtn = true;
    this.title = ''
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      DOB: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      id: ['']

    })


    // this.getApiData();
    this.activated.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.GetEmployeebyId();
      }
    })

  }

  ngOnInit(): void {
    this.getApiData()
    this.title = this.id ? 'Edit employee' : 'Add employee'
  }
  get userFormControl() {
    return this.userForm.controls;
  }

  public getFormData(): void {
    this.isSubmitted = true;

    if (this.userForm.valid) {
      this.isSubmitted = false;

      if (this.id) {
        this.GetEditValue();

      }
      else {
    
        this.api.PostData(this.userForm.value).subscribe(res => {
          console.log(res);
          this.getApiData();
          this.userForm.reset();
        })

      }
    }

  }

  public GetEditValue(): void {
    // this.userForm.patchValue(editdata);
    // console.log(editdata);
    this.api.UpdateData(this.userForm.value, this.id).subscribe(res => {
      this.getApiData();
    })

  }


  public GetEmployeebyId(): void {
    this.api.GetDataById(this.id).subscribe((employee: employee) => {
      this.userForm.patchValue(employee);
    })
  }


  // public reset(): void {

  //   this.userForm.reset();
  //   // this.userForm.clearValidators();
  //   this.isSubmitted = false;
  //   this.showbtn = true;

  // }

  public getApiData(): void {
    this.api.GetData().subscribe((employee: employee[]) => {
      console.log(employee);
      this.employeeData = employee;
    })
  }

  public CancelData(): void {
    this.router.navigate(['employee'])
  }

}
