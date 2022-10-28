import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from '../register/register.modal';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  public baseurl: string
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/"
  }

  public PostsignupData(signup: any): Observable<register> {
    const url = this.baseurl + 'signup'
    return this.http.post<register>(url, signup)
  }

  public getSignUpData(): Observable<register[]> {
    const url = this.baseurl + 'signup';
    return this.http.get<register[]>(url)
  }
}
