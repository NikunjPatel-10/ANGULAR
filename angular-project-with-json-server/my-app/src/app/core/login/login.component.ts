import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmitted: boolean
  constructor(private formbuilder: FormBuilder, private router: Router, private signupservice: SignUpService, private authService: AuthService) {
    this.isSubmitted = false
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  ngOnInit(): void {

  }

  get loginFormControl() {
    return this.loginForm.controls
  }

  userLogin() {
    this.signupservice.getSignUpData().subscribe(res => {

      const user = res.find((info: any) => ((info.username === this.loginForm.value.username) && (info.password === this.loginForm.value.password)));
      if (user) {
        alert("login successfully")
        localStorage.setItem('isAuth', 'true')
        this.router.navigate(['master'])
      }
      else {
        alert("error from the server side")
      }
    })

  }


}
