import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public isSubmitted: boolean
  public registerForm: FormGroup

  /**
   * 
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder, private _apiService:ApiService) {
    this.isSubmitted = false
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3), Validators.maxLength(25)]],
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

  get registerFormControl() {
    return this.registerForm.controls
  }

  /**
   * 
   */
  public registerData() {
   this._apiService.postRegisterData(this.registerForm.value).subscribe(res=>{
    console.log(res);  
   })
  }

}
