import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss']
})
export class UserFormPresentationComponent implements OnInit {
  public userForm: FormGroup;
  public isSubmitted:boolean;
  @Output() public saveUser: EventEmitter<User>;
  @Output() public addData: EventEmitter<User>;

  /**
   * 
   * @param userFormPresenterService 
   */
  constructor(private userFormPresenterService: UserFormPresenterService) {
    this.saveUser = new EventEmitter();
    this.addData = new EventEmitter();
    this.isSubmitted = false;
    this.userForm = this.userFormPresenterService.formBuilder()
  }

  ngOnInit(): void {
    /**
     * emit data using subject
     */
    this.userFormPresenterService.add.subscribe(res=>{
      this.addData.emit(res);
    })
  }

  public onSubmit(){
    // console.log(this.userForm.value)
    if(this.isSubmitted == true){
      this.userFormPresenterService.saveUser(this.userForm)
      console.log(this.userForm.value);
      
      // this.dialogservise.close.next(true)
    }
  }

  get userFormControl(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

}
