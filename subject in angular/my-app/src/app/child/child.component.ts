import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public messageList: string[];
  public subscription: Subscription
  constructor(public subjectservice: SubjectService) {
    this.messageList = []
    this.subscription = new Subscription
  }

  ngOnInit(): void {

    this.subscription = this.subjectservice.getMessage().subscribe(msg => {

      this.messageList.push(msg)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
