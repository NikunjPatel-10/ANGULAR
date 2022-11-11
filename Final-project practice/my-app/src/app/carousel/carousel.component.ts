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
  constructor(private imageservice: ImageService) { }



  ngOnInit(): void {
    this.CarouselData();
    this.artistData()
    // this.artistData();
    // this.dhsjh()
    // this.mergeImage = this.lastFourImage.concat(this.lastArtistImage)
  }

  CarouselData() {
    this.imageservice.getCarouselData().subscribe(res => {
      // get last-two carouselData from Database
      this.carouselAllData = res.slice((res.length-2),res.length).reverse();


      // this.lastTwoImage = this.carouselAllData.slice((this.carouselAllData.length - 2), this.carouselAllData.length).reverse();
      // console.log(this.lastFourImage);

      this.imageservice.getArtistData().subscribe(res => {
        // get last-two ArtistData from Database
        this.artistAllData = res.slice((res.length-2), res.length).reverse();

        // this.lastArtistImage = this.artistAllData.slice((this.artistAllData.length - 2), this.artistAllData.length).reverse();

        // merge twoArray to show Both Data

        this.mergeImage = this.carouselAllData.concat(this.artistAllData);
        // this.mergeImage = this.lastTwoImage.concat(this.lastArtistImage)
        // console.log(this.mergeImage);

        
      })
      // this.mergeImage = this.lastFourImage.concat(this.lastArtistImage)
      // console.log(this.mergeImage);

    })


    // this.imageservice.getArtistData().subscribe(res => {
    //   this.artistAllData = res;
    //   this.lastArtistImage = this.artistAllData.slice((this.artistAllData.length - 2), this.artistAllData.length)
    // })
    // this.mergeImage = this.lastFourImage.concat(this.lastArtistImage)


  }

  artistData() {
    this.imageservice.getArtistData().subscribe(res => {
      this.artisFiveData = res;
      this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
    })
    console.log(this.carouselAllData['img']);
  }




}
