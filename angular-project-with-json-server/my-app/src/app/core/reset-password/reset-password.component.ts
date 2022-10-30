import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { register } from '../register/register.modal';
import { SignUpService } from '../sign-up service/sign-up.service';
import { reset } from './reset-password.model';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  public id:number
  constructor(private formbuilder: FormBuilder,
    private signupservice: SignUpService) {
      this.id = 0
    this.resetForm = formbuilder.group({
      oldpassword: ['', Validators.required,],
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required],
       dataid:[]
    });
  }
  get oldPassword() { return this.resetForm.get('oldpassword') }
  get newPassword() { return this.resetForm.get('newpassword') }
  get confirmPassword() { return this.resetForm.get('confirmpasswordresetForm') }

  ngOnInit(): void {
    this.signupservice.getSignUpData()
  }

  save() {
    console.log(this.resetForm.value)
    // alert('hii')
    this.signupservice.getSignUpData().subscribe((res) => {
      const pass = res.map((p:any) => { p.password === this.resetForm.value.oldpassword })
      // console.log(pass);
      
      if (pass) {
        // console.log(pass);
        if (this.resetForm.value.newPassword === this.resetForm.value.confirmPassword) {
          let findId = res.map((p:any) => { p.id === this.resetForm.value.dataid })
          console.log(findId);
          
          if(findId){
            this.signupservice.updateSignUpData(this.resetForm.value,Number(this.id)).subscribe(res=>{
              // console.log(res);
              alert("change successfully")
            })
          }
        }
      } else {

      }
    })
  }

}
