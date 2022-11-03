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

  public artistinfo: any
  // array of all items to be paged
  private allItems!: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems!: any[];
  constructor(private apiservice: ApiService, private http: HttpClient) { }

  ngOnInit(): void {



    // get dummy data
    this.http.get("http://localhost:3000/register")
      // .pipe(map((response: Response) => response.json()))
      .subscribe((data: any) => {
        // set items to json response
        this.allItems = data;

        // initialize to page 1
        this.setPage(1);
      });
    // this.getArtistData()
  }

  // getArtistData() {
  //   this.apiservice.getRegisterData().subscribe(res => {
  //     this.artistinfo = res
  //   })
  // }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.apiservice.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
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


  // for scroll content data using json file

  posts = ' '.repeat(100).split('').map((s, i) => i + 1)

  onScroll() {
    const length = this.posts.length
    setTimeout(() => {
      const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)

      // This approach should be used to avoid creating another memory address to the array
      while (p.length) this.posts.push(p.shift())
    }, 1000)
  }


}
