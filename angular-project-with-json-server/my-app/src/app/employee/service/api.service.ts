import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.modal';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: string;
  public employee: Employee[];
  constructor(private http: HttpClient) {
    this.employee = [];
    this.baseUrl = "http://localhost:3000/"
  }

  public getDataById(id: number): Observable<any> {
    const url = this.baseUrl + 'employee/' + id
    return this.http.get(url);
  }

  public getData(): Observable<any> {
    const url = this.baseUrl + 'employee'
    return this.http.get(url)
  }

  public postData(employee: Employee): Observable<any> {
    const url = this.baseUrl + 'employee'
    return this.http.post(url, employee)
  }

  public DeleteData(id: number): Observable<any> {
    const url = this.baseUrl + 'employee/' + id
    return this.http.delete(url)
  }

  public UpdateData(employee: Employee, id: number): Observable<any> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.put(url, employee)
  }



}
