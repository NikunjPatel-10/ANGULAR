import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public subject: Subject<any>
  constructor() {
    this.subject = new Subject();
  }

  sendMessage(msg: any) {
    this.subject.next(msg);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
