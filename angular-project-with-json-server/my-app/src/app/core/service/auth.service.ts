import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuth: Subject<boolean>
  constructor() {
    this.isAuth = new Subject()
  }

  get() {
    let isAuthenticated = localStorage.getItem('isAuth')
    if (isAuthenticated === 'true') {
      return true
    } else {
      return false
    }
  }



}
