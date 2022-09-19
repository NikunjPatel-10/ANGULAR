import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @Input() myInput: any;
  @Output() myOutput: EventEmitter<string>;
  constructor() {
    this.myOutput = new EventEmitter();
  }

  ngOnInit(): void {
    // console.log(this.myInput);
  }
  myData(data: any) {
    this.myOutput.emit(data);
  }
  

}
