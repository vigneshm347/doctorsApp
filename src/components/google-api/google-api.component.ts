import { Component, OnInit } from '@angular/core';
import {GApiService} from '../../app/g-api.service';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.css']
})
export class GoogleApiComponent implements OnInit {
  public direction: any[];
  public origin: any;
  public destination: any;
  public isValid = false;
  public splitPlace: string[];
  constructor(public gApi: GApiService) { }

  ngOnInit() {
    
  }

  getDistance(){
    this.gApi.getLocation(this.origin, this.destination).subscribe(
      (res) => {
        this.direction = res.json();
        this.isValid = true;
      },
      (err) => console.log(err)
    );
  }

  getPlace(place: string){
    this.splitPlace = place.split(',');
    return this.splitPlace[0];
  }

}
