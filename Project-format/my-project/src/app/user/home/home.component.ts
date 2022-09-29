import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public subject: BehaviorSubject<any>;
  public user1: any
  public user2: any
  public user3: any

  constructor() {
    this.subject = new BehaviorSubject(0);
  }

  ngOnInit(): void {
   this.user1 = this.subject.subscribe({
    next:(v)=>{
      console.log(`data a :${v}`);
      
    },
    error:(v)=>{
      console.log('error');
      
    },
    complete:()=>{
      console.log('completed');
      
    }
   })

   this.subject.next(1)
   this.subject.next(2)
   this.subject.next(3)

   this.user2 = this.subject.subscribe({
    next:(v)=>{
      console.log(`data B :${v}`);
      
    },
    error:(v)=>{
      console.log('error');
      
    },
    complete:()=>{
      console.log('completed');
      
    }
   })

   this.subject.next(4)
   this.subject.next(5)
   this.subject.next(6)
   
  }
}
