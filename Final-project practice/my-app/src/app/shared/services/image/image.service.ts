import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { artist } from 'src/app/Model/artist.model';
import { Pagination, studio } from 'src/app/Model/studio.model';
import { user } from 'src/app/Model/user.model';
import { usertype } from 'src/app/Model/usertype.model';
import { image } from 'src/app/studio/studio-form/studio.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  public baseUrl: string;
  public showHeader: Subject<any>;
  public showHeader$: Observable<any>;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/"
    this.showHeader = new Subject();
    this.showHeader$ = this.showHeader.asObservable();
  }
  postImageData(data: image[]): Observable<image[]> {
    return this.http.post<image[]>("http://localhost:3000/image", data)
  }

  getImageData(): Observable<image[]> {
    return this.http.get<image[]>("http://localhost:3000/image")
  }

  /**
   * 
   * @param pageNumber 
   * @param pageSize 
   * @returns 
   */
  getStudioData(pageNumber:number, pageSize:number): Observable<studio[]> {
    const url = this.baseUrl + "studio" 
    return this.http.get<studio[]>(`${url}?_page=${pageNumber}?_limit=${pageSize}`)
  }

  getArtistData(): Observable<artist[]> {
    return this.http.get<artist[]>("http://localhost:3000/artist")
  }

  getUserData(): Observable<user[]> {
    return this.http.get<user[]>("http://localhost:3000/user");
  }

  getalluser(): Observable<usertype[]> {
    return this.http.get<usertype[]>("http://localhost:3000/userType");
  }
}
