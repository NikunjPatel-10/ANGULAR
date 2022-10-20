import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public isSubmitted: boolean
  constructor(private frombuilder: FormBuilder, public signupservice: SignUpService, private router: Router) {
    this.isSubmitted = false
    this.registerForm = this.frombuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  get registerFormControl() {
    return this.registerForm.controls
  }

  public registerFormData() {
    this.isSubmitted = true
    this.signupservice.PostsignupData(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.registerForm.reset()
    })
    this.router.navigate(['login'])
  }

}
