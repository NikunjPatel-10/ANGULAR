import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  public isAuth: boolean
  constructor(private authService: AuthService) {
    this.isAuth = false
  }
  ngOnInit(): void {
    this.authService.isUserlogin.subscribe((res) => {
      this.isAuth = res
    })

  }

}
