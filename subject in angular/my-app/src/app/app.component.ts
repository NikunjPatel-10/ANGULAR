import { Component } from '@angular/core';
import { SubjectService } from './service/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public msg: string;

  constructor(private subjectservice: SubjectService) {
    this.msg = ''
  }
  addMessage() {
    this.subjectservice.sendMessage(this.msg)
  }
  blank() {

  }
}
