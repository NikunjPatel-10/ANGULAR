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

  constructor(private overlayservice: CdkOverlayService, private overlay: Overlay) { }

  ngOnInit(): void {
  }

  displayOverlay() {
    const target = document.querySelector("#btn") as HTMLElement;
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      // backdropClass: 'bg',
      backdropClass: 'bgdigh',
      panelClass: "overlaySize",
      positionStrategy: this.overlay

        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top",

          }


        ])
    });

    const component = new ComponentPortal(DashboardComponent);
    const componentRef = overlayRef.attach(component);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

  }


  onClick() {
    this.overlayservice.displayOverlay(DashboardComponent)
  }
}
