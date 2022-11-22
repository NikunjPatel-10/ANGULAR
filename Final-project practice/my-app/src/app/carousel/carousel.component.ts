import { Component, OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { artist } from '../Model/artist.model';
import { studio } from '../Model/studio.model';
import { user } from '../Model/user.model';
import { usertype } from '../Model/usertype.model';
import { ImageService } from '../shared/services/image/image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  //----variables----//
  public artistTwoData: any = []
  public studioTwoData: any = []
  public artistLastFiveData: any = []
  public studioLastFiveData: any = []
  public mergeImage: any = []
  public lastFiveData: any = []
  public studiodata: any = []
  public userRole: any
  public artistLastFourData: any = [];
  public studioLastFourData: any = [];
  public userTypeId: any
  public userTypeId1: any
  public userTypeId2: any
  public showStudio: boolean;
  public showArtist: boolean;
  public user: string;
  public text!: string;
  public userType!: any;
  public allUserData: any
  public detail: any = [];
  // public data: any = [];


  /**
   * 
   * @param imageservice 
   */
  constructor(private imageservice: ImageService) {
    this.showArtist = false
    this.showStudio = false
    this.user = ''
  }



  ngOnInit(): void {
    this.CarouselData();
    this.artistData()
    this.profileData()
    this.studioFiveData()
    this.userData()
    localStorage.setItem("userTypeId", "3");


  }

  userData() {
    this.imageservice.getalluser().subscribe((res: usertype[]) => {
      this.userType = res.filter((c) => {
        this.userTypeId = c.userTypeId
        console.log(this.userTypeId);
      })
    })



  }


  /**
   * to show the lastest two data of artist and studio in carosuel 
   */
  CarouselData() {
    // -----to get get studio last-twodata----
    // this.imageservice.getStudioData().subscribe((res: studio[]) => {
    //   this.studioTwoData = res.map(item => {
    //     return {
    //       image: item.studioimg,
    //       description: item.studioDescription,
    //       title: item.studioLocation
    //     }
    //   }).slice(-2).reverse()

    //   // ----- to get artist last-two data -------
    //   this.imageservice.getArtistData().subscribe((res: artist[]) => {
    //     // console.log(res)
    //     this.artistTwoData = res.map(item => {
    //       // console.log(item)
    //       return {
    //         image: item.artistimg,
    //         description: item.artistDescription,
    //         title: item.artistLocation
    //       }
    //       // this.lastFiveData = this.artisFiveData.slice(-5).reverse()
    //       // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()

    //     }).slice(-2).reverse()

    //     this.mergeImage = (this.studioTwoData.concat(this.artistTwoData));
    //     this.shuffleArray(this.mergeImage)

    //   })

    // })

    // ----- for practice to get in one data ----//


    this.imageservice.getStudioData().subscribe((res: studio[]) => {
      this.studioTwoData = res.map(item => {
        return {
          image: item.StudioImages,
          description: item.StudioAddress,
          name: item.StudioName
        }
      })


      //   // ----- for practice to get in one data ----//

      this.imageservice.getArtistData().subscribe((res: artist[]) => {
        // console.log(res)

        this.artistTwoData = res.map(item => {
          // console.log(item)
          return {
            image: item.ArtistImages,
            description: item.ArtistType,
            name: item.ArtistName
          }
          // this.lastFiveData = this.artisFiveData.slice(-5).reverse()
          // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()
        })


        if (this.userTypeId == 1) {
          this.mergeImage = this.artistTwoData.slice(-4).reverse()
        }

        else if (this.userTypeId == 2) {
          this.mergeImage = this.studioTwoData.slice(-4).reverse()

        }

        else if (this.userTypeId == 3) {
          this.mergeImage = ((this.studioTwoData.slice(-2).reverse()).concat(this.artistTwoData.slice(-2).reverse()))
          console.log(this.mergeImage);
        }


      })

    })

  }
  // ----two show the data randomly in the carousel----//

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
    this.imageservice.getArtistData().subscribe((res: artist[]) => {
      // console.log(res)
      this.artistLastFiveData = res.map(item => {
        // console.log(item)
        return {
          image: item.ArtistImages,
          description: item.ArtistType,
          name: item.ArtistName
        }

        // this.lastFiveData = this.artisFiveData.slice((this.artisFiveData.length - 5), this.artisFiveData.length).reverse()

      }).slice(-6).reverse();


      // console.log(this.artistFiveData);

      // console.log(this.carouselAllData['img']);
    })
  }

  //---- Two show the latest studiodata---//
  studioFiveData() {
    this.imageservice.getStudioData().subscribe((res: studio[]) => {
      this.studioLastFiveData = res.map(item => {
        return {
          image: item.StudioImages,
          description: item.StudioAddress,
          name: item.StudioName
        }
      }).slice(-6).reverse();

    })




  }

  profileData() {
    this.imageservice.getStudioData().subscribe(res => {
      // console.log(res);
      // this.studiodata = res[1];
      // console.log(this.studiodata);

      // this.studiodata = res

      this.lastFiveData = res[0];    // this.lastFiveData = this.studiodata.
      console.log(this.lastFiveData);

      // this.text = (this.userTypeId == 1) ? "STUDIO" : "ARTIST"
      this.userTypeId = localStorage.getItem("userTypeId")

      if (this.userTypeId == 1) {
        this.showArtist = true;
      }

      else if (this.userTypeId == 2) {
        this.showStudio = true;
      }

      else if (this.userTypeId == 3) {
        this.showArtist = true;
        this.showStudio = true
      }


      // console.log(this.studiodata.studiodataId);
      // console.log(this.lastFiveData);
      // this.lastFiveData = this.studiodata.find((x: any) => x.id == this.studiodata.studioId)
    })
  }


}