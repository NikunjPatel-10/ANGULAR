import { Component, OnInit } from '@angular/core';
import { concat, debounceTime, distinctUntilChanged, filter, first, forkJoin, from, fromEvent, interval, map, merge, of, pipe, take, takeLast, takeUntil, timer } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  public obs1: any;
  public obs2: any;
  public obs3: any;
  public obs4: any;
  public obs5: any;
  public obs6: any;
  public obs7: any;
  public obs8: any;
  public obs9: any;
  public obs10: any;
  public obs11: any;
  public obs12: any;
  public obs13: any;
  public obs14: any;
  public objectdata: any;
  public fromeventData: any;
  constructor(public Data: ApiServiceService) { }


  ngOnInit(): void {

    // of operators
    // this.obs1 = of(1, 2, 3);

    // this.obs1.subscribe((res: any) => {
    //   console.log(res);
    //   this.Data.print(res, 'Elcontainer');
    // })

    // this.obs2 = of({ a: 'nikunj', b: 'patel' });
    // this.obs2.subscribe((res: any) => {
    //   this.objectdata = res;
    //   this.Data.print(this.objectdata, 'Objectdata')
    // })

    // from operator
    // this.obs3 = from(['a', 'b', 'c'])

    // this.obs3.subscribe((res: any) => {
    //   console.log(res);
    //   this.Data.print(res, 'fromoperator')
    // })

    // fromevent operator

    // this.obs4 = fromEvent(document, 'click').subscribe(res => {
    //   console.log(res);
    // })

    // interval operators

    // this.obs5 = interval(2000).subscribe(res => {
    //   // console.log('res', 'hello');

    // })


    // combination or joint operators

    // concat operators

    // const a = of(1, 2, 3)
    // const b = of(4, 5, 6)
    // const c = of(7, 8, 9)

    // this.obs6 = concat(a, b, c).subscribe(res => {
    //   console.log(res);

    // })

    // merge operator

    // const timer1 = interval(1000).pipe(take(10));
    // const timer2 = interval(1000).pipe(take(6));
    // // const timer3 = interval(500).pipe(take(10));

    // // const concurrent = 2; // the argument
    // const merged = merge(timer1, timer2);
    // merged.subscribe(x => console.log(x));


    // forkjoin operators

    // this.obs7 = forkJoin({
    //   a: of(1,2,3),
    //   b:timer(0),
    //   c:Promise.resolve("your promise is successfully completed")
    // })

    // this.obs7.subscribe({

    //   next:(v: any)=>{
    //     console.log(v);

    //   }
    // })


    // filtering operators

    // filter

    //  this.obs8 = of(1,2,3,4,5,6).pipe(filter(val=> val % 2 === 0)).subscribe(res=>{
    //   console.log(res);

    //  })

    // different types of operators

    // this.obs9 = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(take(4)).subscribe(res=>{
    //   console.log(res);

    // })

    // takeLast opearators

    // this.obs10 = of(1,2,3,4,5,6,7,8,9,10).pipe(takeLast(5)).subscribe(res=>{
    //   console.log(res);

    // })

    // takeUntil operators
    // this.obs11 = from([1,2,3,4,5,6,7,8]).pipe(takeUntil(timer(4))).subscribe(res=>{
    //   console.log(res);

    // })

    // debounceTime operators

    // this.obs12 = fromEvent(document, 'click').pipe(debounceTime(1000)).subscribe(res => {
    //   console.log(res);

    // })

    // distinctUntilChanged operators

    // this.obs13 = of(1 ,1,1,2,2,2,1,1,3,3).pipe(distinctUntilChanged()).subscribe(res=>{
    //   console.log(res);

    // })

    // map operator

    // this.obs14 = fromEvent(document, 'click').pipe(map((ev:any)=>ev.clientX)).subscribe(res => {
    //   console.log(res);

    // })


  }







}
