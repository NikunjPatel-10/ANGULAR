import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
@Input() name:any;
@Output() newItemEvent = new EventEmitter<string>;
  constructor() { }

  ngOnInit(): void {
    
  }

  

}
