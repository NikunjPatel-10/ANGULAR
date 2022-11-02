import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { image } from 'src/app/image-upload/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http: HttpClient) { }


  postImageData(data: image) {
    return this.http.post("http://localhost:3000/image", data)
  }

  getImageData() {
    return this.http.get("http://localhost:3000/image")
  }
}
