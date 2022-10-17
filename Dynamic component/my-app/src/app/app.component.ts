import { Component, ViewChild , ViewContainerRef, 
  ComponentFactoryResolver,ComponentRef,ComponentFactory } from '@angular/core';
import { PopUpComponent } from './pop-up/pop-up.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild('container' , { read: ViewContainerRef})
  container!: ViewContainerRef;

  constructor(private componentFactoryResolver : ComponentFactoryResolver){

  }

  add() : void{

    // create a component factory
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PopUpComponent);
    const componentRef = this.container.createComponent(dynamicComponentFactory)

  }
}
