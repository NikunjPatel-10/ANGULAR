import { Component, OnInit } from '@angular/core';
import { concat, filter, first, forkJoin, from, fromEvent, interval, map, merge, of, take, timer } from 'rxjs';
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

    const a = [1, 2, 3, 4, 5, 6]

    this.obs8 = filter((a: any) => a % 2 === 0)

    this.obs8.subscribe((x: any) => {
      console.log(x);

    })


  }







}
