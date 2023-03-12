import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public userDetail: any;
  constructor(private formBuilder: FormBuilder, private _apiService: ApiService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    // this.userLogin( )
  }

  /**
   * for user login details
   */
  public userLogin() {
    this._apiService.getRegisterData().subscribe(res => {
      this.userDetail = res.find((a: any) => {

        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
    })

    if (this.userDetail) {
      localStorage.setItem('isAuth', 'true');
      this.loginForm.reset();
      this.router.navigate(['carousel'])
    }
    else{
      alert("please enter the right creadentials")
    }
   
    
  }
}