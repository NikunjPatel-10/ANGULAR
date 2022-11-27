import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.scss']
})
export class StudioDetailComponent implements OnInit {

  public items = [
    { name: 'Python' },
    { name: 'Node Js' },
    { name: 'Java' },
    { name: 'PHP' },
    { name: 'Django' },
    { name: 'Angular' },
    { name: 'Vue' },
    { name: 'ReactJs' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
