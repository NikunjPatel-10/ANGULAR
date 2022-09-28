import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitted: boolean;
  public employeemodelObj: any;
  public FormData: any;

  constructor(private formbuilder: FormBuilder, private api: ApiServiceService) {
    this.employeemodelObj = [],
      this.isSubmitted = false
    this.userForm = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      lastname: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      username: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      city: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    
    this.GetApiData();
  }
  get userFormControl() {
    return this.userForm.controls;
  }

  getFormData() {
    console.log(this.userForm);
    
    // this.isSubmitted = true;
    // this.userForm.value;
    // console.log(this.userForm);
    // this.userForm.reset();
    // this.employeemodelObj.push(
    //   {
    //     firstname: this.userForm.value.firstname,
    //     lastname: this.userForm.value.lastname,
    //     username: this.userForm.value.username,
    //     city: this.userForm.value.city,
    //     state: this.userForm.value.state,
    //     zip: this.userForm.value.zip

    //   }
    // )
    this.api.postdata(this.userForm.value).subscribe(res => {
      // console.log(res);
      alert("data added successfully");
      this.userForm.reset();
    },
      err => {
        alert("somthing went wrong from server side")
      });
      this.GetApiData();
  }

  public GetApiData(): void {
    this.api.getdata().subscribe(res => {
      this.FormData = res;
      console.log(this.FormData);
      
    })
  }
}
