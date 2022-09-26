import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseurl: string;
  constructor(private http: HttpClient) {
    this.baseurl = "http://localhost:3000/"
  }

  GetDataById(id:number): Observable<any>{
    const geturl:string = this.baseurl + "employee/" + id ;
    return this.http.get(geturl)
  }

  GetData(): Observable<any> {
    const geturl: string = this.baseurl + "employee";
    return this.http.get(geturl)
  }

  PostData(data: any): Observable<any> {
    const geturl: string = this.baseurl + "employee"
    return this.http.post(geturl, data)
  }
  DeleteData(id: number): Observable<any> {
    const geturl: string = this.baseurl + "employee/" + id;
    return this.http.delete(geturl)
  }

  UpdateData(data: any, id: number) :Observable<any>{
    const geturl: string = this.baseurl + "employee/" + id;
    return this.http.put(geturl, data);
  }

}
