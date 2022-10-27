import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public isAuth: string
  constructor(private authService: AuthService,
    private router: Router) {
    this.isAuth = ''
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAuth = this.authService.isLoggedIn()
    if (isAuth) {
      return true
    } else {
      this.router.navigate(['login'])
      return false
    }
  }

}
