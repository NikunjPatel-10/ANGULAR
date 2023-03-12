import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/core/register-form/register.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  postRegisterData(data: Register): Observable<Register> {
    const url = this.baseurl + "register"
    return this.http.post<Register>(url, data)
  }

  postLoginData(data: any): Observable<any> {
    const url = this.baseurl + "login"
    return this.http.post<any>(url, data)
  }

  getRegisterData(): Observable<Register[]> {
    const url = this.baseurl + "register"
    return this.http.get<Register[]>(url)
  }

  getStateData() {
    const url = this.baseurl + "State"
    return this.http.get(url)
  }

  getCityData() {
    const url = this.baseurl + "Cities"
    return this.http.get(url)
  }

  getjsonData(pageNumber: number, pageSize: number) {
    const url = this.baseurl + "posts"
    return this.http.get(`${url}?_page=${pageNumber}&_limit=${pageSize}`)

  }






}
