import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  public observable = new Observable();
  public subscriber1: any
  public subscriber2: any
  constructor(private api: ApiServiceService) {

  }

  ngOnInit(): void {
    this.subscriber1 = this.observable.subscribe({
      next: (v) => {
        console.log(`data A :${v}`);

      },
      error: (v) => {

      },
      complete: () => {

      }
    })

    this.subscriber1.next(1);
    this.subscriber1.next(2);
    // this.subscriber1.complete();
    this.subscriber1.next(3);
    this.subscriber2 = this.subscriber1.next(4)

    
  }

}
