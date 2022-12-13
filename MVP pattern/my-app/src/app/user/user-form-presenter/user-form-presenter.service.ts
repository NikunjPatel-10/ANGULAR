import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserFormPresenterService {
  public add: Subject<User>
  /**
   * 
   * @param formbuilder 
   */
  constructor(private formbuilder: FormBuilder) {
    this.add = new Subject()
  }

  public formBuilder(): FormGroup {
    return this.formbuilder.group({
      id: [],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  /**
   * 
   * @param form 
   */
  public saveUser(form: FormGroup): void {
    if (form.valid) {
      let user: User = new User();
      user = form.getRawValue();
      this.add.next(user);
    }
  }
}
