import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public subject$ = new Subject();
  constructor() {

  }

  ngOnInit(): void {
    let observer = this.subject$.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`)
      },

    })

    this.subject$.next("one");
    this.subject$.next("two");
    // this.subject$.complete();

    this.subject$.subscribe({
      next: (v) => {
        console.log(`observerB : ${v}`)
      }
    })

    this.subject$.next("three");




  }


}
