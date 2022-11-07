import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {


  // state data
  public Statename: any
  public Cityname: any
  public artistinfo: any
  // array of all items to be paged
  private allItems!: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems!: any[];
  constructor(private apiservice: ApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getStatename();
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


  // to show city for selected state

  public dropdownCity: any = [];


  populateCity(event: any) {
    // console.log(event);
    const data = event.target.value
    console.log(data);
    this.dropdownCity = this.Cityname.filter((i: any) => i.stateId == data);
    console.log(this.dropdownCity);
  }






}
