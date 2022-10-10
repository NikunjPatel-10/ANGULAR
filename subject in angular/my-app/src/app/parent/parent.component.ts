import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public messageList: string[];
  public subscription: Subscription
  constructor(private subjectservice: SubjectService) {
    this.messageList = []
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.subjectservice.getMessage().subscribe((msg) => {
      this.messageList.push(msg)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
