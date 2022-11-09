import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ImageService } from 'src/app/shared/services/image/image.service';
import { image } from '../studio-form/studio.model';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {

  public imageData: any = []

  // state data
  public Statename: any
  public Cityname: any

  // city data


  constructor(private apiservice: ApiService, private http: HttpClient, private imageservice: ImageService) { }

  ngOnInit(): void {
    this.getImageDataList()
    this.getStatename()
    this.getCityname()
  }

  getStatename() {
    this.apiservice.getStateData().subscribe(res => {
      this.Statename = res
    })
  }

  getCityname() {
    this.apiservice.getCityData().subscribe(res => {
      this.Cityname = res
    })
  }


  public dropdownCity: any = [];

  /**
   * to get the city of that particular state
   * @param event 
   */
  populateCity(event: any) {
    // console.log(event);
    const data = event.target.value
    console.log(data);
    this.dropdownCity = this.Cityname.filter((i: any) => i.state == data);
    console.log(this.dropdownCity);
  }

  getImageDataList() {
    this.imageservice.getImageData().subscribe((res) => {
      this.imageData = res.map(res => res.filepath)
      console.log(this.imageData);
    })

  }



}
