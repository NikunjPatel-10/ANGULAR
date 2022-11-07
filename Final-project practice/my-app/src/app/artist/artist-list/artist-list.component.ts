import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

const nisPackage = require("../../../../package.json");

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {


  // state data
  public Statename: any
  public Cityname: any
  public artistinfo: any
  public scrollData: any
  // array of all items to be paged
  private allItems!: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems!: any[];
  constructor(private apiservice: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getStatename()
    this.getCityname()
    this.DataList()

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


  // to show city for selected state

  public dropdownCity: any = [];


  populateCity(event: any) {
    // console.log(event);
    const data = event.target.value
    console.log(data);
    this.dropdownCity = this.Cityname.filter((res: any) => res.stateId == data);
    console.log(this.dropdownCity);
  }



  DataList() {
    this.apiservice.getjsonData().subscribe(res => {
      this.scrollData = res
    })
  }




}
