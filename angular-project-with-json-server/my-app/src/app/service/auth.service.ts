import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserlogin: Subject<boolean>
  constructor(public router: Router) {
    this.isUserlogin = new Subject()
  }

  isLoggedIn() {
    let isAuthenticated = localStorage.getItem('isAuth')
    if (isAuthenticated) {
      this.isUserlogin.next(true)
      return true
    } else {
      this.isUserlogin.next(false)
      return false
    }
  }


}
