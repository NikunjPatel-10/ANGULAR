import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1,2,3)
   .pipe(map((x)=> x * x))
   .subscribe((v)=> console.log(`value : ${v}`)
   )
  }

}
