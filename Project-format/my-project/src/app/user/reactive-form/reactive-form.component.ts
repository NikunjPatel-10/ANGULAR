import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.userForm = new FormGroup({

    })
  }

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      contactnumber: ['']
    })
  }

getformData(){
  this.userForm.value;
  console.log(this.userForm);
}
}
