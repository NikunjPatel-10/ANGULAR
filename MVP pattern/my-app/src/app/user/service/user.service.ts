import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
  }

  public postUser(user: User): Observable<User> {
    const url = this.baseUrl + "user"
    return this.http.post<User>(url, user)
  }

  public getUser(): Observable<User[]> {
    const url = this.baseUrl + "user"
    return this.http.get<User[]>(url)
  }
}
