import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.scss']
})
export class ApiDataComponent implements OnInit {
  public apidata: any;
  constructor(private api: ApiServiceService) {

  //  api.getapiData().subscribe((data)=>{
  //   console.log(this.apidata = data);
  //   this.apidata = data
  //  });

  
  }

  ngOnInit(): void {
  }

}
