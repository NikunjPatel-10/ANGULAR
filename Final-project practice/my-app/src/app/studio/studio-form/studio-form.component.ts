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
      var b = this.imgResult.push(event.target.files[i]);
    }
    var fileL = b - 1
    console.log(fileL);

    // console.log(this.imgResult[fileL])
    this.imageFile = this.imgResult
    console.log(this.imageFile[fileL]);
    var img = this.imageFile[fileL]

    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      this.imageData = reader.result;
      console.log(this.imageData);
      // const b = JSON.stringify(this.a)
      this.base64.push(this.imageData)
    }


    // console.log(result);


  }
  // delete image 
  deleteImg() {
    // console.log(id);
    // console.log(this.imageData);
    this.imageData = null
    


  }

  SaveForm() {
    this.studioForm.controls['filepath'].setValue(this.imgResult);
    this.imageservice.postImageData(this.base64).subscribe(res => {
      console.log(res);

      // this.getImageData()
    })
    // console.log(this.imageForm.value);
  }

  // getImageData() {
  //   this.imageservice.getImageData().subscribe(res => {
  //     this.imageData = res
  //   })
  // }

}
