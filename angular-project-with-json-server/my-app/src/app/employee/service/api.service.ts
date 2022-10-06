import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = "http://localhost:3000/"
  }

  public getData(): Observable<any> {
    const url = this.baseUrl
    return this.http.get(url)
  }

  public postData(employee: Employee): Observable<any> {
    const url = this.baseUrl + 'employee'
    return this.http.post(url, employee)
  }



}
