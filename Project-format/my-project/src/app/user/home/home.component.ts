import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
<<<<<<< HEAD
=======

>>>>>>> 21a72ee747616a13723feec639447e24af3df043
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  public subject = new AsyncSubject();
  public observer1: any
  public observer2: any
  public observer3: any

  constructor() {
   
  }

  ngOnInit(): void {


    this.observer1 = this.subject.subscribe({
      next: (v) => {
        console.log(`data A: ${v}`)
      },
      error: (v) => {
        console.log('error')
      },
      complete: () => {
        console.log('complete');

      }
    })
    this.subject.next(1);
    this.subject.next(2);
    this.subject.complete()
    this.subject.next(2.5);


    this.observer2 = this.subject.subscribe({
      next: (v) => {
        console.log(`data B :${v}`);

      }

    })

    this.subject.next(3);
    this.subject.next(3.2);
    this.subject.next(4);

   this.observer3 = this.subject.subscribe({
      next: (v) => {
        console.log(`data c : ${v}`)
      },
      complete: () => {
        console.log('complete');

      }
    })

    this.subject.next(5)
    this.subject.next(6)
    this.subject.next(7)
   
=======
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

>>>>>>> 21a72ee747616a13723feec639447e24af3df043



  }


<<<<<<< HEAD




=======
>>>>>>> 21a72ee747616a13723feec639447e24af3df043
}
