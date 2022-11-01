import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageUploadService } from '../services/image-upload/imageservice';
import { image } from './image.model';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  public imageFile!: File;
  public imgResult: any
  public img: any
  public imageForm: FormGroup
  constructor(private formbuilder: FormBuilder, private imageservice: ImageUploadService) {
    this.imageForm = this.formbuilder.group({
      filename: [''],
      filepath: ['']
    })
  }

  ngOnInit(): void {
  }
  uploadFile(event: any) {

    this.imageFile = event.target.files[0]
    console.log(this.imageFile);

    let reader = new FileReader();
    reader.readAsDataURL(this.imageFile);
    reader.onload = () => {
      this.imgResult = reader.result;
      // console.log(this.imgResult);

    }
  }

  SaveForm() {
    this.imageForm.controls['filepath'].setValue(this.imgResult);
    this.imageservice.postImageData(this.imageForm.value).subscribe(res => {
      console.log(res);
    })
    // console.log(this.imageForm.value);


  }
}
