import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/shared/services/image/image.service';

@Component({
  selector: 'app-studio-form',
  templateUrl: './studio-form.component.html',
  styleUrls: ['./studio-form.component.scss']
})
export class StudioFormComponent implements OnInit {
  public imageFile!: File[];
  public imgResult: any = []
  public img: any
  public imageData!: any
  public base64: any = []
  public totalImgLength: any
  // public a!: any
  public studioForm: FormGroup
  constructor(private formbuilder: FormBuilder, private imageservice: ImageService) {
    this.studioForm = this.formbuilder.group({
      filename: [''],
      filepath: ['']
    })

  }

  ngOnInit(): void {
    // this.getImageData()
  }

  uploadFile(event: any) {

    // this.imageFile = event.target.files[0]
    // // console.log(this.imageFile);

    // let reader = new FileReader();
    // reader.readAsDataURL(this.imageFile);
    // reader.onload = () => {
    //   this.imgResult = reader.result;
    //   // console.log(this.imgResult);

    // }

    for (var i = 0; i < event.target.files.length; i++) {
      this.totalImgLength = this.imgResult.push(event.target.files[i]);
    }

    // for total-length of file
    var fileLength = this.totalImgLength - 1
    console.log(fileLength);
    // console.log(this.imgResult[fileLength])


    this.imageFile = this.imgResult
    console.log(this.imageFile[fileLength]);
    this.img = this.imageFile[fileLength]

    let reader = new FileReader();
    reader.readAsDataURL(this.img);
    reader.onload = () => {
      this.imageData = reader.result;
      console.log(this.imageData);
      // const b = JSON.stringify(this.a)
      this.base64.push(this.imageData)
    }


    // console.log(result);


  }
  // delete image 
  deleteImg(index: any) {
    // console.log(id);
    // console.log(this.imageData);
    // this.imageData = null

    // Delete the item from fileNames list
    this.base64.splice(index, 1);
    // delete file from FileList
    // this.fileList.splice(index, 1);


  }

  // to post imageData

  SaveForm() {
    this.studioForm.controls['filepath'].setValue(this.base64);
    // const b = this.studioForm.controls['filename'].setValue(this.base64.filename);
    this.imageservice.postImageData(this.studioForm.value).subscribe(res => {
      // console.log(res);
      // this.getImageData()
    })
    // console.log(this.imageForm.value);
    console.log(this.base64, 'hello');
    // console.log(b, 'world');


  }

  // getImageData() {
  //   this.imageservice.getImageData().subscribe(res => {
  //     this.imageData = res
  //   })
  // }

}
