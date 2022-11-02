import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public registerForm: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      phonenumber: [''],
      state: [''],
      city: [''],
      usertype: [''],
      filepath: ['']
    })
  }

  ngOnInit(): void {
  }

  registerData() {
    console.log(this.registerForm.value);

  }

}
