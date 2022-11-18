import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { artist } from 'src/app/Model/artist.model';
import { studio } from 'src/app/Model/studio.model';
import { image } from 'src/app/studio/studio-form/studio.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }
  postImageData(data: image[]): Observable<image[]> {
    return this.http.post<image[]>("http://localhost:3000/image", data)
  }

  getImageData(): Observable<image[]> {
    return this.http.get<image[]>("http://localhost:3000/image")
  }

  getStudioData(): Observable<studio[]> {
    return this.http.get<studio[]>("http://localhost:3000/studio")
  }

  getArtistData(): Observable<artist[]> {
    return this.http.get<artist[]>("http://localhost:3000/artist")
  }

}
