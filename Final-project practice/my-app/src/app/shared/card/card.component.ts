import { Component, Input, OnInit } from '@angular/core';
import { artist } from 'src/app/Model/artist.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: any
  public artist: boolean = true
  constructor() {

  }

  ngOnInit(): void {
    console.log(this.cardData);

  }

}
