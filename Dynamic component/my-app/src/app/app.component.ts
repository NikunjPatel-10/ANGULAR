import {
  Component, ViewChild, ViewContainerRef,
  ComponentFactoryResolver, ComponentRef, ComponentFactory
} from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen: boolean

  title = 'my-app';
  // @ViewChild('container', { read: ViewContainerRef })
  // container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public dialog: Dialog, private overlay: Overlay) {
    this.isOpen = false;
  }

  // add(): void {
  //   // create a component factory
  //   const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PopUpComponent);
  //   const componentRef = this.container.createComponent(dynamicComponentFactory)
  // }

  openDialog() {
    const portal = this.dialog.open(PopUpComponent, {
      height: '500px',
      width: '500px'
    })
  }

  displayOverlay() {
    const target = document.querySelector("#btn") as HTMLElement;
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: "cdk-overlay-transparent-backdrop",
      panelClass: "mat-elevation-z8",
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: "start",
            originY: "bottom",
            overlayX: "start",
            overlayY: "top"
          }
        ])
    });
    const component = new ComponentPortal(PopUpComponent);
    const componentRef = overlayRef.attach(component);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}
