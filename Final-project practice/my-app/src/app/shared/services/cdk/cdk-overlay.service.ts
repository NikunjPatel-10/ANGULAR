import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DashboardComponent } from 'src/app/core/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class CdkOverlayService {
  public overlayRef!: OverlayRef;
  overlayTemplate: any;
  constructor(private overlay: Overlay) { }


  displayOverlay(component: any) {

    this.overlayRef = this.overlay.create({

      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',

      positionStrategy: this.overlay

        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })

    const portal = new ComponentPortal(component)
    this.overlayRef.attach(portal)
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());

  }
}
