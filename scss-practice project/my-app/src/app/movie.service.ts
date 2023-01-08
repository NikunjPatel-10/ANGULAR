import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { moviemodel } from './movie/movie.modal';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }

  getData(): Observable<moviemodel[]> {
    const url = this.baseUrl + "data";
    return this.http.get<moviemodel[]>(url);
  }
}
