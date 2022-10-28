import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../sign-up service/sign-up.service';
// import { PasswordValidators } from './password.validators';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private passwordS: SignUpService) {
    this.resetForm = formbuilder.group({
      oldpassword: ['', Validators.required,],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required],

    });
  }
  get oldPassword() { return this.resetForm.get('oldpassword') }
  get newPassword() { return this.resetForm.get('newpassword') }
  get confirmPassword() { return this.resetForm.get('confirmpasswordresetForm') }

  ngOnInit(): void {
  }
  save() {
    this.passwordS.getSignUpData().subscribe((res) => {
      let pass = res.find((p) => { p.password === this.resetForm.value.oldpassword })
      if (pass) {
        console.log(pass);
        if (this.resetForm.value.newPassword === this.resetForm.value.confirmPassword) {

        }
      } else {

      }
    })
  }

}
