import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  public artistinfo: any
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getArtistData()
  }

  getArtistData() {
    this.apiservice.getRegisterData().subscribe(res => {
      this.artistinfo = res
    })
  }

}
