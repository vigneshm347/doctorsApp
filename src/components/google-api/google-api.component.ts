import { Component, OnInit } from '@angular/core';
import {GApiService} from '../../app/g-api.service';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.css']
})
export class GoogleApiComponent implements OnInit {

  constructor(public gApi: GApiService) { }

  ngOnInit() {
    this.gApi.getLocation().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
