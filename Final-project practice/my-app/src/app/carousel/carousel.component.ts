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

  public studioId!: number
  /**
   * 
   * @param imageservice 
   */
  constructor(private imageservice: ImageService) {

  }



  ngOnInit(): void {
    this.CarouselData();
    this.artistData();
    this.ProfileData();

  }



  /**
   * to show the lastest two data of artist and studio in carosuel 
   */
  CarouselData() {
    this.imageservice.getCarouselData().subscribe(res => {
      // get last-two carouselData from Database
      // this.carouselAllData = res.slice((res.length - 2), res.length).reverse();
      this.carouselAllData = res.slice(-2).reverse();
      console.log(this.carouselAllData);


      this.imageservice.getArtistData().subscribe(res => {
        // get last-two ArtistData from Database
        // this.artistAllData = res.slice((res.length - 2), res.length).reverse();
        this.artistAllData = res.slice(-2).reverse();

        // merge twoArray to show Both Data

        this.mergeImage = (this.carouselAllData.concat(this.artistAllData));
        console.log(this.mergeImage);
        this.shuffleArray(this.mergeImage)

      })

    })


  }

  // two show the data randomly in the carousel
  /**
   * 
   * @param arr 
   */
  shuffleArray(arr: any) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  /**
   * two show the latest artist data
   */

  artistData() {
    this.imageservice.getArtistData().subscribe(res => {
      this.artisFiveData = res.slice(-5).reverse();
      // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
      // this.lastFiveData = this.artisFiveData.slice(-5).reverse()
      // console.log(this.lastFiveData);
    })
    console.log(this.carouselAllData['img']);
  }



  ProfileData() {
    this.imageservice.getCarouselData().subscribe(res => {
      this.lastFiveData = res.find(x => x.id === this.studioId)
      console.log(this.lastFiveData);

    })
  }




}