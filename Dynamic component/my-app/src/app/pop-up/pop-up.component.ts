import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})

export class PopUpComponent implements OnInit {
  public userForm: FormGroup
  data: String = ''
  constructor(private formbuilder: FormBuilder,) {
    this.userForm = this.formbuilder.group({

      name: [''],
      address: [''],
      age: [''],
      birthdate: ['']


    })
  }

  ngOnInit(): void {
  }

  getForm() {
    console.log(this.userForm.value);
    this.data = this.userForm.value

  }
}
