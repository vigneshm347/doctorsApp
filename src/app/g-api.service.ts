import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GApiService {

  public url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=San+Francisco&key=AIzaSyC6hMKUSKzmNF3zMuU1E8mTuwgb5DlXkMA";
  public result;
  constructor(private http: Http) { }

  getLocation(){
    return this.http.get(this.url);
  }

}
