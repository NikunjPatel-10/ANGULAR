import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { ImageService } from '../shared/services/image/image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public carouselAllData: any = []
  public lastTwoImage: any = []
  public lastArtistImage: any = []
  public mergeImage: any = []
  public artistAllData: any = []
  public lastFiveData: any = []
  public artisFiveData: any = []
  public studio: any = []
  public userRole : any

  /**
   * 
   * @param imageservice 
   */
  constructor(private imageservice: ImageService) { }



  ngOnInit(): void {
    this.CarouselData();
    this.artistData()
    this.profileData()

  }
  /**
   * to show the lastest two data of artist and studio in carosuel 
   */
  CarouselData() {
    this.imageservice.getCarouselData().subscribe(res => {
      // get last-two carouselData from Database
      this.carouselAllData = res.slice(-2).reverse();
      // this.carouselAllData = res.slice((res.length - 2), res.length).reverse();


      // this.lastTwoImage = this.carouselAllData.slice((this.carouselAllData.length - 2), this.carouselAllData.length).reverse();
      // console.log(this.lastFourImage);

      this.imageservice.getArtistData().subscribe(res => {
        // get last-two ArtistData from Database
        this.artistAllData = res.slice(-2).reverse();
        // this.artistAllData = res.slice((res.length - 2), res.length).reverse();

        // this.lastArtistImage = this.artistAllData.slice((this.artistAllData.length - 2), this.artistAllData.length).reverse();

        // merge twoArray to show Both Data

        this.mergeImage = (this.carouselAllData.concat(this.artistAllData));
        console.log(this.mergeImage);
        this.shuffleArray(this.mergeImage)
      })

    })

  }

  // two show the data randomly in the carousel

  shuffleArray(arr: any) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  /**
   * two show the lastest artist data
   */

  artistData() {
    this.imageservice.getArtistData().subscribe(res => {
      this.artisFiveData = res.slice(-5).reverse();
      // this.lastFiveData = this.artisFiveData.slice(-5).reverse()
      // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
    })
    // console.log(this.carouselAllData['img']);
  }
  

  profileData() {
    this.imageservice.getCarouselData().subscribe(res => {
      // console.log(res);
      // this.studio = res[1];
      // console.log(this.studio);

      this.studio = res

      this.lastFiveData = res.filter(x => x.studio == this.studio.userTypeId)      // this.lastFiveData = this.studio.
      console.log(this.lastFiveData);

      if(this.studio.userTypeId == 1){

      }
      // console.log(this.studio.studioId);
      // console.log(this.lastFiveData);
      // this.lastFiveData = this.studio.find((x: any) => x.id == this.studio.studioId)
    })
  }




}