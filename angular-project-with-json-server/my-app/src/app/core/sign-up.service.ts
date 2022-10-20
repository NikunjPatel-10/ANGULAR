import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  public baseurl: string
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/"
  }

  public PostsignupData(signup: any): Observable<any> {
    const url = this.baseurl + 'signup'
    return this.http.post(url, signup)
  }

  public getSignUpData(): Observable<any> {
    const url = this.baseurl + 'signup';
    return this.http.get(url)
  }
}
