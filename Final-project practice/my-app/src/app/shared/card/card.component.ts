import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() artistData:any;
@Input() studioData:any;
  constructor() { 
    this.artistData = []
    this.studioData = []
  }

  ngOnInit(): void {
  }

}
