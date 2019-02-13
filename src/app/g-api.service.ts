import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable()
export class GApiService {

  public url:string;
  public result;
  constructor(private http: Http) { }

  getLocation(origin, destination){
    this.url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin},MA&destinations=${destination}&departure_time=now&key= AIzaSyDAmA_VZYhPC8flnn1h5SFyCPI8_EObPw4`;
    return this.http.get(this.url);

  }

}
