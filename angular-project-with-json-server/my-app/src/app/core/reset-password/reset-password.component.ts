import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup
  constructor(private formbuilder: FormBuilder) {
    this.resetForm = formbuilder.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }
  get oldPassword() { return this.resetForm.get('oldpassword') }
  get newPassword() { return this.resetForm.get('newpassword') }
  get confirmPassword() { return this.resetForm.get('confirmpasswordresetForm') }

  ngOnInit(): void {
  }

}
