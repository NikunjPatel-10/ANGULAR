import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { CdkOverlayService } from 'src/app/shared/services/cdk/cdk-overlay.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false
  constructor(private overlayservice: CdkOverlayService) { }

  ngOnInit(): void {
  }


}
