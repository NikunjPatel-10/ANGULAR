import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getCarouselData() {
    return this.http.get("http://localhost:3000/carosuel")
  }

  getArtistData() {
    return this.http.get("http://localhost:3000/artist")
  }

}
