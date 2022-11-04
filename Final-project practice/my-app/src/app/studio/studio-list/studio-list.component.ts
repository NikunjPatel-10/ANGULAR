import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {

  // state data
  State: any = [
    { id: 1, name: "Gujarat" },
    { id: 2, name: "Maharastra" },
    { id: 3, name: "Rajasthan" }
  ]

  // city data
  City: any = [
    { id: 1, name: "Ahmedabad", state: 1 },
    { id: 2, name: "Rajkot", state: 1 },
    { id: 3, name: "Gandhinagar", state: 1 },
    { id: 4, name: "Mumbai", state: 2 },
    { id: 5, name: "Pune", state: 2 },
    { id: 6, name: "Udaipur", state: 3 },
    { id: 7, name: "Jaipur", state: 3 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // to show city for selected state
  public selectedState: any = "";
  public selectedCity: any = "";
  public dropdownCity: any = [];


  populateCity(event: any) {
    // console.log(event);
    const data = event.target.value
    console.log(data);
    this.dropdownCity = this.City.filter((i: any) => i.state == data);
    console.log(this.dropdownCity);
  }

}
