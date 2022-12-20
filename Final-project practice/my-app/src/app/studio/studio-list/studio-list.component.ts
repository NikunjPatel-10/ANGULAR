import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination, studio } from 'src/app/Model/studio.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ImageService } from 'src/app/shared/services/image/image.service';


@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {
  public studioList$!: Observable<studio[]>
  public distance: number = 2;
  public pageSize = 1;
  public pageNumber = 10;
  // public tableProperty: Pagination
  public imageData: any = []
  public studioData: any = []
  // state data
  public Statename: any
  public Cityname: any

  // city data

  /**
   * 
   * @param apiservice 
   * @param http 
   * @param imageservice 
   */
  constructor(private apiservice: ApiService, private http: HttpClient, private imageservice: ImageService) {
    // this.tableProperty = new Pagination();
    // this.tableProperty.pageNumber = 10;
    // this.tableProperty.pageSize = 1
  }

  ngOnInit(): void {
    // this.getAllStudios(this.tableProperty)
    this.studioFiveData()
    this.getImageDataList()
    this.getStatename()
    this.getCityname()
    this.onScrolllist();
  }

  getStatename() {
    this.apiservice.getStateData().subscribe(res => {
      this.Statename = res
      // console.log(this.Statename);  
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
    const dataId = event.target.value
    console.log(dataId);
    this.dropdownCity = this.Cityname.filter((i: any) => i.stateId == dataId);
    console.log(this.dropdownCity);
  }

  getImageDataList() {
    this.imageservice.getImageData().subscribe((res) => {
      this.imageData = res.map(res => res.filepath)
      console.log(this.imageData);
    })

  }

  /**
   * 
   */
  studioFiveData() {
    this.imageservice.getStudioData(this.pageNumber, this.pageSize).subscribe({
      next: (res) => {
        console.log(res);
        this.studioData = res.map(item => {
          return {
            image: item.StudioImages,
            description: item.StudioAddress,
            name: item.StudioName
          }
        }).reverse();
        this.studioData = this.studioData.concat(res);
        console.log(this.studioData);
      }
    })
  }

  // getAllStudios(tableProperty: Pagination) {
  //   this.tableProperty = tableProperty;
  //   this.studioList$ = this.imageservice.getStudioData(tableProperty);
  //   console.log(this.studioList$);

  // }

  // DataList() {
  //   this.apiservice.getjsonData(this.pageSize, this.pageNumber).subscribe({
  //     next: (value) => {
  //       this.datalist = this.datalist.concat(value);
  //       console.log(value);
  //     },
  //   })
  // }

  /**
   * for scrolling the page
   * description: method for scrolling studio page
   */
  onScrolllist() {
    this.pageSize++;
    this.studioFiveData();
  }


}
