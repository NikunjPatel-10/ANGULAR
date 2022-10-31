import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.scss']
})
export class RegisterFromComponent implements OnInit {
  public registerForm: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.registerForm = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      password: [''],
      mobilenumber: [''],

    })
  }

  ngOnInit(): void {
  }

}
