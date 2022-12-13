import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public addUser(data:any) {
    this.userService.postUser(data).subscribe(res=>{
      console.log(res);
    })
  }
}
