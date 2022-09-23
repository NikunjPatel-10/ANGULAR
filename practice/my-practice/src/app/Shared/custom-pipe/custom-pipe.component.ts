import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {
public user:string
  constructor() {
    this.user="how to make custom pipe";
   }

  ngOnInit(): void {
  }

}
