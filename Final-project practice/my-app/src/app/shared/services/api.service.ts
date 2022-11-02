import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  postRegisterData(data: any) {
    const url = this.baseurl + "register"
    return this.http.post(url, data)
  }

  getRegisterData() {
    const url = this.baseurl + "register"
    return this.http.get(url)
  }

}
