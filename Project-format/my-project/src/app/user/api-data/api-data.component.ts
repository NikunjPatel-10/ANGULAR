import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  public observable: Observable<any>
  public user1: any
  public user2: any
  constructor(private api: ApiServiceService) {
    this.observable = new Observable((subscriber) => {

      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next(4);
      subscriber.next(5);
      setTimeout(() => {
        subscriber.next(6)
      }, 2000);

    })
  }



  ngOnInit(): void {
    this.observable.subscribe({
      next: (v) => {
        console.log(` data A :${v}`);

      },
      error: () => {

      },
      complete: () => {

      }
    });

    this.user1 = this.observable.subscribe({
      next: (v) => {
        console.log(` data B :${v}`);

      }
    });

    this.user2 = this.observable.subscribe({
      next: (v) => {
        console.log(` data c :${v}`);

      }
    })


  }

}
