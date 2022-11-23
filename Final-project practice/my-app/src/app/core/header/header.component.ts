import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user.model';
import { CdkOverlayService } from 'src/app/shared/services/cdk/cdk-overlay.service';
import { ImageService } from 'src/app/shared/services/image/image.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showStudio: boolean;
  public showArtist: boolean;
  public userTypeId: any
  public userDetails: any
  public userDetailId: any
  isOpen = false
  b: any;
  constructor(private overlayservice: CdkOverlayService, private imageservice: ImageService) {
    this.showArtist = false;
    this.showStudio = false;
  }

  ngOnInit(): void {
    this.userDetail()
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
    // localStorage.setItem('userId', '2')

    this.currentUser()
  }

  userDetail() {
    this.imageservice.getUserData().subscribe((res: user[]) => {
      this.userDetails = res.filter((c) => {
        this.userDetailId = c.id
        console.log(this.userDetailId);
      })
    })
  }
  currentUser() {
    // var g = localStorage.getItem('userId')
    this.imageservice.getUserData().subscribe((res: user[]) => {
      this.b = res.find(c => c.id == 6)
      console.log(this.b);

    })
    // console.log(this.b);?
  }


}
