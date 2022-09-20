import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitted: boolean;
  
 

  constructor(private formbuilder: FormBuilder) {
    
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

  }
  get userFormControl() {
    return this.userForm.controls;
  }

  getFormData() {
    this.isSubmitted = true;
    this.userForm.value;
    console.log(this.userForm);
    this.userForm.reset();

  }
}
