import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() myinputMsg!: string;
  @Output()  myOutput:EventEmitter<string> = new EventEmitter();
  // outputMessage:string= "i am child component."
  constructor() {
    
   }

  ngOnInit(): void {
   
    console.log(this.myinputMsg);
  }
  // list:any=[]
  getData:any=''

  input(e:any){
    this.getData=(e.target.value);
   
   
  }

  sendValues(){
    this.myOutput.emit(this.getData)
    // this.myOutput.emit(this.outputMessage);
  }


}
